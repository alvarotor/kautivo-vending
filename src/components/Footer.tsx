import { useI18n } from '../utils/i18n'
import { route } from 'preact-router'

export function Footer() {
  const { t } = useI18n()

  const handleNavClick = (e: Event, path: string) => {
    e.preventDefault()
    route(path)
  }

  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Kautivo</h4>
            <p>{t('footer.tagline')}</p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Facebook">Facebook</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>{t('footer.sections.solutions')}</h4>
            <ul>
              <li><a href="/products" onClick={(e) => handleNavClick(e, '/products')}>{t('footer.links.vendingMachines')}</a></li>
              <li><a href="/benefits" onClick={(e) => handleNavClick(e, '/benefits')}>{t('footer.links.roiCalculator')}</a></li>
              <li><a href="/testimonials" onClick={(e) => handleNavClick(e, '/testimonials')}>{t('footer.links.caseStudies')}</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>{t('footer.sections.company')}</h4>
            <ul>
              <li><a href="/about" onClick={(e) => handleNavClick(e, '/about')}>{t('footer.links.aboutUs')}</a></li>
              <li><a href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>{t('footer.links.contact')}</a></li>
              <li><a href="#">{t('footer.links.privacy')}</a></li>
              <li><a href="#">{t('footer.links.terms')}</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>{t('footer.sections.contact')}</h4>
            <p>{t('footer.contactInfo.email')}</p>
            <p>{t('footer.contactInfo.phone')}</p>
            <p>{t('footer.contactInfo.hours')}</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--color-dark-gray);
          color: var(--color-white);
          padding: var(--spacing-xxl) 0 var(--spacing-lg);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }
        
        .footer-section h4 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-md);
        }
        
        .footer-section p {
          color: #BDC3C7;
          margin-bottom: var(--spacing-sm);
        }
        
        .footer-section ul {
          list-style: none;
        }
        
        .footer-section ul li {
          margin-bottom: var(--spacing-xs);
        }
        
        .footer-section a {
          color: #BDC3C7;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
          color: var(--color-sage);
        }
        
        .social-links {
          display: flex;
          gap: var(--spacing-md);
          margin-top: var(--spacing-md);
        }
        
        .footer-bottom {
          border-top: 1px solid #34495E;
          padding-top: var(--spacing-lg);
          text-align: center;
        }
        
        .footer-bottom p {
          color: #BDC3C7;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}