import { useState } from 'preact/hooks'
import { route } from 'preact-router'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: Event, path: string) => {
    e.preventDefault()
    route(path)
    setIsMenuOpen(false)
  }

  return (
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a href="/" class="logo" onClick={(e) => handleNavClick(e, '/')}>
            <span class="logo-text">Kautivo</span>
          </a>
          
          <div class={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            <a href="/" class="nav-link" onClick={(e) => handleNavClick(e, '/')}>Home</a>
            <a href="/about" class="nav-link" onClick={(e) => handleNavClick(e, '/about')}>About</a>
            <a href="/products" class="nav-link" onClick={(e) => handleNavClick(e, '/products')}>Products</a>
            <a href="/benefits" class="nav-link" onClick={(e) => handleNavClick(e, '/benefits')}>Benefits</a>
            <a href="/testimonials" class="nav-link" onClick={(e) => handleNavClick(e, '/testimonials')}>Testimonials</a>
            <a href="/contact" class="nav-link nav-link-cta" onClick={(e) => handleNavClick(e, '/contact')}>Contact</a>
          </div>
          
          <button 
            class="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
      
    </header>
  )
}