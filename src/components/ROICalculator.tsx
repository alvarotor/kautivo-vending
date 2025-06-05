import { useState } from 'preact/hooks'
import { FormField } from './FormField'
import { Button } from './Button'

interface ROIData {
  facilityType: string
  monthlyVisitors: string
  averageSpend: string
  operatingHours: string
  currentRevenue: string
}

export function ROICalculator() {
  const [formData, setFormData] = useState<ROIData>({
    facilityType: '',
    monthlyVisitors: '',
    averageSpend: '',
    operatingHours: '',
    currentRevenue: ''
  })
  
  const [results, setResults] = useState<any>(null)

  const facilityTypes = [
    { value: 'fitness-center', label: 'Fitness Center/Gym' },
    { value: 'yoga-studio', label: 'Yoga/Pilates Studio' },
    { value: 'spa', label: 'Spa/Wellness Center' },
    { value: 'pool', label: 'Swimming Pool/Aquatics' },
    { value: 'rehabilitation', label: 'Rehabilitation Clinic' },
    { value: 'coworking', label: 'Coworking Space' }
  ]

  const visitorRanges = [
    { value: '0-500', label: '0-500 visitors' },
    { value: '500-1000', label: '500-1,000 visitors' },
    { value: '1000-2000', label: '1,000-2,000 visitors' },
    { value: '2000-5000', label: '2,000-5,000 visitors' },
    { value: '5000+', label: '5,000+ visitors' }
  ]

  const spendRanges = [
    { value: '2-4', label: '$2-4 per visit' },
    { value: '4-6', label: '$4-6 per visit' },
    { value: '6-8', label: '$6-8 per visit' },
    { value: '8-12', label: '$8-12 per visit' },
    { value: '12+', label: '$12+ per visit' }
  ]

  const hoursRanges = [
    { value: '8-12', label: '8-12 hours' },
    { value: '12-16', label: '12-16 hours' },
    { value: '16-20', label: '16-20 hours' },
    { value: '20-24', label: '20-24 hours' }
  ]

  const calculateROI = () => {
    const visitors = parseInt(formData.monthlyVisitors.split('-')[1] || formData.monthlyVisitors.replace('+', ''))
    const spend = parseInt(formData.averageSpend.split('-')[1] || formData.averageSpend.replace('+', ''))
    const current = parseInt(formData.currentRevenue) || 0
    
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
        <h3>Calculate Your Potential ROI</h3>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Facility Type"
            type="select"
            name="facilityType"
            value={formData.facilityType}
            onChange={updateFormData('facilityType')}
            options={facilityTypes}
            required
          />
          
          <FormField
            label="Monthly Visitors"
            type="select"
            name="monthlyVisitors"
            value={formData.monthlyVisitors}
            onChange={updateFormData('monthlyVisitors')}
            options={visitorRanges}
            required
          />
          
          <FormField
            label="Expected Average Spend per Customer"
            type="select"
            name="averageSpend"
            value={formData.averageSpend}
            onChange={updateFormData('averageSpend')}
            options={spendRanges}
            required
          />
          
          <FormField
            label="Daily Operating Hours"
            type="select"
            name="operatingHours"
            value={formData.operatingHours}
            onChange={updateFormData('operatingHours')}
            options={hoursRanges}
            required
          />
          
          <FormField
            label="Current Monthly Retail Revenue (Optional)"
            type="number"
            name="currentRevenue"
            value={formData.currentRevenue}
            onChange={updateFormData('currentRevenue')}
            placeholder="Enter current monthly revenue"
          />
          
          <Button type="submit" size="large">Calculate ROI</Button>
        </form>
      </div>

      {results && (
        <div class="calculator-results">
          <h3>Your Projected Results</h3>
          
          <div class="results-grid">
            <div class="result-card">
              <div class="result-value">${results.monthlyRevenue.toLocaleString()}</div>
              <div class="result-label">Estimated Monthly Revenue</div>
            </div>
            
            <div class="result-card">
              <div class="result-value">${results.annualRevenue.toLocaleString()}</div>
              <div class="result-label">Projected Annual Revenue</div>
            </div>
            
            <div class="result-card">
              <div class="result-value">{results.paybackPeriod} months</div>
              <div class="result-label">Investment Payback Period</div>
            </div>
            
            <div class="result-card">
              <div class="result-value">${results.firstYearProfit.toLocaleString()}</div>
              <div class="result-label">First Year Net Profit</div>
            </div>
          </div>

          <div class="assumptions">
            <h4>Calculation Assumptions:</h4>
            <ul>
              <li>15% of visitors make a purchase (industry average)</li>
              <li>Machine investment: ${results.machineInvestment.toLocaleString()}</li>
              <li>Monthly operating costs: $200 (restocking, maintenance, processing fees)</li>
              <li>Revenue sharing with facility: 70% facility / 30% Kautivo</li>
            </ul>
          </div>

          <div class="next-steps">
            <p><strong>Ready to get started?</strong></p>
            <Button href="/contact" size="large">Get Free Consultation</Button>
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