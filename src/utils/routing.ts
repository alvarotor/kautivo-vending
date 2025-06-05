// This file contains routing utilities for the Kautivo Vending app
// The base path is now handled by Vite's base configuration and GitHub Pages SPA redirect scripts

export function getBasePath(): string {
  // In production (GitHub Pages), use the repository name as base path
  if (import.meta.env.PROD) {
    return '/kautivo-vending'
  }
  // In development, no base path needed
  return ''
}