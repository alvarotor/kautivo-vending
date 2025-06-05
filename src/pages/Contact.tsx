import { ContactForm } from '../components/ContactForm'
import { useI18n } from '../utils/i18n'

export function Contact() {
  const { t } = useI18n()
  
  return (
    <div class="contact">
      <section class="hero-section section">
        <div class="container">
          <div class="text-center">
            <h1 class="fade-in">{t('contact.hero.title')}</h1>
            <p class="text-large fade-in">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section class="contact-section section section-alt">
        <div class="container">
          <div class="contact-content">
            <div class="contact-info fade-in">
              <h2>{t('contact.whyConsultation.title')}</h2>
              <div class="benefits-list">
                <div class="benefit-item">
                  <div class="benefit-icon">🎯</div>
                  <div class="benefit-text">
                    <h4>{t('contact.whyConsultation.assessment.title')}</h4>
                    <p>{t('contact.whyConsultation.assessment.description')}</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">💰</div>
                  <div class="benefit-text">
                    <h4>{t('contact.whyConsultation.roi.title')}</h4>
                    <p>{t('contact.whyConsultation.roi.description')}</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">🔧</div>
                  <div class="benefit-text">
                    <h4>{t('contact.whyConsultation.planning.title')}</h4>
                    <p>{t('contact.whyConsultation.planning.description')}</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">📊</div>
                  <div class="benefit-text">
                    <h4>{t('contact.whyConsultation.noObligation.title')}</h4>
                    <p>{t('contact.whyConsultation.noObligation.description')}</p>
                  </div>
                </div>
              </div>

              <div class="contact-details">
                <h3>{t('contact.contactMethods.title')}</h3>
                <div class="contact-methods">
                  <div class="contact-method">
                    <strong>{t('contact.contactMethods.email')}</strong>
                    <a href="mailto:info@kautivo.com">info@kautivo.com</a>
                  </div>
                  <div class="contact-method">
                    <strong>{t('contact.contactMethods.phone')}</strong>
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </div>
                  <div class="contact-method">
                    <strong>{t('contact.contactMethods.hours')}</strong>
                    <span>{t('contact.contactMethods.hoursValue')}</span>
                  </div>
                  <div class="contact-method">
                    <strong>{t('contact.contactMethods.responseTime')}</strong>
                    <span>{t('contact.contactMethods.responseValue')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-form-container fade-in">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section class="process-section section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('contact.process.title')}</h2>
            <p class="fade-in">{t('contact.process.subtitle')}</p>
          </div>
          
          <div class="process-steps fade-in">
            <div class="process-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>{t('contact.process.step1.title')}</h3>
                <p>{t('contact.process.step1.description')}</p>
                <span class="step-duration">{t('contact.process.step1.duration')}</span>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>{t('contact.process.step2.title')}</h3>
                <p>{t('contact.process.step2.description')}</p>
                <span class="step-duration">{t('contact.process.step2.duration')}</span>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>{t('contact.process.step3.title')}</h3>
                <p>{t('contact.process.step3.description')}</p>
                <span class="step-duration">{t('contact.process.step3.duration')}</span>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>{t('contact.process.step4.title')}</h3>
                <p>{t('contact.process.step4.description')}</p>
                <span class="step-duration">{t('contact.process.step4.duration')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-section section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('contact.faq.title')}</h2>
          </div>
          
          <div class="faq-grid fade-in">
            <div class="faq-item">
              <h4>{t('contact.faq.q1.question')}</h4>
              <p>{t('contact.faq.q1.answer')}</p>
            </div>
            
            <div class="faq-item">
              <h4>{t('contact.faq.q2.question')}</h4>
              <p>{t('contact.faq.q2.answer')}</p>
            </div>
            
            <div class="faq-item">
              <h4>{t('contact.faq.q3.question')}</h4>
              <p>{t('contact.faq.q3.answer')}</p>
            </div>
            
            <div class="faq-item">
              <h4>{t('contact.faq.q4.question')}</h4>
              <p>{t('contact.faq.q4.answer')}</p>
            </div>
            
            <div class="faq-item">
              <h4>{t('contact.faq.q5.question')}</h4>
              <p>{t('contact.faq.q5.answer')}</p>
            </div>
            
            <div class="faq-item">
              <h4>{t('contact.faq.q6.question')}</h4>
              <p>{t('contact.faq.q6.answer')}</p>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xxl);
          align-items: flex-start;
        }
        
        .contact-info h2 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-lg);
        }
        
        .benefits-list {
          margin-bottom: var(--spacing-xl);
        }
        
        .benefit-item {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }
        
        .benefit-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        
        .benefit-text h4 {
          color: var(--color-dark-gray);
          margin-bottom: var(--spacing-xs);
        }
        
        .benefit-text p {
          color: var(--color-medium-gray);
          margin: 0;
        }
        
        .contact-details {
          background: var(--color-white);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-large);
          box-shadow: var(--shadow-light);
        }
        
        .contact-details h3 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-md);
        }
        
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        
        .contact-method {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }
        
        .contact-method a {
          color: var(--color-sage);
          text-decoration: none;
        }
        
        .contact-method a:hover {
          text-decoration: underline;
        }
        
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }
        
        .process-step {
          text-align: center;
          padding: var(--spacing-lg);
          background: var(--color-white);
          border-radius: var(--border-radius-large);
          box-shadow: var(--shadow-light);
          position: relative;
        }
        
        .step-number {
          width: 60px;
          height: 60px;
          background: var(--color-sage);
          color: var(--color-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto var(--spacing-md);
        }
        
        .step-content h3 {
          color: var(--color-dark-gray);
          margin-bottom: var(--spacing-sm);
        }
        
        .step-content p {
          color: var(--color-medium-gray);
          margin-bottom: var(--spacing-sm);
        }
        
        .step-duration {
          color: var(--color-sage);
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }
        
        .faq-item {
          background: var(--color-white);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-large);
          box-shadow: var(--shadow-light);
        }
        
        .faq-item h4 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-sm);
        }
        
        .faq-item p {
          color: var(--color-medium-gray);
          margin: 0;
        }
        
        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
          
          .process-steps {
            grid-template-columns: 1fr;
          }
          
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .benefit-item {
            flex-direction: column;
            text-align: center;
          }
          
          .contact-method {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  )
}