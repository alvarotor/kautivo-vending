export function About() {
  return (
    <div class="about">
      <section class="hero-section section">
        <div class="container">
          <div class="text-center">
            <h1 class="fade-in">Revolutionizing Wellness Through Smart Vending</h1>
            <p class="text-large fade-in">
              At Kautivo, we believe that wellness facilities deserve vending solutions as thoughtful 
              and premium as the services they provide.
            </p>
          </div>
        </div>
      </section>

      <section class="story-section section section-alt">
        <div class="container">
          <div class="story-content">
            <div class="story-text fade-in">
              <h2>Our Story</h2>
              <p>
                Founded in 2020 by wellness industry veterans, Kautivo emerged from a simple observation: 
                traditional vending machines were failing to serve the unique needs of health-conscious facilities and their members.
              </p>
              <p>
                We saw gym-goers settling for processed snacks when they needed clean protein. We witnessed 
                spa clients leaving empty-handed when they could have taken home premium wellness products. 
                We recognized that facility owners were missing out on significant revenue opportunities.
              </p>
              <p>
                That's when we decided to build something different – vending machines designed specifically 
                for the wellness industry, stocked with products that align with your facility's values and 
                your members' goals.
              </p>
            </div>
            <div class="story-image fade-in">
              <div class="image-placeholder">
                Kautivo Founders in Modern Office
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mission-section section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Our Mission</h2>
            <p class="text-large fade-in">
              To empower wellness facilities with intelligent vending solutions that enhance member 
              experience while driving sustainable revenue growth.
            </p>
          </div>
          
          <div class="grid grid-3 fade-in">
            <div class="value-card card">
              <h3>🎯 Purpose-Built</h3>
              <p>Every feature designed specifically for wellness environments and health-conscious consumers.</p>
            </div>
            
            <div class="value-card card">
              <h3>🤝 Partnership</h3>
              <p>We're not just vendors – we're partners invested in your facility's long-term success.</p>
            </div>
            
            <div class="value-card card">
              <h3>📈 Growth</h3>
              <p>Helping facilities unlock new revenue streams while serving their community better.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="team-section section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Leadership Team</h2>
            <p class="fade-in">Industry experts with deep wellness and technology backgrounds</p>
          </div>
          
          <div class="grid grid-3 fade-in">
            <div class="team-member card">
              <div class="member-image">
                <div class="image-placeholder">Sarah Johnson</div>
              </div>
              <h3>Sarah Johnson</h3>
              <p class="member-title">CEO & Co-Founder</p>
              <p>15+ years in fitness industry operations and franchise management</p>
            </div>
            
            <div class="team-member card">
              <div class="member-image">
                <div class="image-placeholder">Michael Chen</div>
              </div>
              <h3>Michael Chen</h3>
              <p class="member-title">CTO & Co-Founder</p>
              <p>Former tech lead at major vending technology companies</p>
            </div>
            
            <div class="team-member card">
              <div class="member-image">
                <div class="image-placeholder">Lisa Rodriguez</div>
              </div>
              <h3>Lisa Rodriguez</h3>
              <p class="member-title">VP of Customer Success</p>
              <p>Wellness industry consultant with 200+ facility partnerships</p>
            </div>
          </div>
        </div>
      </section>

      <section class="certifications-section section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Trust & Certifications</h2>
            <div class="certifications fade-in">
              <div class="cert-item">
                <h4>FDA Compliant</h4>
                <p>All food handling and storage meets FDA requirements</p>
              </div>
              <div class="cert-item">
                <h4>Energy Star Certified</h4>
                <p>Environmentally responsible and energy efficient</p>
              </div>
              <div class="cert-item">
                <h4>PCI DSS Compliant</h4>
                <p>Secure payment processing and data protection</p>
              </div>
              <div class="cert-item">
                <h4>ADA Accessible</h4>
                <p>Designed for universal accessibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .story-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xxl);
          align-items: center;
        }
        
        .story-image .image-placeholder {
          background: var(--color-blue);
          color: var(--color-white);
          padding: var(--spacing-xxl);
          border-radius: var(--border-radius-large);
          text-align: center;
          font-weight: 500;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .value-card {
          text-align: center;
        }
        
        .value-card h3 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-sm);
        }
        
        .team-member {
          text-align: center;
        }
        
        .member-image {
          margin-bottom: var(--spacing-md);
        }
        
        .member-image .image-placeholder {
          background: var(--color-sage);
          color: var(--color-white);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          font-weight: 500;
        }
        
        .member-title {
          color: var(--color-sage);
          font-weight: 600;
          margin-bottom: var(--spacing-xs);
        }
        
        .certifications {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }
        
        .cert-item {
          text-align: center;
          padding: var(--spacing-lg);
          border: 2px solid var(--color-sage);
          border-radius: var(--border-radius-large);
        }
        
        .cert-item h4 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-xs);
        }
        
        @media (max-width: 768px) {
          .story-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
          
          .certifications {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}