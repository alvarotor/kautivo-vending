// Get the base path for the current environment
export function getBasePath(): string {
  // In production (GitHub Pages), use the repository name as base path
  if (import.meta.env.PROD) {
    return '/kautivo-vending'
  }
  // In development, no base path needed
  return ''
}

// Create a full path including base path
export function createPath(path: string): string {
  const basePath = getBasePath()
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}

// Navigate to a path with proper base path handling
export function navigateToPath(path: string): void {
  const fullPath = createPath(path)
  window.history.pushState({}, '', fullPath)
  // Trigger a popstate event to update the router
  window.dispatchEvent(new PopStateEvent('popstate'))
}