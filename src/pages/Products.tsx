import { useState } from 'preact/hooks'
import { Button } from '../components/Button'
import productsData from '../data/products.json'

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0])

  return (
    <div class="products">
      <section class="hero-section section">
        <div class="container">
          <div class="text-center">
            <h1 class="fade-in">Smart Vending Machines Built for Wellness</h1>
            <p class="text-large fade-in">
              Choose from our range of premium vending solutions designed specifically 
              for fitness centers, spas, and wellness facilities.
            </p>
          </div>
        </div>
      </section>

      <section class="products-showcase section section-alt">
        <div class="container">
          <div class="product-selector fade-in">
            {productsData.map((product) => (
              <button
                key={product.id}
                class={`product-tab ${selectedProduct.id === product.id ? 'active' : ''}`}
                onClick={() => setSelectedProduct(product)}
              >
                {product.name}
              </button>
            ))}
          </div>

          <div class="product-detail fade-in">
            <div class="product-overview">
              <div class="product-image">
                <div class="image-placeholder">
                  {selectedProduct.name} Vending Machine
                </div>
              </div>
              <div class="product-info">
                <h2>{selectedProduct.name}</h2>
                <p class="product-description">{selectedProduct.description}</p>
                <p class="product-price">{selectedProduct.price}</p>
                
                <div class="ideal-for">
                  <h4>Ideal for:</h4>
                  <ul>
                    {selectedProduct.ideal_for.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
                
                <div class="product-actions">
                  <Button href="/contact" size="large">Request Quote</Button>
                  <Button variant="secondary" href="/benefits">Calculate ROI</Button>
                </div>
              </div>
            </div>

            <div class="product-details-grid">
              <div class="features-section">
                <h3>Key Features</h3>
                <ul class="features-list">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div class="specifications-section">
                <h3>Technical Specifications</h3>
                <div class="specs-grid">
                  <div class="spec-item">
                    <span class="spec-label">Dimensions:</span>
                    <span class="spec-value">{selectedProduct.specifications.dimensions}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Weight:</span>
                    <span class="spec-value">{selectedProduct.specifications.weight}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Power:</span>
                    <span class="spec-value">{selectedProduct.specifications.power}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Capacity:</span>
                    <span class="spec-value">{selectedProduct.specifications.capacity}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Temperature:</span>
                    <span class="spec-value">{selectedProduct.specifications.temperature}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="customization-section section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Customization Options</h2>
            <p class="fade-in">Make your vending machine match your facility's brand and aesthetic</p>
          </div>
          
          <div class="grid grid-3 fade-in">
            <div class="customization-card card">
              <h3>🎨 Branding & Graphics</h3>
              <p>Custom wraps, logos, colors, and promotional displays to match your brand identity.</p>
            </div>
            
            <div class="customization-card card">
              <h3>📱 Software Integration</h3>
              <p>Connect with your existing member management system, loyalty programs, and apps.</p>
            </div>
            
            <div class="customization-card card">
              <h3>🥗 Product Curation</h3>
              <p>We help select the perfect product mix based on your facility type and member preferences.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="comparison-section section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">Compare Our Models</h2>
          </div>
          
          <div class="comparison-table fade-in">
            <div class="comparison-header">
              <div class="feature-column">Features</div>
              {productsData.map(product => (
                <div key={product.id} class="product-column">{product.name}</div>
              ))}
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">Screen Size</div>
              <div class="feature-value">55" 4K</div>
              <div class="feature-value">32" HD</div>
              <div class="feature-value">36" Premium</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">Capacity</div>
              <div class="feature-value">120 products</div>
              <div class="feature-value">60 products</div>
              <div class="feature-value">80 products</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">Temperature Zones</div>
              <div class="feature-value">Dual</div>
              <div class="feature-value">Single</div>
              <div class="feature-value">Ambient</div>
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">Starting Price</div>
              <div class="feature-value">$8,500</div>
              <div class="feature-value">$5,500</div>
              <div class="feature-value">$12,000</div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .product-selector {
          display: flex;
          justify-content: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xxl);
          flex-wrap: wrap;
        }
        
        .product-tab {
          padding: var(--spacing-sm) var(--spacing-lg);
          border: 2px solid var(--color-sage);
          background: transparent;
          color: var(--color-sage);
          border-radius: var(--border-radius);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .product-tab:hover,
        .product-tab.active {
          background: var(--color-sage);
          color: var(--color-white);
        }
        
        .product-overview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xxl);
          margin-bottom: var(--spacing-xxl);
        }
        
        .product-image .image-placeholder {
          background: var(--color-sage);
          color: var(--color-white);
          padding: var(--spacing-xxl);
          border-radius: var(--border-radius-large);
          text-align: center;
          font-weight: 500;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .product-description {
          font-size: 1.1rem;
          margin-bottom: var(--spacing-md);
        }
        
        .product-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-sage);
          margin-bottom: var(--spacing-md);
        }
        
        .ideal-for {
          margin-bottom: var(--spacing-lg);
        }
        
        .ideal-for h4 {
          margin-bottom: var(--spacing-xs);
          color: var(--color-dark-gray);
        }
        
        .ideal-for ul {
          list-style: none;
          padding: 0;
        }
        
        .ideal-for li {
          padding: var(--spacing-xs) 0;
          color: var(--color-medium-gray);
        }
        
        .ideal-for li:before {
          content: "✓ ";
          color: var(--color-sage);
          font-weight: bold;
        }
        
        .product-actions {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }
        
        .product-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xxl);
        }
        
        .features-list {
          list-style: none;
          padding: 0;
        }
        
        .features-list li {
          padding: var(--spacing-xs) 0;
          color: var(--color-medium-gray);
        }
        
        .features-list li:before {
          content: "• ";
          color: var(--color-sage);
          font-weight: bold;
        }
        
        .specs-grid {
          display: grid;
          gap: var(--spacing-sm);
        }
        
        .spec-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: var(--spacing-xs) 0;
          border-bottom: 1px solid #E5E7EB;
        }
        
        .spec-label {
          font-weight: 500;
          color: var(--color-dark-gray);
        }
        
        .spec-value {
          color: var(--color-medium-gray);
        }
        
        .customization-card {
          text-align: center;
        }
        
        .customization-card h3 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-sm);
        }
        
        .comparison-table {
          background: var(--color-white);
          border-radius: var(--border-radius-large);
          overflow: hidden;
          box-shadow: var(--shadow-light);
        }
        
        .comparison-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          background: var(--color-sage);
          color: var(--color-white);
          font-weight: 600;
        }
        
        .comparison-header > div {
          padding: var(--spacing-md);
          text-align: center;
        }
        
        .comparison-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
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
        
        .feature-value {
          padding: var(--spacing-md);
          text-align: center;
          color: var(--color-medium-gray);
        }
        
        @media (max-width: 768px) {
          .product-overview,
          .product-details-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
          
          .product-actions {
            flex-direction: column;
          }
          
          .comparison-header,
          .comparison-row {
            grid-template-columns: 1fr;
          }
          
          .comparison-table {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}