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
    // Initialize animations after component mounts and DOM is ready
    const timer = setTimeout(() => {
      initializeAnimations()
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <I18nProvider>
      <div class="app">
        <Header />
        <main>
          <Router onChange={handleRouteChange}>
            <Route path={`${basePath}/`} component={Home} />
            <Route path={`${basePath}/about`} component={About} />
            <Route path={`${basePath}/products`} component={Products} />
            <Route path={`${basePath}/benefits`} component={Benefits} />
            <Route path={`${basePath}/testimonials`} component={Testimonials} />
            <Route path={`${basePath}/contact`} component={Contact} />
            {/* Fallback route for development */}
            {!basePath && <Route path="/" component={Home} />}
            {!basePath && <Route path="/about" component={About} />}
            {!basePath && <Route path="/products" component={Products} />}
            {!basePath && <Route path="/benefits" component={Benefits} />}
            {!basePath && <Route path="/testimonials" component={Testimonials} />}
            {!basePath && <Route path="/contact" component={Contact} />}
          </Router>
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}