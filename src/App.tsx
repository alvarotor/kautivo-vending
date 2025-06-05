import { Router, Route } from 'preact-router'
import { useEffect } from 'preact/hooks'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Benefits } from './pages/Benefits'
import { Testimonials } from './pages/Testimonials'
import { Contact } from './pages/Contact'
import { initializeAnimations } from './utils/animations'
import { I18nProvider } from './utils/i18n'

export function App() {
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
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/benefits" component={Benefits} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/contact" component={Contact} />
          </Router>
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}