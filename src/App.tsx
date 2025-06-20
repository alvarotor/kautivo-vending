import { Router, Route } from 'preact-router'
import { useEffect } from 'preact/hooks'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Stock } from './pages/Stock'
import { Benefits } from './pages/Benefits'
import { Testimonials } from './pages/Testimonials'
import { Contact } from './pages/Contact'
import { initializeAnimations } from './utils/animations'
import { I18nProvider } from './utils/i18n'
import { getBasePath } from './utils/routing'

export function App() {
  const basePath = getBasePath()

  const handleRouteChange = () => {
    // Re-initialize animations when route changes with longer delay
    setTimeout(() => {
      initializeAnimations()
    }, 300)
  }

  useEffect(() => {
    // Initialize animations immediately
    initializeAnimations()
    
    // Also call again after a short delay to catch any dynamically loaded content
    const timer = setTimeout(() => {
      initializeAnimations()
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <I18nProvider>
      <div class="app">
        <Header />
        <main>
          <Router onChange={handleRouteChange}>
            <Route path={basePath === '' ? '/' : basePath} component={Home} />
            <Route path={`${basePath}/about`} component={About} />
            <Route path={`${basePath}/products`} component={Products} />
            <Route path={`${basePath}/stock`} component={Stock} />
            <Route path={`${basePath}/benefits`} component={Benefits} />
            <Route path={`${basePath}/testimonials`} component={Testimonials} />
            <Route path={`${basePath}/contact`} component={Contact} />
          </Router>
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}