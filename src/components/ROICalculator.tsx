import { useState } from 'preact/hooks'
import { FormField } from './FormField'
import { Button } from './Button'
import { useI18n } from '../utils/i18n'

interface ROIData {
  facilityType: string
  monthlyVisitors: string
  averageSpend: string
  operatingHours: string
  currentRevenue: string
}

export function ROICalculator() {
  const { t } = useI18n()
  const [formData, setFormData] = useState<ROIData>({
    facilityType: '',
    monthlyVisitors: '',
    averageSpend: '',
    operatingHours: '',
    currentRevenue: ''
  })
  
  const [results, setResults] = useState<any>(null)

  const facilityTypes = [
    { value: 'fitness-center', label: t('roiCalculator.facilityTypes.fitnessCenter') },
    { value: 'yoga-studio', label: t('roiCalculator.facilityTypes.yogaStudio') },
    { value: 'spa', label: t('roiCalculator.facilityTypes.spa') },
    { value: 'pool', label: t('roiCalculator.facilityTypes.pool') },
    { value: 'rehabilitation', label: t('roiCalculator.facilityTypes.rehabilitation') },
    { value: 'coworking', label: t('roiCalculator.facilityTypes.coworking') }
  ]

  const visitorRanges = [
    { value: '0-500', label: t('roiCalculator.visitorRanges.range1') },
    { value: '500-1000', label: t('roiCalculator.visitorRanges.range2') },
    { value: '1000-2000', label: t('roiCalculator.visitorRanges.range3') },
    { value: '2000-5000', label: t('roiCalculator.visitorRanges.range4') },
    { value: '5000+', label: t('roiCalculator.visitorRanges.range5') }
  ]

  const spendRanges = [
    { value: '2-4', label: t('roiCalculator.spendRanges.range1') },
    { value: '4-6', label: t('roiCalculator.spendRanges.range2') },
    { value: '6-8', label: t('roiCalculator.spendRanges.range3') },
    { value: '8-12', label: t('roiCalculator.spendRanges.range4') },
    { value: '12+', label: t('roiCalculator.spendRanges.range5') }
  ]

  const hoursRanges = [
    { value: '8-12', label: t('roiCalculator.hoursRanges.range1') },
    { value: '12-16', label: t('roiCalculator.hoursRanges.range2') },
    { value: '16-20', label: t('roiCalculator.hoursRanges.range3') },
    { value: '20-24', label: t('roiCalculator.hoursRanges.range4') }
  ]

  const calculateROI = () => {
    const visitors = parseInt(formData.monthlyVisitors.split('-')[1] || formData.monthlyVisitors.replace('+', ''), 10)
    const spend = parseInt(formData.averageSpend.split('-')[1] || formData.averageSpend.replace('+', ''), 10)
    const current = parseInt(formData.currentRevenue, 10) || 0
    
    const estimatedMonthlyRevenue = Math.round(visitors * 0.15 * spend)
    const annualRevenue = estimatedMonthlyRevenue * 12
    const machineInvestment = 7000
    const monthlyOperating = 200
    const annualOperating = monthlyOperating * 12
    const paybackPeriod = Math.round(machineInvestment / (estimatedMonthlyRevenue - monthlyOperating))
    const firstYearProfit = annualRevenue - machineInvestment - annualOperating
    const revenueIncrease = current > 0 ? Math.round(((annualRevenue - current) / current) * 100) : 100

    setResults({
      monthlyRevenue: estimatedMonthlyRevenue,
      annualRevenue,
      paybackPeriod,
      firstYearProfit,
      revenueIncrease,
      machineInvestment,
      annualOperating
    })
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    calculateROI()
  }

  const updateFormData = (field: keyof ROIData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div class="roi-calculator">
      <div class="calculator-form">
        <h3>{t('roiCalculator.title')}</h3>
        <form onSubmit={handleSubmit}>
          <FormField
            label={t('roiCalculator.form.facilityType')}
            type="select"
            name="facilityType"
            value={formData.facilityType}
            onChange={updateFormData('facilityType')}
            options={facilityTypes}
            required
          />
          
          <FormField
            label={t('roiCalculator.form.monthlyVisitors')}
            type="select"
            name="monthlyVisitors"
            value={formData.monthlyVisitors}
            onChange={updateFormData('monthlyVisitors')}
            options={visitorRanges}
            required
          />
          
          <FormField
            label={t('roiCalculator.form.averageSpend')}
            type="select"
            name="averageSpend"
            value={formData.averageSpend}
            onChange={updateFormData('averageSpend')}
            options={spendRanges}
            required
          />
          
          <FormField
            label={t('roiCalculator.form.operatingHours')}
            type="select"
            name="operatingHours"
            value={formData.operatingHours}
            onChange={updateFormData('operatingHours')}
            options={hoursRanges}
            required
          />
          
          <FormField
            label={t('roiCalculator.form.currentRevenue')}
            type="number"
            name="currentRevenue"
            value={formData.currentRevenue}
            onChange={updateFormData('currentRevenue')}
            placeholder={t('roiCalculator.form.currentRevenuePlaceholder')}
          />
          
          <Button type="submit" size="large">{t('roiCalculator.form.calculateButton')}</Button>
        </form>
      </div>

      {results && (
        <div class="calculator-results">
          <h3>{t('roiCalculator.results.title')}</h3>
          
          <div class="results-grid">
            <div class="result-card">
              <div class="result-value">${results.monthlyRevenue.toLocaleString()}</div>
              <div class="result-label">{t('roiCalculator.results.monthlyRevenue')}</div>
            </div>
            
            <div class="result-card">
              <div class="result-value">${results.annualRevenue.toLocaleString()}</div>
              <div class="result-label">{t('roiCalculator.results.annualRevenue')}</div>
            </div>
            
            <div class="result-card">
              <div class="result-value">{results.paybackPeriod} {t('roiCalculator.results.months')}</div>
              <div class="result-label">{t('roiCalculator.results.paybackPeriod')}</div>
            </div>
            
            <div class="result-card">
              <div class="result-value">${results.firstYearProfit.toLocaleString()}</div>
              <div class="result-label">{t('roiCalculator.results.firstYearProfit')}</div>
            </div>
          </div>

          <div class="assumptions">
            <h4>{t('roiCalculator.assumptions.title')}</h4>
            <ul>
              <li>{t('roiCalculator.assumptions.purchaseRate')}</li>
              <li>{t('roiCalculator.assumptions.machineInvestment')}{results.machineInvestment.toLocaleString()}</li>
              <li>{t('roiCalculator.assumptions.operatingCosts')}</li>
              <li>{t('roiCalculator.assumptions.revenueSharing')}</li>
            </ul>
          </div>

          <div class="next-steps">
            <p><strong>{t('roiCalculator.nextSteps.title')}</strong></p>
            <Button href="/contact" size="large">{t('roiCalculator.nextSteps.button')}</Button>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .roi-calculator {
          background: var(--color-white);
          border-radius: var(--border-radius-large);
          padding: var(--spacing-xl);
          box-shadow: var(--shadow-light);
        }
        
        .calculator-form h3,
        .calculator-results h3 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-lg);
          text-align: center;
        }
        
        .calculator-results {
          margin-top: var(--spacing-xl);
          padding-top: var(--spacing-xl);
          border-top: 2px solid var(--color-light-gray);
        }
        
        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }
        
        .result-card {
          text-align: center;
          padding: var(--spacing-lg);
          background: var(--color-light-gray);
          border-radius: var(--border-radius);
        }
        
        .result-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-sage);
          margin-bottom: var(--spacing-xs);
        }
        
        .result-label {
          font-weight: 500;
          color: var(--color-dark-gray);
        }
        
        .assumptions {
          background: var(--color-light-gray);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius);
          margin-bottom: var(--spacing-lg);
        }
        
        .assumptions h4 {
          color: var(--color-dark-gray);
          margin-bottom: var(--spacing-sm);
        }
        
        .assumptions ul {
          margin: 0;
          padding-left: var(--spacing-lg);
        }
        
        .assumptions li {
          color: var(--color-medium-gray);
          margin-bottom: var(--spacing-xs);
        }
        
        .next-steps {
          text-align: center;
        }
        
        .next-steps p {
          margin-bottom: var(--spacing-md);
          font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
          
          .result-value {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}