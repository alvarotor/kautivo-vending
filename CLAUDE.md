# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start Vite development server (port 3000, auto-opens browser)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on TypeScript/JavaScript files
- `npm run typecheck` - Run TypeScript type checking without emitting files

## Architecture Overview

This is a **bilingual (English/Spanish) Preact application** for showcasing smart vending machines for wellness facilities. The project uses:

- **Preact** with TypeScript for the UI framework
- **Vite** for build tooling and development server
- **preact-router** for client-side routing
- **Google Sheets API** for dynamic data fetching (products, form configuration)

### Key Architecture Patterns

1. **Routing**: Uses `preact-router` with dynamic base path handling for GitHub Pages deployment (`/kautivo-vending/` in production)

2. **Internationalization**: Custom `I18nProvider` context (`src/utils/i18n.tsx`) wraps the entire app for bilingual support

3. **Google Sheets Integration**: Service account authentication with JWT token generation for accessing Google Sheets API:
   - Products data fetched from `Products!A:C` sheet
   - Form configuration from `Configuration!B1:C1` sheet
   - Requires `VITE_GOOGLE_CLIENT_EMAIL` and `VITE_GOOGLE_PRIVATE_KEY` environment variables

4. **Animation System**: Custom animation utilities (`src/utils/animations.ts`) with route-change re-initialization

### Directory Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Route-specific page components
- `src/services/` - External API integrations (Google Sheets)
- `src/utils/` - Utility functions (i18n, animations, routing)
- `src/data/` - Static JSON data files
- `src/styles/` - Global CSS

### N8n Integration

The project includes N8n workflow automation scripts:
- `start-n8n.sh` - Start N8n Docker container
- `stop-n8n.sh` - Stop N8n with optional volume cleanup
- `restore-n8n.sh` - Restore N8n from backup
- `n8n_data/` - Persistent N8n data directory

## Environment Variables

Required for Google Sheets integration:
- `VITE_GOOGLE_SPREADSHEET_ID` - Google Sheets document ID
- `VITE_GOOGLE_CLIENT_EMAIL` - Service account email
- `VITE_GOOGLE_PRIVATE_KEY` - Service account private key (escaped newlines)

## Deployment

- Automatically deploys to GitHub Pages via GitHub Actions on main branch pushes
- Production base path: `/kautivo-vending/`
- Manual deployment: Build and upload `dist/` folder contents