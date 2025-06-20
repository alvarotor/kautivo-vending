// Google Sheets document ID from environment variable
const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SPREADSHEET_ID || '1yRSLyAxVK44ECLKdxkdS-wAgi13gFlYqh4WBBMvNmLE'

// Service Account credentials from environment variables
const credentials = {
  client_email: import.meta.env.VITE_GOOGLE_CLIENT_EMAIL || '',
  private_key: (import.meta.env.VITE_GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n')
}

// Validate credentials are set
if (!credentials.client_email || !credentials.private_key) {
  console.warn('Google Sheets credentials not configured. Set VITE_GOOGLE_CLIENT_EMAIL and VITE_GOOGLE_PRIVATE_KEY environment variables.')
}

export interface ProductRow {
  [key: string]: string
}

export interface SheetsData {
  headers: string[]
  rows: ProductRow[]
}

// JWT token generation for service account authentication
async function createJWT(): Promise<string> {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  }

  const now = Math.floor(Date.now() / 1000)
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600, // 1 hour
    iat: now
  }

  // Base64 encode header and payload
  const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  
  const unsigned = `${encodedHeader}.${encodedPayload}`
  
  // Import the private key
  const privateKey = await importPrivateKey(credentials.private_key)
  
  // Sign the JWT
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    privateKey,
    new TextEncoder().encode(unsigned)
  )
  
  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
  
  return `${unsigned}.${encodedSignature}`
}

async function importPrivateKey(pem: string): Promise<CryptoKey> {
  // Remove PEM headers and whitespace
  const pemContents = pem.replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\s/g, '')
  
  // Convert to binary
  const binaryDer = atob(pemContents)
  const bytes = new Uint8Array(binaryDer.length)
  for (let i = 0; i < binaryDer.length; i++) {
    bytes[i] = binaryDer.charCodeAt(i)
  }
  
  return await crypto.subtle.importKey(
    'pkcs8',
    bytes,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256'
    },
    false,
    ['sign']
  )
}

async function getAccessToken(): Promise<string> {
  const jwt = await createJWT()
  
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  })
  
  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.status}`)
  }
  
  const data = await response.json()
  return data.access_token
}

export async function fetchFormAddressFromGoogleSheets(): Promise<string> {
  try {
    // Check if credentials are properly configured
    if (!credentials.client_email || !credentials.private_key) {
      throw new Error('Google Sheets credentials not configured properly. Please check your environment variables.')
    }
    
    // Get access token using service account
    console.log('Getting access token for form address...')
    const accessToken = await getAccessToken()
    console.log('Access token obtained successfully')
    
    // Use Google Sheets API v4 to get Configuration sheet B1 cell
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Configuration!B1`
    console.log('Fetching form address from URL:', apiUrl)
    
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })
    
    console.log('Response status:', response.status)
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('API Error:', errorData)
      throw new Error(`HTTP error! status: ${response.status} - ${errorData.error?.message || 'Unknown error'}`)
    }

    const data = await response.json()
    const values = data.values || []
    
    console.log('Successfully fetched form address data:', data)
    console.log('Values array:', values)
    console.log('Values length:', values.length)
    if (values.length > 0) {
      console.log('First row:', values[0])
      console.log('B1 cell content:', values[0] ? values[0][0] : 'undefined')
    }
    
    if (values.length === 0 || !values[0] || !values[0][0] || values[0][0].trim() === '') {
      throw new Error('Form address not found in Configuration sheet B1. Please add a URL in cell B1.')
    }
    
    const formAddress = values[0][0] as string
    console.log('Form address:', formAddress)
    return formAddress.trim()
    
  } catch (error) {
    console.error('Error in fetchFormAddressFromGoogleSheets:', error)
    throw error
  }
}

export async function fetchProductsFromGoogleSheets(): Promise<SheetsData> {
  try {
    // Check if credentials are properly configured
    if (!credentials.client_email || !credentials.private_key) {
      throw new Error('Google Sheets credentials not configured properly. Please check your environment variables.')
    }
    
    // Get access token using service account
    console.log('Getting access token...')
    const accessToken = await getAccessToken()
    console.log('Access token obtained successfully')
    
    // Use Google Sheets API v4 with service account authentication
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Products!A:C`
    console.log('Fetching from URL:', apiUrl)
    
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })
    
    console.log('Response status:', response.status)
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('API Error:', errorData)
      throw new Error(`HTTP error! status: ${response.status} - ${errorData.error?.message || 'Unknown error'}`)
    }
  
    const data = await response.json()
    const rows = data.values || []
    
    console.log('Successfully fetched data:', data)
    
    if (rows.length === 0) {
      return { headers: [], rows: [] }
    }
    
    // First row contains headers, get only first 3 columns
    const headers = rows[0].slice(0, 3).map((header: any, index: number) => (header as string) || `Column ${index + 1}`)
    
    // Convert remaining rows to objects using headers as keys, only first 3 columns
    const dataRows = rows.slice(1).map((row: any[]) => {
      const productRow: ProductRow = {}
      headers.forEach((header: string, index: number) => {
        productRow[header] = (row[index] as string) || ''
      })
      return productRow
    })
    
    console.log('Processed data - Headers:', headers, 'Rows:', dataRows)
    return { headers, rows: dataRows }
    
  } catch (error) {
    console.error('Error in fetchProductsFromGoogleSheets:', error)
    throw error
  }
}