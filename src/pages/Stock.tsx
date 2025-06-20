import { useState, useEffect } from 'preact/hooks'
import { useI18n } from '../utils/i18n'
import { fetchProductsFromGoogleSheets, SheetsData } from '../services/googleSheets'

export function Stock() {
  const { t } = useI18n()
  const [sheetsData, setSheetsData] = useState<SheetsData>({ headers: [], rows: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProductsFromGoogleSheets()
        setSheetsData(data)
      } catch (err) {
        setError(t('stock.error'))
        console.error('Error loading stock:', err)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [t])

  return (
    <div class="stock">
      <section class="hero-section section">
        <div class="container">
          <div class="text-center">
            <h1 class="fade-in">{t('stock.hero.title')}</h1>
            <p class="text-large fade-in">
              {t('stock.hero.subtitle')}
            </p>
          </div>
          
          <div class="stock-table-container fade-in">
            {loading && (
              <div class="loading-state">
                <div class="spinner" />
                <p>{t('stock.loading')}</p>
              </div>
            )}
            
            {error && (
              <div class="error-state">
                <p>{error}</p>
              </div>
            )}
            
            {!loading && !error && sheetsData.rows.length > 0 && (
              <table class="stock-table">
                <thead>
                  <tr>
                    {sheetsData.headers.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sheetsData.rows.map((product, index) => (
                    <tr key={index}>
                      {sheetsData.headers.map((header, headerIndex) => (
                        <td key={headerIndex}>{product[header]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            
            {!loading && !error && sheetsData.rows.length === 0 && (
              <div class="empty-state">
                <p>{t('stock.empty')}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .stock-table-container {
          margin-top: var(--spacing-xl);
          overflow-x: auto;
        }
        
        .stock-table {
          width: 100%;
          border-collapse: collapse;
          background: var(--color-white);
          border-radius: var(--border-radius-large);
          overflow: hidden;
          box-shadow: var(--shadow-light);
        }
        
        .stock-table th {
          background: var(--color-sage);
          color: var(--color-white);
          padding: var(--spacing-md) var(--spacing-lg);
          text-align: left;
          font-weight: 600;
          border-bottom: 2px solid var(--color-sage);
        }
        
        .stock-table td {
          padding: var(--spacing-md) var(--spacing-lg);
          border-bottom: 1px solid #E5E7EB;
          color: var(--color-dark-gray);
        }
        
        .stock-table tr:hover {
          background-color: var(--color-light-gray);
        }
        
        .stock-table tr:last-child td {
          border-bottom: none;
        }
        
        .loading-state,
        .error-state,
        .empty-state {
          text-align: center;
          padding: var(--spacing-xxl);
        }
        
        .loading-state p {
          color: var(--color-medium-gray);
          font-size: 1.1rem;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          margin: 0 auto var(--spacing-md) auto;
          border: 3px solid #f3f3f3;
          border-top: 3px solid var(--color-sage);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .error-state p {
          color: #dc2626;
          font-size: 1.1rem;
        }
        
        .empty-state p {
          color: var(--color-medium-gray);
          font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
          .stock-table {
            font-size: 0.9rem;
          }
          
          .stock-table th,
          .stock-table td {
            padding: var(--spacing-sm);
          }
        }
      `}</style>
    </div>
  )
}