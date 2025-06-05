import { Button } from '../components/Button'

export function Home() {
  return (
    <div class="home">
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title fade-in">
                Smart Vending Solutions for 
                <span class="text-accent"> Wellness Facilities</span>
              </h1>
              <p class="hero-description fade-in">
                Enhance your fitness center, spa, or wellness facility with premium vending machines 
                designed specifically for health-conscious environments. Boost revenue while serving 
                your community's wellness goals.
              </p>
              <div class="hero-actions fade-in">
                <Button href="/contact" size="large">Get Free Consultation</Button>
                <Button href="/products" variant="secondary" size="large">View Products</Button>
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
            <h2 class="fade-in">Why Choose Kautivo?</h2>
            <p class="text-large fade-in">
              Purpose-built for the wellness industry with features that matter to your business
            </p>
          </div>
          
          <div class="grid grid-3 fade-in">
            <div class="benefit-card card">
              <div class="benefit-icon">💰</div>
              <h3>Increase Revenue</h3>
              <p>Generate 24/7 passive income with high-margin healthy products your members actually want.</p>
            </div>
            
            <div class="benefit-card card">
              <div class="benefit-icon">🏃‍♀️</div>
              <h3>Member Convenience</h3>
              <p>Provide post-workout nutrition and wellness products exactly when and where members need them.</p>
            </div>
            
            <div class="benefit-card card">
              <div class="benefit-icon">📊</div>
              <h3>Smart Analytics</h3>
              <p>Track sales, inventory, and member preferences with real-time data and insights.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="social-proof section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Trusted by Leading Wellness Facilities</h2>
            <div class="stats fade-in">
              <div class="stat">
                <span class="stat-number">500+</span>
                <span class="stat-label">Facilities Served</span>
              </div>
              <div class="stat">
                <span class="stat-number">98%</span>
                <span class="stat-label">Customer Satisfaction</span>
              </div>
              <div class="stat">
                <span class="stat-number">35%</span>
                <span class="stat-label">Average Revenue Increase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section section">
        <div class="container">
          <div class="cta-content text-center">
            <h2 class="fade-in">Ready to Transform Your Facility?</h2>
            <p class="text-large fade-in">
              Join hundreds of wellness facilities already benefiting from smart vending solutions.
            </p>
            <div class="cta-actions fade-in">
              <Button href="/contact" size="large">Start Your Free Trial</Button>
              <Button href="/benefits" variant="secondary" size="large">Calculate ROI</Button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}