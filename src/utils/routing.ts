// This file contains routing utilities for the Kautivo Vending app

export function getBasePath(): string {
  // In production (GitHub Pages), use the repository name as base path
  if (import.meta.env.PROD) {
    return '/kautivo-vending'
  }
  // In development, no base path needed
  return ''
}

// Create a full URL path including base path
export function createPath(path: string): string {
  const basePath = getBasePath()
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}

// Navigate to a path using the correct base path
export function navigateTo(path: string): void {
  const fullPath = createPath(path)
  window.location.href = fullPath
}