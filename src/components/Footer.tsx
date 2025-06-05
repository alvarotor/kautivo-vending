export function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Kautivo</h4>
            <p>Smart vending solutions for wellness facilities worldwide.</p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Facebook">Facebook</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/products">Smart Vending Machines</a></li>
              <li><a href="/benefits">ROI Calculator</a></li>
              <li><a href="/testimonials">Case Studies</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact</h4>
            <p>Email: info@kautivo.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Hours: Mon-Fri 9AM-6PM EST</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Kautivo. All rights reserved.</p>
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