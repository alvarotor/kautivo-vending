# Kautivo Vending

Smart vending solutions for wellness facilities - A bilingual (English/Spanish) website built with Preact.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type checking
npm run typecheck

# Linting
npm run lint

# Build for production
npm run build
```

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### Setup GitHub Pages

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The website will be automatically deployed on every push to main

The site will be available at: `https://[username].github.io/kautivo-vending/`

### Manual Deployment

To deploy manually:

```bash
npm run build
# Upload the dist/ folder contents to your web server
```

## Features

- Bilingual website (English/Spanish)
- Responsive design
- Smart vending machine showcases
- ROI calculator
- Contact forms
- Testimonials
- Product comparisons
