import { useState } from 'preact/hooks'
import { Button } from '../components/Button'
import { useI18n } from '../utils/i18n'
import productsData from '../data/products.json'
import translations from '../data/translations.json'

export function Products() {
  const [selectedProductId, setSelectedProductId] = useState(productsData[0].id)
  const { t, language } = useI18n()

  const getTranslatedProduct = (productId: string) => {
    const originalProduct = productsData.find(p => p.id === productId)!
    
    // Convert kebab-case to camelCase: "wellness-pro" to "wellnessPro"
    const productKey = productId.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
    
    try {
      const productTranslations = translations[language]?.products?.productData?.[productKey]
      
      if (productTranslations && typeof productTranslations === 'object') {
        return {
          ...originalProduct,
          name: productTranslations.name || originalProduct.name,
          description: productTranslations.description || originalProduct.description,
          price: productTranslations.price || originalProduct.price,
          features: Array.isArray(productTranslations.features) ? productTranslations.features : originalProduct.features,
          ideal_for: Array.isArray(productTranslations.idealFor) ? productTranslations.idealFor : originalProduct.ideal_for
        }
      }
    } catch (error) {
      console.log(`Translation not found for products.productData.${productKey}`)
    }
    
    return originalProduct // Fallback to original if translation not found
  }

  const selectedProduct = getTranslatedProduct(selectedProductId)

  return (
    <div class="products">
      <section class="hero-section section">
        <div class="container">
          <div class="text-center">
            <h1 class="fade-in">{t('products.hero.title')}</h1>
            <p class="text-large fade-in">
              {t('products.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section class="products-showcase section section-alt">
        <div class="container">
          <div class="product-selector fade-in">
            {productsData.map((product) => {
              const translatedProduct = getTranslatedProduct(product.id)
              return (
                <button
                  key={product.id}
                  class={`product-tab ${selectedProductId === product.id ? 'active' : ''}`}
                  onClick={() => setSelectedProductId(product.id)}
                >
                  {translatedProduct.name}
                </button>
              )
            })}
          </div>

          <div class="product-detail fade-in">
            <div class="product-overview">
              <div class="product-image">
                <div class="image-placeholder">
                  {selectedProduct.name} {t('products.labels.vendingMachine')}
                </div>
              </div>
              <div class="product-info">
                <h2>{selectedProduct.name}</h2>
                <p class="product-description">{selectedProduct.description}</p>
                <p class="product-price">{selectedProduct.price}</p>
                
                <div class="ideal-for">
                  <h4>{t('products.labels.idealFor')}</h4>
                  <ul>
                    {selectedProduct.ideal_for.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
                
                <div class="product-actions">
                  <Button href="/contact" size="large">{t('products.labels.requestQuote')}</Button>
                  <Button variant="secondary" href="/benefits">{t('products.labels.calculateROI')}</Button>
                </div>
              </div>
            </div>

            <div class="product-details-grid">
              <div class="features-section">
                <h3>{t('products.labels.keyFeatures')}</h3>
                <ul class="features-list">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div class="specifications-section">
                <h3>{t('products.labels.technicalSpecs')}</h3>
                <div class="specs-grid">
                  <div class="spec-item">
                    <span class="spec-label">{t('products.labels.dimensions')}</span>
                    <span class="spec-value">{selectedProduct.specifications.dimensions}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">{t('products.labels.weight')}</span>
                    <span class="spec-value">{selectedProduct.specifications.weight}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">{t('products.labels.power')}</span>
                    <span class="spec-value">{selectedProduct.specifications.power}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">{t('products.labels.capacity')}</span>
                    <span class="spec-value">{selectedProduct.specifications.capacity}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">{t('products.labels.temperature')}</span>
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
            <h2 class="fade-in">{t('products.customization.title')}</h2>
            <p class="fade-in">{t('products.customization.subtitle')}</p>
          </div>
          
          <div class="grid grid-3 fade-in">
            <div class="customization-card card">
              <h3>{t('products.customization.branding.title')}</h3>
              <p>{t('products.customization.branding.description')}</p>
            </div>
            
            <div class="customization-card card">
              <h3>{t('products.customization.software.title')}</h3>
              <p>{t('products.customization.software.description')}</p>
            </div>
            
            <div class="customization-card card">
              <h3>{t('products.customization.curation.title')}</h3>
              <p>{t('products.customization.curation.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="comparison-section section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('products.comparison.title')}</h2>
          </div>
          
          <div class="comparison-table fade-in">
            <div class="comparison-header">
              <div class="feature-column">{t('products.comparison.features')}</div>
              {productsData.map(product => {
                const translatedProduct = getTranslatedProduct(product.id)
                return (
                  <div key={product.id} class="product-column">{translatedProduct.name}</div>
                )
              })}
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">{t('products.comparison.screenSize')}</div>
              {translations[language]?.products?.comparison?.values?.screenSizes?.map((size, index) => (
                <div key={index} class="feature-value">{size}</div>
              )) || ['55" 4K', '32" HD', '36" Premium'].map((size, index) => (
                <div key={index} class="feature-value">{size}</div>
              ))}
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">{t('products.comparison.capacity')}</div>
              {translations[language]?.products?.comparison?.values?.capacities?.map((capacity, index) => (
                <div key={index} class="feature-value">{capacity}</div>
              )) || ['120 products', '60 products', '80 products'].map((capacity, index) => (
                <div key={index} class="feature-value">{capacity}</div>
              ))}
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">{t('products.comparison.temperatureZones')}</div>
              {translations[language]?.products?.comparison?.values?.temperatureZones?.map((zone, index) => (
                <div key={index} class="feature-value">{zone}</div>
              )) || ['Dual', 'Single', 'Ambient'].map((zone, index) => (
                <div key={index} class="feature-value">{zone}</div>
              ))}
            </div>
            
            <div class="comparison-row">
              <div class="feature-name">{t('products.comparison.startingPrice')}</div>
              {translations[language]?.products?.comparison?.values?.prices?.map((price, index) => (
                <div key={index} class="feature-value">{price}</div>
              )) || ['$8,500', '$5,500', '$12,000'].map((price, index) => (
                <div key={index} class="feature-value">{price}</div>
              ))}
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