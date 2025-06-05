import { useState } from 'preact/hooks'
import { route } from 'preact-router'
import { useI18n } from '../utils/i18n'
import { createPath } from '../utils/routing'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useI18n()

  const handleNavClick = (e: Event, path: string) => {
    e.preventDefault()
    route(path)
    setIsMenuOpen(false)
  }

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a href={createPath('/')} class="logo" onClick={(e) => handleNavClick(e, '/')}>
            <span class="logo-text">Kautivo</span>
          </a>
          
          <div class={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            <a href={createPath('/')} class="nav-link" onClick={(e) => handleNavClick(e, '/')}>{t('nav.home')}</a>
            <a href={createPath('/about')} class="nav-link" onClick={(e) => handleNavClick(e, '/about')}>{t('nav.about')}</a>
            <a href={createPath('/products')} class="nav-link" onClick={(e) => handleNavClick(e, '/products')}>{t('nav.products')}</a>
            <a href={createPath('/benefits')} class="nav-link" onClick={(e) => handleNavClick(e, '/benefits')}>{t('nav.benefits')}</a>
            <a href={createPath('/testimonials')} class="nav-link" onClick={(e) => handleNavClick(e, '/testimonials')}>{t('nav.testimonials')}</a>
            <a href={createPath('/contact')} class="nav-link nav-link-cta" onClick={(e) => handleNavClick(e, '/contact')}>{t('nav.contact')}</a>
            <button class="language-toggle" onClick={handleLanguageToggle} title={t('common.language')}>
              {language.toUpperCase()}
            </button>
          </div>
          
          <button 
            class="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
      
    </header>
  )
}