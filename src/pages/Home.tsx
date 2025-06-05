import { Button } from '../components/Button'
import { useI18n } from '../utils/i18n'

export function Home() {
  const { t } = useI18n()
  
  return (
    <div class="home">
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title fade-in">
                {t('home.hero.title')} 
                <span class="text-accent"> {t('home.hero.titleAccent')}</span>
              </h1>
              <p class="hero-description fade-in">
                {t('home.hero.description')}
              </p>
              <div class="hero-actions fade-in">
                <Button href="/contact" size="large">{t('home.hero.ctaPrimary')}</Button>
                <Button href="/products" variant="secondary" size="large">{t('home.hero.ctaSecondary')}</Button>
              </div>
            </div>
            <div class="hero-image fade-in">
              <div class="image-placeholder">
                Smart Vending Machine in Modern Gym Environment
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="benefits-preview section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('home.benefits.title')}</h2>
            <p class="text-large fade-in">
              {t('home.benefits.subtitle')}
            </p>
          </div>
          
          <div class="grid grid-3 fade-in">
            <div class="benefit-card card">
              <div class="benefit-icon">💰</div>
              <h3>{t('home.benefits.revenue.title')}</h3>
              <p>{t('home.benefits.revenue.description')}</p>
            </div>
            
            <div class="benefit-card card">
              <div class="benefit-icon">🏃‍♀️</div>
              <h3>{t('home.benefits.convenience.title')}</h3>
              <p>{t('home.benefits.convenience.description')}</p>
            </div>
            
            <div class="benefit-card card">
              <div class="benefit-icon">📊</div>
              <h3>{t('home.benefits.analytics.title')}</h3>
              <p>{t('home.benefits.analytics.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="social-proof section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('home.socialProof.title')}</h2>
            <div class="stats fade-in">
              <div class="stat">
                <span class="stat-number">500+</span>
                <span class="stat-label">{t('home.socialProof.facilities')}</span>
              </div>
              <div class="stat">
                <span class="stat-number">98%</span>
                <span class="stat-label">{t('home.socialProof.satisfaction')}</span>
              </div>
              <div class="stat">
                <span class="stat-number">35%</span>
                <span class="stat-label">{t('home.socialProof.revenue')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section section">
        <div class="container">
          <div class="cta-content text-center">
            <h2 class="fade-in">{t('home.cta.title')}</h2>
            <p class="text-large fade-in">
              {t('home.cta.subtitle')}
            </p>
            <div class="cta-actions fade-in">
              <Button href="/contact" size="large">{t('home.cta.ctaPrimary')}</Button>
              <Button href="/benefits" variant="secondary" size="large">{t('home.cta.ctaSecondary')}</Button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}