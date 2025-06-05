import { ContactForm } from '../components/ContactForm'

export function Contact() {
  return (
    <div class="contact">
      <section class="hero-section section">
        <div class="container">
          <div class="text-center">
            <h1 class="fade-in">Get Your Free Consultation</h1>
            <p class="text-large fade-in">
              Ready to transform your wellness facility with smart vending solutions? 
              Let's discuss your specific needs and create a customized plan.
            </p>
          </div>
        </div>
      </section>

      <section class="contact-section section section-alt">
        <div class="container">
          <div class="contact-content">
            <div class="contact-info fade-in">
              <h2>Why Choose a Free Consultation?</h2>
              <div class="benefits-list">
                <div class="benefit-item">
                  <div class="benefit-icon">🎯</div>
                  <div class="benefit-text">
                    <h4>Customized Assessment</h4>
                    <p>We analyze your facility's unique layout, traffic patterns, and member demographics</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">💰</div>
                  <div class="benefit-text">
                    <h4>ROI Projections</h4>
                    <p>Get detailed revenue projections based on your specific facility metrics</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">🔧</div>
                  <div class="benefit-text">
                    <h4>Implementation Planning</h4>
                    <p>Receive a complete roadmap for installation and product curation</p>
                  </div>
                </div>
                
                <div class="benefit-item">
                  <div class="benefit-icon">📊</div>
                  <div class="benefit-text">
                    <h4>No Obligation</h4>
                    <p>Get expert insights and recommendations with no pressure to commit</p>
                  </div>
                </div>
              </div>

              <div class="contact-details">
                <h3>Get in Touch Directly</h3>
                <div class="contact-methods">
                  <div class="contact-method">
                    <strong>📧 Email:</strong>
                    <a href="mailto:info@kautivo.com">info@kautivo.com</a>
                  </div>
                  <div class="contact-method">
                    <strong>📞 Phone:</strong>
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </div>
                  <div class="contact-method">
                    <strong>🕒 Hours:</strong>
                    <span>Monday-Friday 9AM-6PM EST</span>
                  </div>
                  <div class="contact-method">
                    <strong>⚡ Response Time:</strong>
                    <span>Within 24 hours</span>
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
            <h2 class="fade-in">Our Consultation Process</h2>
            <p class="fade-in">A simple, transparent process designed around your schedule</p>
          </div>
          
          <div class="process-steps fade-in">
            <div class="process-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Initial Contact</h3>
                <p>Submit your information and we'll reach out within 24 hours to schedule your consultation</p>
                <span class="step-duration">Same day response</span>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Facility Assessment</h3>
                <p>30-minute video call or in-person visit to understand your space, members, and goals</p>
                <span class="step-duration">30-45 minutes</span>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Custom Proposal</h3>
                <p>Detailed recommendation with ROI projections, product selection, and implementation timeline</p>
                <span class="step-duration">3-5 business days</span>
              </div>
            </div>
            
            <div class="process-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>Decision & Setup</h3>
                <p>If you choose to proceed, we handle everything from installation to initial stocking</p>
                <span class="step-duration">2-3 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-section section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Frequently Asked Questions</h2>
          </div>
          
          <div class="faq-grid fade-in">
            <div class="faq-item">
              <h4>What does the consultation include?</h4>
              <p>A comprehensive facility assessment, member demographic analysis, ROI projections, product recommendations, and a detailed implementation plan.</p>
            </div>
            
            <div class="faq-item">
              <h4>Is there really no cost or obligation?</h4>
              <p>Absolutely none. We believe in demonstrating value first. You'll receive actionable insights regardless of whether you choose to work with us.</p>
            </div>
            
            <div class="faq-item">
              <h4>How long before I see ROI?</h4>
              <p>Most facilities see positive cash flow within 2-3 months and full ROI within 8-14 months, depending on size and traffic.</p>
            </div>
            
            <div class="faq-item">
              <h4>What ongoing support do you provide?</h4>
              <p>Complete ongoing support including restocking, maintenance, analytics reporting, and 24/7 technical support.</p>
            </div>
            
            <div class="faq-item">
              <h4>Can you work with existing contracts?</h4>
              <p>Yes, we can often work around existing vending contracts or help you transition when contracts expire.</p>
            </div>
            
            <div class="faq-item">
              <h4>What if my facility is too small?</h4>
              <p>We work with facilities of all sizes. Even smaller studios can benefit from our compact models and flexible arrangements.</p>
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