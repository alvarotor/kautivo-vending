import { ROICalculator } from '../components/ROICalculator'
import { Button } from '../components/Button'

export function Benefits() {
  return (
    <div class="benefits">
      <section class="hero-section section">
        <div class="container">
          <div class="text-center">
            <h1 class="fade-in">Measurable Benefits for Your Wellness Facility</h1>
            <p class="text-large fade-in">
              Discover how smart vending solutions can transform your member experience 
              while generating significant additional revenue.
            </p>
          </div>
        </div>
      </section>

      <section class="roi-section section section-alt">
        <div class="container">
          <ROICalculator />
        </div>
      </section>

      <section class="benefits-detailed section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Complete Benefits Overview</h2>
          </div>
          
          <div class="benefits-grid fade-in">
            <div class="benefit-category">
              <h3>💰 Financial Benefits</h3>
              <div class="benefit-items">
                <div class="benefit-item">
                  <h4>Additional Revenue Stream</h4>
                  <p>Generate $3,000-$8,000+ monthly passive income with zero labor costs</p>
                </div>
                <div class="benefit-item">
                  <h4>High Profit Margins</h4>
                  <p>70-80% profit margins on wellness products vs. 20-30% on typical retail</p>
                </div>
                <div class="benefit-item">
                  <h4>Quick ROI</h4>
                  <p>Typical payback period of 8-14 months with continued profit thereafter</p>
                </div>
                <div class="benefit-item">
                  <h4>Revenue Sharing</h4>
                  <p>Earn 70% of all sales with no inventory investment or management required</p>
                </div>
              </div>
            </div>

            <div class="benefit-category">
              <h3>🏃‍♀️ Member Experience</h3>
              <div class="benefit-items">
                <div class="benefit-item">
                  <h4>24/7 Convenience</h4>
                  <p>Members access nutrition and wellness products anytime, even when staff isn't available</p>
                </div>
                <div class="benefit-item">
                  <h4>Post-Workout Nutrition</h4>
                  <p>Immediate access to protein bars, recovery drinks, and healthy snacks</p>
                </div>
                <div class="benefit-item">
                  <h4>Wellness Products</h4>
                  <p>Supplements, fitness accessories, and health products aligned with your facility's mission</p>
                </div>
                <div class="benefit-item">
                  <h4>Contactless Experience</h4>
                  <p>Safe, hygienic purchasing with mobile payments and touchless options</p>
                </div>
              </div>
            </div>

            <div class="benefit-category">
              <h3>📊 Operational Advantages</h3>
              <div class="benefit-items">
                <div class="benefit-item">
                  <h4>Zero Staff Requirements</h4>
                  <p>Fully automated operation with remote monitoring and restocking services</p>
                </div>
                <div class="benefit-item">
                  <h4>Real-Time Analytics</h4>
                  <p>Track sales, popular products, and member preferences through detailed reporting</p>
                </div>
                <div class="benefit-item">
                  <h4>Inventory Management</h4>
                  <p>Automatic alerts and scheduled restocking prevent out-of-stock situations</p>
                </div>
                <div class="benefit-item">
                  <h4>Brand Enhancement</h4>
                  <p>Custom branding options reinforce your facility's professional image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="case-studies section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Real Results from Real Facilities</h2>
          </div>
          
          <div class="grid grid-2 fade-in">
            <div class="case-study card">
              <div class="case-study-header">
                <h3>Elite Fitness Center</h3>
                <span class="facility-type">Premium Gym • 2,500 monthly members</span>
              </div>
              <div class="case-study-results">
                <div class="result">
                  <span class="result-number">$6,800</span>
                  <span class="result-label">Average Monthly Revenue</span>
                </div>
                <div class="result">
                  <span class="result-number">11 months</span>
                  <span class="result-label">Payback Period</span>
                </div>
                <div class="result">
                  <span class="result-number">95%</span>
                  <span class="result-label">Member Satisfaction</span>
                </div>
              </div>
              <p class="case-study-quote">
                "The vending machine has been a game-changer. Our members love the convenience, 
                and we're generating significant additional revenue with zero effort."
              </p>
              <span class="quote-author">- Sarah Mitchell, Owner</span>
            </div>

            <div class="case-study card">
              <div class="case-study-header">
                <h3>Zen Wellness Spa</h3>
                <span class="facility-type">Luxury Spa • 800 monthly clients</span>
              </div>
              <div class="case-study-results">
                <div class="result">
                  <span class="result-number">$3,200</span>
                  <span class="result-label">Average Monthly Revenue</span>
                </div>
                <div class="result">
                  <span class="result-number">9 months</span>
                  <span class="result-label">Payback Period</span>
                </div>
                <div class="result">
                  <span class="result-number">42%</span>
                  <span class="result-label">Revenue Increase</span>
                </div>
              </div>
              <p class="case-study-quote">
                "Our clients appreciate being able to purchase premium wellness products 
                after their treatments. It's extended our retail offerings beautifully."
              </p>
              <span class="quote-author">- David Chen, Spa Director</span>
            </div>
          </div>
        </div>
      </section>

      <section class="competitive-advantage section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Why Kautivo vs. Traditional Vending?</h2>
          </div>
          
          <div class="comparison-table fade-in">
            <div class="comparison-header">
              <div class="feature-column">Feature</div>
              <div class="kautivo-column">Kautivo Smart Vending</div>
              <div class="traditional-column">Traditional Vending</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">Product Focus</div>
              <div class="kautivo-value">✅ Health & wellness products</div>
              <div class="traditional-value">❌ Processed snacks & sodas</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">Profit Margins</div>
              <div class="kautivo-value">✅ 70-80% margins</div>
              <div class="traditional-value">❌ 20-30% margins</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">Brand Alignment</div>
              <div class="kautivo-value">✅ Supports wellness mission</div>
              <div class="traditional-value">❌ Contradicts health goals</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">Technology</div>
              <div class="kautivo-value">✅ Smart analytics & monitoring</div>
              <div class="traditional-value">❌ Basic functionality</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">Member Experience</div>
              <div class="kautivo-value">✅ Premium, touchless interface</div>
              <div class="traditional-value">❌ Outdated, unreliable</div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Ready to Unlock These Benefits?</h2>
            <p class="text-large fade-in">
              Join hundreds of wellness facilities already maximizing their revenue potential.
            </p>
            <div class="cta-actions fade-in">
              <Button href="/contact" size="large">Schedule Free Consultation</Button>
              <Button href="/testimonials" variant="secondary" size="large">Read More Success Stories</Button>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }
        
        .benefit-category h3 {
          color: var(--color-sage);
          font-size: 1.5rem;
          margin-bottom: var(--spacing-lg);
          text-align: center;
        }
        
        .benefit-items {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        
        .benefit-item {
          padding: var(--spacing-md);
          background: var(--color-white);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-light);
        }
        
        .benefit-item h4 {
          color: var(--color-dark-gray);
          margin-bottom: var(--spacing-xs);
          font-size: 1.1rem;
        }
        
        .benefit-item p {
          color: var(--color-medium-gray);
          margin: 0;
        }
        
        .case-study {
          text-align: left;
        }
        
        .case-study-header {
          margin-bottom: var(--spacing-lg);
        }
        
        .case-study-header h3 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-xs);
        }
        
        .facility-type {
          color: var(--color-medium-gray);
          font-style: italic;
        }
        
        .case-study-results {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
          padding: var(--spacing-md);
          background: var(--color-light-gray);
          border-radius: var(--border-radius);
        }
        
        .result {
          text-align: center;
        }
        
        .result-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-sage);
        }
        
        .result-label {
          display: block;
          font-size: 0.9rem;
          color: var(--color-medium-gray);
        }
        
        .case-study-quote {
          font-style: italic;
          color: var(--color-dark-gray);
          margin-bottom: var(--spacing-sm);
        }
        
        .quote-author {
          color: var(--color-medium-gray);
          font-weight: 500;
        }
        
        .comparison-table {
          background: var(--color-white);
          border-radius: var(--border-radius-large);
          overflow: hidden;
          box-shadow: var(--shadow-light);
          margin-top: var(--spacing-xl);
        }
        
        .comparison-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          background: var(--color-dark-gray);
          color: var(--color-white);
          font-weight: 600;
        }
        
        .comparison-header > div {
          padding: var(--spacing-md);
          text-align: center;
        }
        
        .kautivo-column {
          background: var(--color-sage) !important;
        }
        
        .comparison-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          border-bottom: 1px solid #E5E7EB;
        }
        
        .comparison-row:last-child {
          border-bottom: none;
        }
        
        .feature-name {
          padding: var(--spacing-md);
          font-weight: 500;
          background: var(--color-light-gray);
        }
        
        .kautivo-value,
        .traditional-value {
          padding: var(--spacing-md);
          text-align: center;
        }
        
        .kautivo-value {
          background: rgba(135, 169, 107, 0.1);
          color: var(--color-sage);
          font-weight: 500;
        }
        
        .traditional-value {
          color: var(--color-medium-gray);
        }
        
        .cta-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
          margin-top: var(--spacing-xl);
        }
        
        @media (max-width: 768px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
          .case-study-results {
            grid-template-columns: 1fr;
          }
          
          .comparison-header,
          .comparison-row {
            grid-template-columns: 1fr;
          }
          
          .comparison-table {
            font-size: 0.9rem;
          }
          
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}