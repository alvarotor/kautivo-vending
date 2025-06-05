import { ROICalculator } from '../components/ROICalculator'
import { Button } from '../components/Button'
import { useI18n } from '../utils/i18n'

export function Benefits() {
  const { t } = useI18n()
  
  return (
    <div class="benefits">
      <section class="hero-section section">
        <div class="container">
          <div class="text-center">
            <h1 class="fade-in">{t('benefits.hero.title')}</h1>
            <p class="text-large fade-in">
              {t('benefits.hero.subtitle')}
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
            <h2 class="fade-in">{t('benefits.overview.title')}</h2>
          </div>
          
          <div class="benefits-grid fade-in">
            <div class="benefit-category">
              <h3>{t('benefits.financial.title')}</h3>
              <div class="benefit-items">
                <div class="benefit-item">
                  <h4>{t('benefits.financial.additionalRevenue.title')}</h4>
                  <p>{t('benefits.financial.additionalRevenue.description')}</p>
                </div>
                <div class="benefit-item">
                  <h4>{t('benefits.financial.profitMargins.title')}</h4>
                  <p>{t('benefits.financial.profitMargins.description')}</p>
                </div>
                <div class="benefit-item">
                  <h4>{t('benefits.financial.quickROI.title')}</h4>
                  <p>{t('benefits.financial.quickROI.description')}</p>
                </div>
                <div class="benefit-item">
                  <h4>{t('benefits.financial.revenueSharing.title')}</h4>
                  <p>{t('benefits.financial.revenueSharing.description')}</p>
                </div>
              </div>
            </div>

            <div class="benefit-category">
              <h3>{t('benefits.memberExperience.title')}</h3>
              <div class="benefit-items">
                <div class="benefit-item">
                  <h4>{t('benefits.memberExperience.convenience.title')}</h4>
                  <p>{t('benefits.memberExperience.convenience.description')}</p>
                </div>
                <div class="benefit-item">
                  <h4>{t('benefits.memberExperience.nutrition.title')}</h4>
                  <p>{t('benefits.memberExperience.nutrition.description')}</p>
                </div>
                <div class="benefit-item">
                  <h4>{t('benefits.memberExperience.products.title')}</h4>
                  <p>{t('benefits.memberExperience.products.description')}</p>
                </div>
                <div class="benefit-item">
                  <h4>{t('benefits.memberExperience.contactless.title')}</h4>
                  <p>{t('benefits.memberExperience.contactless.description')}</p>
                </div>
              </div>
            </div>

            <div class="benefit-category">
              <h3>{t('benefits.operational.title')}</h3>
              <div class="benefit-items">
                <div class="benefit-item">
                  <h4>{t('benefits.operational.zeroStaff.title')}</h4>
                  <p>{t('benefits.operational.zeroStaff.description')}</p>
                </div>
                <div class="benefit-item">
                  <h4>{t('benefits.operational.analytics.title')}</h4>
                  <p>{t('benefits.operational.analytics.description')}</p>
                </div>
                <div class="benefit-item">
                  <h4>{t('benefits.operational.inventory.title')}</h4>
                  <p>{t('benefits.operational.inventory.description')}</p>
                </div>
                <div class="benefit-item">
                  <h4>{t('benefits.operational.branding.title')}</h4>
                  <p>{t('benefits.operational.branding.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="case-studies section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('benefits.caseStudies.title')}</h2>
          </div>
          
          <div class="grid grid-2 fade-in">
            <div class="case-study card">
              <div class="case-study-header">
                <h3>{t('benefits.caseStudies.eliteFitness.name')}</h3>
                <span class="facility-type">{t('benefits.caseStudies.eliteFitness.type')}</span>
              </div>
              <div class="case-study-results">
                <div class="result">
                  <span class="result-number">{t('benefits.caseStudies.eliteFitness.revenue')}</span>
                  <span class="result-label">{t('benefits.caseStudies.eliteFitness.labels.monthlyRevenue')}</span>
                </div>
                <div class="result">
                  <span class="result-number">{t('benefits.caseStudies.eliteFitness.payback')}</span>
                  <span class="result-label">{t('benefits.caseStudies.eliteFitness.labels.paybackPeriod')}</span>
                </div>
                <div class="result">
                  <span class="result-number">{t('benefits.caseStudies.eliteFitness.satisfaction')}</span>
                  <span class="result-label">{t('benefits.caseStudies.eliteFitness.labels.satisfaction')}</span>
                </div>
              </div>
              <p class="case-study-quote">
                "{t('benefits.caseStudies.eliteFitness.quote')}"
              </p>
              <span class="quote-author">{t('benefits.caseStudies.eliteFitness.author')}</span>
            </div>

            <div class="case-study card">
              <div class="case-study-header">
                <h3>{t('benefits.caseStudies.zenWellness.name')}</h3>
                <span class="facility-type">{t('benefits.caseStudies.zenWellness.type')}</span>
              </div>
              <div class="case-study-results">
                <div class="result">
                  <span class="result-number">{t('benefits.caseStudies.zenWellness.revenue')}</span>
                  <span class="result-label">{t('benefits.caseStudies.zenWellness.labels.monthlyRevenue')}</span>
                </div>
                <div class="result">
                  <span class="result-number">{t('benefits.caseStudies.zenWellness.payback')}</span>
                  <span class="result-label">{t('benefits.caseStudies.zenWellness.labels.paybackPeriod')}</span>
                </div>
                <div class="result">
                  <span class="result-number">{t('benefits.caseStudies.zenWellness.increase')}</span>
                  <span class="result-label">{t('benefits.caseStudies.zenWellness.labels.revenueIncrease')}</span>
                </div>
              </div>
              <p class="case-study-quote">
                "{t('benefits.caseStudies.zenWellness.quote')}"
              </p>
              <span class="quote-author">{t('benefits.caseStudies.zenWellness.author')}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="competitive-advantage section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('benefits.competitive.title')}</h2>
          </div>
          
          <div class="comparison-table fade-in">
            <div class="comparison-header">
              <div class="feature-column">{t('benefits.competitive.features.feature')}</div>
              <div class="kautivo-column">{t('benefits.competitive.features.kautivo')}</div>
              <div class="traditional-column">{t('benefits.competitive.features.traditional')}</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">{t('benefits.competitive.comparison.productFocus.name')}</div>
              <div class="kautivo-value">{t('benefits.competitive.comparison.productFocus.kautivo')}</div>
              <div class="traditional-value">{t('benefits.competitive.comparison.productFocus.traditional')}</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">{t('benefits.competitive.comparison.profitMargins.name')}</div>
              <div class="kautivo-value">{t('benefits.competitive.comparison.profitMargins.kautivo')}</div>
              <div class="traditional-value">{t('benefits.competitive.comparison.profitMargins.traditional')}</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">{t('benefits.competitive.comparison.brandAlignment.name')}</div>
              <div class="kautivo-value">{t('benefits.competitive.comparison.brandAlignment.kautivo')}</div>
              <div class="traditional-value">{t('benefits.competitive.comparison.brandAlignment.traditional')}</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">{t('benefits.competitive.comparison.technology.name')}</div>
              <div class="kautivo-value">{t('benefits.competitive.comparison.technology.kautivo')}</div>
              <div class="traditional-value">{t('benefits.competitive.comparison.technology.traditional')}</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">{t('benefits.competitive.comparison.memberExperience.name')}</div>
              <div class="kautivo-value">{t('benefits.competitive.comparison.memberExperience.kautivo')}</div>
              <div class="traditional-value">{t('benefits.competitive.comparison.memberExperience.traditional')}</div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('benefits.cta.title')}</h2>
            <p class="text-large fade-in">
              {t('benefits.cta.subtitle')}
            </p>
            <div class="cta-actions fade-in">
              <Button href="/contact" size="large">{t('benefits.cta.primaryBtn')}</Button>
              <Button href="/testimonials" variant="secondary" size="large">{t('benefits.cta.secondaryBtn')}</Button>
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