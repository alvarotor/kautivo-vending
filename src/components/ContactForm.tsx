import { useState, useEffect } from 'preact/hooks'
import { FormField } from './FormField'
import { Button } from './Button'
import { useI18n } from '../utils/i18n'
import { fetchFormAddressFromGoogleSheets, checkIfFormIsOpen } from '../services/googleSheets'

interface ContactFormData {
  fullName: string
  email: string
  phone: string
  company: string
  businessType: string
  monthlyVisitors: string
  currentVending: string
  contactMethod: string
  bestTime: string
  requirements: string
  termsAgreed: boolean
}

export function ContactForm() {
  const { t } = useI18n()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: 'John Smith',
    email: 'goodbytes23@gmail.com',
    phone: '+1 (555) 123-4567',
    company: 'Ryanair',
    businessType: 'fitness-center',
    monthlyVisitors: '1000-2000',
    currentVending: 'no',
    contactMethod: 'email',
    bestTime: 'morning',
    requirements: 'Looking for smart vending machines with healthy snacks and supplements for our gym members.',
    termsAgreed: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formAddress, setFormAddress] = useState<string>('')
  const [isLoadingAddress, setIsLoadingAddress] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState<boolean>(true)

  const businessTypes = [
    { value: 'fitness-center', label: t('contactForm.businessTypes.fitnessCenter') },
    { value: 'yoga-studio', label: t('contactForm.businessTypes.yogaStudio') },
    { value: 'spa', label: t('contactForm.businessTypes.spa') },
    { value: 'pool', label: t('contactForm.businessTypes.pool') },
    { value: 'rehabilitation', label: t('contactForm.businessTypes.rehabilitation') },
    { value: 'coworking', label: t('contactForm.businessTypes.coworking') },
    { value: 'other', label: t('contactForm.businessTypes.other') }
  ]

  const visitorRanges = [
    { value: '0-500', label: t('contactForm.visitorRanges.range1') },
    { value: '500-1000', label: t('contactForm.visitorRanges.range2') },
    { value: '1000-2000', label: t('contactForm.visitorRanges.range3') },
    { value: '2000-5000', label: t('contactForm.visitorRanges.range4') },
    { value: '5000+', label: t('contactForm.visitorRanges.range5') }
  ]

  const contactMethods = [
    { value: 'email', label: t('contactForm.contactMethods.email') },
    { value: 'phone', label: t('contactForm.contactMethods.phone') },
    { value: 'either', label: t('contactForm.contactMethods.either') }
  ]

  const bestTimes = [
    { value: 'morning', label: t('contactForm.bestTimes.morning') },
    { value: 'afternoon', label: t('contactForm.bestTimes.afternoon') },
    { value: 'evening', label: t('contactForm.bestTimes.evening') },
    { value: 'anytime', label: t('contactForm.bestTimes.anytime') }
  ]

  // Check if form is open and fetch form address from Google Sheets on component mount
  useEffect(() => {
    const loadFormConfiguration = async () => {
      try {
        setIsLoadingAddress(true)
        
        // First check if the form is open (B1 cell has content)
        const formOpen = await checkIfFormIsOpen()
        setIsFormOpen(formOpen)
        
        if (formOpen) {
          // Only fetch the form address if the form is open
          const address = await fetchFormAddressFromGoogleSheets()
          setFormAddress(address)
        }
      } catch (error) {
        console.error('Failed to load form configuration:', error)
        // If there's an error checking form status, assume it's closed
        setIsFormOpen(false)
      } finally {
        setIsLoadingAddress(false)
      }
    }

    loadFormConfiguration()
  }, [])

  const updateFormData = (field: keyof ContactFormData) => (value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = t('contactForm.validation.fullNameRequired')
      if (!formData.email.trim()) newErrors.email = t('contactForm.validation.emailRequired')
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('contactForm.validation.validEmail')
      if (!formData.phone.trim()) newErrors.phone = t('contactForm.validation.phoneRequired')
      if (!formData.company.trim()) newErrors.company = t('contactForm.validation.companyRequired')
    }

    if (step === 2) {
      if (!formData.businessType) newErrors.businessType = t('contactForm.validation.businessTypeRequired')
      if (!formData.monthlyVisitors) newErrors.monthlyVisitors = t('contactForm.validation.visitorsRequired')
      if (!formData.currentVending) newErrors.currentVending = t('contactForm.validation.vendingRequired')
    }

    if (step === 3) {
      if (!formData.contactMethod) newErrors.contactMethod = t('contactForm.validation.contactMethodRequired')
      if (!formData.bestTime) newErrors.bestTime = t('contactForm.validation.bestTimeRequired')
      if (!formData.termsAgreed) newErrors.termsAgreed = t('contactForm.validation.termsRequired')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    
    if (!validateStep(3)) return

    if (!formAddress) {
      console.error('Form address not available')
      alert(t('contactForm.errors.noFormAddress') || 'Form submission address not configured. Please try again later.')
      return
    }

    setIsSubmitting(true)
    
    try {
      console.log('Submitting form data:', formData)
      console.log('Submitting form formAddress:', formAddress)
      
      // Submit form data to the configured address
      const form = new FormData()
      form.append('fullName', formData.fullName)
      form.append('email', formData.email)
      form.append('phone', formData.phone)
      form.append('company', formData.company)
      form.append('businessType', formData.businessType)
      form.append('monthlyVisitors', formData.monthlyVisitors)
      form.append('currentVending', formData.currentVending)
      form.append('contactMethod', formData.contactMethod)
      form.append('bestTime', formData.bestTime)
      form.append('requirements', formData.requirements)

      console.log('Submitting form data:', formData)
      console.log('Form address:', formAddress)

      const response = await fetch(formAddress, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify(form)
      })

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`)
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert(t('contactForm.errors.submissionFailed') || 'Form submission failed. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div class="form-success">
        <div class="success-content">
          <div class="success-icon">✅</div>
          <h3>{t('contactForm.success.title')}</h3>
          <p>
            {t('contactForm.success.message')}
          </p>
          <p class="response-time">
            <strong>{t('contactForm.success.responseTime')}</strong> {t('contactForm.success.responseValue')}
          </p>
          <div class="next-steps">
            <h4>{t('contactForm.success.nextStepsTitle')}</h4>
            <ul>
              <li>{t('contactForm.success.nextSteps.0')}</li>
              <li>{t('contactForm.success.nextSteps.1')}</li>
              <li>{t('contactForm.success.nextSteps.2')}</li>
              <li>{t('contactForm.success.nextSteps.3')}</li>
            </ul>
          </div>
        </div>
        
        <style jsx>{`
          .form-success {
            background: var(--color-white);
            border-radius: var(--border-radius-large);
            padding: var(--spacing-xxl);
            text-align: center;
            box-shadow: var(--shadow-light);
          }
          
          .success-icon {
            font-size: 4rem;
            margin-bottom: var(--spacing-lg);
          }
          
          .success-content h3 {
            color: var(--color-sage);
            margin-bottom: var(--spacing-md);
          }
          
          .response-time {
            background: var(--color-light-gray);
            padding: var(--spacing-md);
            border-radius: var(--border-radius);
            margin: var(--spacing-lg) 0;
          }
          
          .next-steps {
            text-align: left;
            margin-top: var(--spacing-lg);
          }
          
          .next-steps h4 {
            color: var(--color-sage);
            margin-bottom: var(--spacing-sm);
          }
          
          .next-steps ul {
            list-style: none;
            padding: 0;
          }
          
          .next-steps li {
            padding: var(--spacing-xs) 0;
            color: var(--color-medium-gray);
          }
          
          .next-steps li:before {
            content: "→ ";
            color: var(--color-sage);
            font-weight: bold;
          }
        `}</style>
      </div>
    )
  }

  if (isLoadingAddress) {
    return (
      <div class="contact-form">
        <div class="loading-state">
          <div class="spinner" />
          <p>{t('contactForm.loadingForm') || 'Loading form configuration...'}</p>
        </div>
        
        <style jsx>{`
          .contact-form {
            background: var(--color-white);
            border-radius: var(--border-radius-large);
            padding: var(--spacing-xl);
            box-shadow: var(--shadow-light);
          }
          
          .loading-state {
            text-align: center;
            padding: var(--spacing-xl);
            color: var(--color-medium-gray);
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
        `}</style>
      </div>
    )
  }

  if (!isFormOpen) {
    return (
      <div class="contact-form">
        <div class="form-closed">
          <div class="closed-icon">🚫</div>
          <h3>{t('contactForm.formClosed')}</h3>
          <p>
            {t('contact.contactMethods.responseTime')} {t('contact.contactMethods.responseValue')}
          </p>
        </div>
        
        <style jsx>{`
          .contact-form {
            background: var(--color-white);
            border-radius: var(--border-radius-large);
            padding: var(--spacing-xl);
            box-shadow: var(--shadow-light);
          }
          
          .form-closed {
            text-align: center;
            padding: var(--spacing-xl);
            color: var(--color-medium-gray);
          }
          
          .closed-icon {
            font-size: 4rem;
            margin-bottom: var(--spacing-lg);
          }
          
          .form-closed h3 {
            color: var(--color-sage);
            margin-bottom: var(--spacing-md);
          }
          
          .form-closed p {
            background: var(--color-light-gray);
            padding: var(--spacing-md);
            border-radius: var(--border-radius);
            margin-top: var(--spacing-lg);
          }
        `}</style>
      </div>
    )
  }

  return (
    <div class="contact-form">
      <div class="form-progress">
        <div class="progress-bar">
          <div class="progress-fill" style={{ width: `${(currentStep / 3) * 100}%` }} />
        </div>
        <div class="progress-steps">
          <span class={currentStep >= 1 ? 'active' : ''}>{t('contactForm.progress.step1')}</span>
          <span class={currentStep >= 2 ? 'active' : ''}>{t('contactForm.progress.step2')}</span>
          <span class={currentStep >= 3 ? 'active' : ''}>{t('contactForm.progress.step3')}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div class="form-step">
            <h3>{t('contactForm.step1.title')}</h3>
            <FormField
              label={t('contactForm.step1.fullName')}
              name="fullName"
              value={formData.fullName}
              onChange={updateFormData('fullName')}
              placeholder="e.g. John Smith"
              required
              error={errors.fullName}
            />
            
            <FormField
              label={t('contactForm.step1.businessEmail')}
              type="email"
              name="email"
              value={formData.email}
              onChange={updateFormData('email')}
              placeholder="your.email@company.com"
              required
              error={errors.email}
            />
            
            <FormField
              label={t('contactForm.step1.phoneNumber')}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={updateFormData('phone')}
              placeholder={t('contactForm.step1.phonePlaceholder')}
              required
              error={errors.phone}
            />
            
            <FormField
              label={t('contactForm.step1.companyName')}
              name="company"
              value={formData.company}
              onChange={updateFormData('company')}
              placeholder="e.g. Fitness Plus Gym"
              required
              error={errors.company}
            />
          </div>
        )}

        {currentStep === 2 && (
          <div class="form-step">
            <h3>{t('contactForm.step2.title')}</h3>
            <FormField
              label={t('contactForm.step2.businessType')}
              type="select"
              name="businessType"
              value={formData.businessType}
              onChange={updateFormData('businessType')}
              options={businessTypes}
              required
              error={errors.businessType}
            />
            
            <FormField
              label={t('contactForm.step2.monthlyVisitors')}
              type="select"
              name="monthlyVisitors"
              value={formData.monthlyVisitors}
              onChange={updateFormData('monthlyVisitors')}
              options={visitorRanges}
              required
              error={errors.monthlyVisitors}
            />
            
            <div class="form-field">
              <label class="form-label">
                {t('contactForm.step2.currentVending')} <span class="required">*</span>
              </label>
              <div class="radio-group">
                <label class="radio-option">
                  <input
                    type="radio"
                    name="currentVending"
                    value="yes"
                    checked={formData.currentVending === 'yes'}
                    onChange={(e) => updateFormData('currentVending')((e.target as HTMLInputElement).value)}
                  />
                  {t('contactForm.step2.yes')}
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    name="currentVending"
                    value="no"
                    checked={formData.currentVending === 'no'}
                    onChange={(e) => updateFormData('currentVending')((e.target as HTMLInputElement).value)}
                  />
                  {t('contactForm.step2.no')}
                </label>
              </div>
              {errors.currentVending && <span class="form-error">{errors.currentVending}</span>}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div class="form-step">
            <h3>{t('contactForm.step3.title')}</h3>
            <FormField
              label={t('contactForm.step3.contactMethod')}
              type="select"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={updateFormData('contactMethod')}
              options={contactMethods}
              required
              error={errors.contactMethod}
            />
            
            <FormField
              label={t('contactForm.step3.bestTime')}
              type="select"
              name="bestTime"
              value={formData.bestTime}
              onChange={updateFormData('bestTime')}
              options={bestTimes}
              required
              error={errors.bestTime}
            />
            
            <FormField
              label={t('contactForm.step3.requirements')}
              type="textarea"
              name="requirements"
              value={formData.requirements}
              onChange={updateFormData('requirements')}
              placeholder={t('contactForm.step3.requirementsPlaceholder')}
              rows={4}
            />

            <div class="form-field">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.termsAgreed}
                  onChange={(e) => updateFormData('termsAgreed')((e.target as HTMLInputElement).checked)}
                />
                {t('contactForm.step3.termsAgreement')} <span class="required">*</span>
              </label>
              {errors.termsAgreed && <span class="form-error">{errors.termsAgreed}</span>}
            </div>
          </div>
        )}

        <div class="form-actions">
          {currentStep > 1 && (
            <Button type="button" variant="secondary" onClick={prevStep}>
              {t('contactForm.buttons.previous')}
            </Button>
          )}
          
          {currentStep < 3 ? (
            <Button type="button" onClick={nextStep}>
              {t('contactForm.buttons.nextStep')}
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('contactForm.buttons.submitting') : t('contactForm.buttons.submitRequest')}
            </Button>
          )}
        </div>
      </form>
      
      <style jsx>{`
        .contact-form {
          background: var(--color-white);
          border-radius: var(--border-radius-large);
          padding: var(--spacing-xl);
          box-shadow: var(--shadow-light);
        }
        
        .form-progress {
          margin-bottom: var(--spacing-xl);
        }
        
        .progress-bar {
          height: 4px;
          background: #E5E7EB;
          border-radius: 2px;
          margin-bottom: var(--spacing-md);
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: var(--color-sage);
          transition: width 0.3s ease;
        }
        
        .progress-steps {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
        }
        
        .progress-steps span {
          color: var(--color-medium-gray);
          transition: color 0.3s ease;
        }
        
        .progress-steps span.active {
          color: var(--color-sage);
          font-weight: 500;
        }
        
        .form-step h3 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-lg);
          text-align: center;
        }
        
        .radio-group {
          display: flex;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xs);
        }
        
        .radio-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          cursor: pointer;
        }
        
        .radio-option input[type="radio"] {
          margin: 0;
        }
        
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
          cursor: pointer;
          line-height: 1.5;
        }
        
        .checkbox-label input[type="checkbox"] {
          margin: 0;
          margin-top: 2px;
          flex-shrink: 0;
        }
        
        .form-actions {
          display: flex;
          justify-content: space-between;
          margin-top: var(--spacing-xl);
          gap: var(--spacing-md);
        }
        
        .form-actions > :only-child {
          margin-left: auto;
        }
        
        .required {
          color: #E74C3C;
        }
        
        .form-label {
          display: block;
          margin-bottom: var(--spacing-xs);
          color: var(--color-dark-gray);
          font-weight: 500;
        }
        
        .form-error {
          display: block;
          margin-top: var(--spacing-xs);
          color: #E74C3C;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .progress-steps {
            font-size: 0.8rem;
          }
          
          .form-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}