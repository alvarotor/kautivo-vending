import { useState } from 'preact/hooks'
import { Button } from '../components/Button'
import { useI18n } from '../utils/i18n'
import testimonialsData from '../data/testimonials.json'
import translations from '../data/translations.json'

export function Testimonials() {
  const [selectedTestimonialId, setSelectedTestimonialId] = useState(testimonialsData[0].id)
  const [filter, setFilter] = useState('all')
  const { t, language } = useI18n()

  const getTranslatedTestimonial = (testimonialId: string) => {
    const originalTestimonial = testimonialsData.find(t => t.id === testimonialId)!
    
    // Convert kebab-case to camelCase: "elite-fitness" to "eliteFitness"
    const testimonialKey = testimonialId.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
    
    try {
      const testimonialTranslations = translations[language]?.testimonials?.testimonialData?.[testimonialKey]
      
      if (testimonialTranslations && typeof testimonialTranslations === 'object') {
        return {
          ...originalTestimonial,
          facilityType: testimonialTranslations.facilityType || originalTestimonial.facilityType,
          memberCount: testimonialTranslations.memberCount || originalTestimonial.memberCount,
          quote: testimonialTranslations.quote || originalTestimonial.quote,
          highlights: Array.isArray(testimonialTranslations.highlights) ? testimonialTranslations.highlights : originalTestimonial.highlights,
          beforeAfter: testimonialTranslations.beforeAfter || originalTestimonial.beforeAfter
        }
      }
    } catch (error) {
      console.log(`Translation not found for testimonials.testimonialData.${testimonialKey}`)
    }
    
    // Fallback to original if translation not found
    return originalTestimonial
  }

  const selectedTestimonial = getTranslatedTestimonial(selectedTestimonialId)

  const filteredTestimonials = filter === 'all' 
    ? testimonialsData 
    : testimonialsData.filter(t => {
        // Check both original and translated facility types for filtering
        const originalType = t.facilityType.toLowerCase()
        const translatedTestimonial = getTranslatedTestimonial(t.id)
        const translatedType = translatedTestimonial.facilityType.toLowerCase()
        
        return originalType.includes(filter) || translatedType.includes(filter)
      })

  const facilityTypes = [
    { value: 'all', label: t('testimonials.filters.all') },
    { value: 'gym', label: t('testimonials.filters.gym') },
    { value: 'spa', label: t('testimonials.filters.spa') },
    { value: 'yoga', label: t('testimonials.filters.yoga') },
    { value: 'corporate', label: t('testimonials.filters.corporate') },
    { value: 'pool', label: t('testimonials.filters.pool') }
  ]

  return (
    <div class="testimonials">
      <section class="hero-section section">
        <div class="container">
          <div class="text-center">
            <h1 class="fade-in">{t('testimonials.hero.title')}</h1>
            <p class="text-large fade-in">
              {t('testimonials.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section class="stats-overview section section-alt">
        <div class="container">
          <div class="stats-grid fade-in">
            <div class="stat-card">
              <div class="stat-number">500+</div>
              <div class="stat-label">{t('testimonials.stats.facilitiesServed')}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">98%</div>
              <div class="stat-label">{t('testimonials.stats.customerSatisfaction')}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">$4.2M+</div>
              <div class="stat-label">{t('testimonials.stats.revenueGenerated')}</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">35%</div>
              <div class="stat-label">{t('testimonials.stats.averageIncrease')}</div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials-section section">
        <div class="container">
          <div class="testimonial-filters fade-in">
            <h3>{t('testimonials.filters.title')}</h3>
            <div class="filter-buttons">
              {facilityTypes.map(type => (
                <button
                  key={type.value}
                  class={`filter-btn ${filter === type.value ? 'active' : ''}`}
                  onClick={() => setFilter(type.value)}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div class="testimonials-grid fade-in">
            {filteredTestimonials.map((testimonial) => {
              const translatedTestimonial = getTranslatedTestimonial(testimonial.id)
              return (
                <div 
                  key={testimonial.id} 
                  class={`testimonial-card card ${selectedTestimonialId === testimonial.id ? 'featured' : ''}`}
                  onClick={() => setSelectedTestimonialId(testimonial.id)}
                >
                  <div class="testimonial-header">
                    <div class="customer-info">
                      <h4>{testimonial.name}</h4>
                      <p class="customer-title">{testimonial.title}</p>
                      <p class="company-name">{testimonial.company}</p>
                      <p class="location">{testimonial.location}</p>
                    </div>
                    <div class="facility-info">
                      <span class="facility-type">{translatedTestimonial.facilityType}</span>
                      <span class="member-count">{translatedTestimonial.memberCount}</span>
                    </div>
                  </div>
                  
                  <div class="revenue-highlight">
                    <span class="revenue-amount">{testimonial.monthlyRevenue}</span>
                    <span class="revenue-label">{t('testimonials.labels.monthlyRevenue')}</span>
                  </div>
                  
                  <p class="testimonial-preview">
                    {translatedTestimonial.quote.substring(0, 150)}...
                  </p>
                  
                  <div class="read-more">
                    {selectedTestimonialId === testimonial.id ? t('testimonials.labels.featured') : t('testimonials.labels.readMore')}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section class="featured-testimonial section section-alt">
        <div class="container">
          <div class="featured-content fade-in">
            <div class="featured-header">
              <h2>{t('testimonials.featuredStory.title')}</h2>
              <div class="featured-customer">
                <h3>{selectedTestimonial.company}</h3>
                <p class="customer-details">
                  {selectedTestimonial.name}, {selectedTestimonial.title} • {selectedTestimonial.location}
                </p>
                <div class="facility-tags">
                  <span class="facility-tag">{selectedTestimonial.facilityType}</span>
                  <span class="facility-tag">{selectedTestimonial.memberCount}</span>
                </div>
              </div>
            </div>

            <div class="featured-metrics">
              <div class="metric">
                <span class="metric-value">{selectedTestimonial.monthlyRevenue}</span>
                <span class="metric-label">{t('testimonials.labels.monthlyRevenue')}</span>
              </div>
              <div class="metric">
                <span class="metric-value">{selectedTestimonial.paybackPeriod}</span>
                <span class="metric-label">{t('testimonials.labels.paybackPeriod')}</span>
              </div>
            </div>

            <blockquote class="featured-quote">
              "{selectedTestimonial.quote}"
            </blockquote>

            <div class="success-highlights">
              <h4>{t('testimonials.featuredStory.keyFactors')}</h4>
              <ul>
                {selectedTestimonial.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div class="before-after">
              <div class="before-after-item">
                <h5>{t('testimonials.featuredStory.beforeKautivo')}</h5>
                <p>{selectedTestimonial.beforeAfter.before}</p>
              </div>
              <div class="before-after-item">
                <h5>{t('testimonials.featuredStory.afterKautivo')}</h5>
                <p>{selectedTestimonial.beforeAfter.after}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="video-testimonials section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('testimonials.videoSection.title')}</h2>
            <p class="fade-in">{t('testimonials.videoSection.subtitle')}</p>
          </div>
          
          <div class="grid grid-2 fade-in">
            <div class="video-card card">
              <div class="video-placeholder">
                <div class="play-button">▶</div>
                <div class="video-info">
                  <h4>{t('testimonials.videoSection.video1.title')}</h4>
                  <p>{t('testimonials.videoSection.video1.description')}</p>
                </div>
              </div>
            </div>
            
            <div class="video-card card">
              <div class="video-placeholder">
                <div class="play-button">▶</div>
                <div class="video-info">
                  <h4>{t('testimonials.videoSection.video2.title')}</h4>
                  <p>{t('testimonials.videoSection.video2.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('testimonials.cta.title')}</h2>
            <p class="text-large fade-in">
              {t('testimonials.cta.subtitle')}
            </p>
            <div class="cta-actions fade-in">
              <Button href="/contact" size="large">{t('testimonials.cta.primaryBtn')}</Button>
              <Button href="/benefits" variant="secondary" size="large">{t('testimonials.cta.secondaryBtn')}</Button>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
        }
        
        .stat-card {
          text-align: center;
          padding: var(--spacing-lg);
          background: var(--color-white);
          border-radius: var(--border-radius-large);
          box-shadow: var(--shadow-light);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-sage);
          display: block;
          line-height: 1;
        }
        
        .stat-label {
          color: var(--color-medium-gray);
          font-weight: 500;
          margin-top: var(--spacing-xs);
        }
        
        .testimonial-filters {
          text-align: center;
          margin-bottom: var(--spacing-xxl);
        }
        
        .testimonial-filters h3 {
          margin-bottom: var(--spacing-md);
          color: var(--color-dark-gray);
        }
        
        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: var(--spacing-xs) var(--spacing-md);
          border: 2px solid var(--color-sage);
          background: transparent;
          color: var(--color-sage);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }
        
        .filter-btn:hover,
        .filter-btn.active {
          background: var(--color-sage);
          color: var(--color-white);
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xxl);
        }
        
        .testimonial-card {
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
        }
        
        .testimonial-card.featured {
          border: 3px solid var(--color-sage);
        }
        
        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-md);
        }
        
        .customer-info h4 {
          color: var(--color-dark-gray);
          margin-bottom: var(--spacing-xs);
        }
        
        .customer-title {
          color: var(--color-sage);
          font-weight: 500;
          margin-bottom: var(--spacing-xs);
        }
        
        .company-name {
          font-weight: 600;
          color: var(--color-dark-gray);
          margin-bottom: var(--spacing-xs);
        }
        
        .location {
          color: var(--color-medium-gray);
          font-size: 0.9rem;
        }
        
        .facility-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: var(--spacing-xs);
        }
        
        .facility-type,
        .member-count {
          background: var(--color-light-gray);
          padding: var(--spacing-xs);
          border-radius: var(--border-radius);
          font-size: 0.8rem;
          color: var(--color-medium-gray);
        }
        
        .revenue-highlight {
          text-align: center;
          padding: var(--spacing-md);
          background: rgba(135, 169, 107, 0.1);
          border-radius: var(--border-radius);
          margin-bottom: var(--spacing-md);
        }
        
        .revenue-amount {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-sage);
        }
        
        .revenue-label {
          color: var(--color-medium-gray);
          font-size: 0.9rem;
        }
        
        .testimonial-preview {
          color: var(--color-medium-gray);
          line-height: 1.5;
          margin-bottom: var(--spacing-md);
        }
        
        .read-more {
          color: var(--color-sage);
          font-weight: 500;
          text-align: center;
        }
        
        .featured-content {
          background: var(--color-white);
          padding: var(--spacing-xxl);
          border-radius: var(--border-radius-large);
          box-shadow: var(--shadow-medium);
        }
        
        .featured-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }
        
        .featured-customer h3 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-xs);
        }
        
        .customer-details {
          color: var(--color-medium-gray);
          margin-bottom: var(--spacing-sm);
        }
        
        .facility-tags {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
        }
        
        .facility-tag {
          background: var(--color-light-gray);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--border-radius);
          font-size: 0.9rem;
          color: var(--color-medium-gray);
        }
        
        .featured-metrics {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xxl);
          margin-bottom: var(--spacing-xl);
        }
        
        .metric {
          text-align: center;
        }
        
        .metric-value {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-sage);
        }
        
        .metric-label {
          color: var(--color-medium-gray);
        }
        
        .featured-quote {
          font-size: 1.25rem;
          font-style: italic;
          color: var(--color-dark-gray);
          text-align: center;
          margin: var(--spacing-xl) 0;
          padding: var(--spacing-lg);
          background: var(--color-light-gray);
          border-radius: var(--border-radius);
          border-left: 4px solid var(--color-sage);
        }
        
        .success-highlights {
          margin-bottom: var(--spacing-xl);
        }
        
        .success-highlights h4 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-md);
        }
        
        .success-highlights ul {
          list-style: none;
          padding: 0;
        }
        
        .success-highlights li {
          padding: var(--spacing-xs) 0;
          color: var(--color-medium-gray);
        }
        
        .success-highlights li:before {
          content: "✓ ";
          color: var(--color-sage);
          font-weight: bold;
        }
        
        .before-after {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
        }
        
        .before-after-item {
          padding: var(--spacing-md);
          border-radius: var(--border-radius);
        }
        
        .before-after-item:first-child {
          background: #FFF5F5;
          border-left: 4px solid #E74C3C;
        }
        
        .before-after-item:last-child {
          background: #F0FFF4;
          border-left: 4px solid var(--color-sage);
        }
        
        .before-after-item h5 {
          margin-bottom: var(--spacing-xs);
        }
        
        .video-card {
          text-align: center;
        }
        
        .video-placeholder {
          background: var(--color-dark-gray);
          color: var(--color-white);
          padding: var(--spacing-xxl);
          border-radius: var(--border-radius);
          position: relative;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .video-placeholder:hover {
          background: #34495E;
        }
        
        .play-button {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
        }
        
        .video-info h4 {
          color: var(--color-white);
          margin-bottom: var(--spacing-sm);
        }
        
        .video-info p {
          color: #BDC3C7;
        }
        
        .cta-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
          margin-top: var(--spacing-xl);
        }
        
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .featured-metrics {
            flex-direction: column;
            gap: var(--spacing-lg);
          }
          
          .before-after {
            grid-template-columns: 1fr;
          }
          
          .filter-buttons {
            flex-direction: column;
            align-items: center;
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