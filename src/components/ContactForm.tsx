import { useState } from 'preact/hooks'
import { FormField } from './FormField'
import { Button } from './Button'

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
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    monthlyVisitors: '',
    currentVending: '',
    contactMethod: '',
    bestTime: '',
    requirements: '',
    termsAgreed: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const businessTypes = [
    { value: 'fitness-center', label: 'Fitness Center/Gym' },
    { value: 'yoga-studio', label: 'Yoga/Pilates Studio' },
    { value: 'spa', label: 'Spa/Wellness Center' },
    { value: 'pool', label: 'Swimming Pool/Aquatics Center' },
    { value: 'rehabilitation', label: 'Rehabilitation Clinic' },
    { value: 'coworking', label: 'Coworking Space' },
    { value: 'other', label: 'Other' }
  ]

  const visitorRanges = [
    { value: '0-500', label: '0-500 monthly visitors' },
    { value: '500-1000', label: '500-1,000 monthly visitors' },
    { value: '1000-2000', label: '1,000-2,000 monthly visitors' },
    { value: '2000-5000', label: '2,000-5,000 monthly visitors' },
    { value: '5000+', label: '5,000+ monthly visitors' }
  ]

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'either', label: 'Either Email or Phone' }
  ]

  const bestTimes = [
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 8 PM)' },
    { value: 'anytime', label: 'Anytime' }
  ]

  const updateFormData = (field: keyof ContactFormData) => (value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email'
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
      if (!formData.company.trim()) newErrors.company = 'Company/Facility name is required'
    }

    if (step === 2) {
      if (!formData.businessType) newErrors.businessType = 'Please select your business type'
      if (!formData.monthlyVisitors) newErrors.monthlyVisitors = 'Please select visitor count'
      if (!formData.currentVending) newErrors.currentVending = 'Please indicate current vending status'
    }

    if (step === 3) {
      if (!formData.contactMethod) newErrors.contactMethod = 'Please select preferred contact method'
      if (!formData.bestTime) newErrors.bestTime = 'Please select best time to contact'
      if (!formData.termsAgreed) newErrors.termsAgreed = 'You must agree to the terms to continue'
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

    setIsSubmitting(true)
    
    try {
      // Simulate form submission (would integrate with Netlify Forms or similar)
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div class="form-success">
        <div class="success-content">
          <div class="success-icon">✅</div>
          <h3>Thank You for Your Interest!</h3>
          <p>
            Your consultation request has been received. Our team will review your information 
            and contact you within 24 hours to schedule your free consultation.
          </p>
          <p class="response-time">
            <strong>Expected Response Time:</strong> Within 24 hours during business days
          </p>
          <div class="next-steps">
            <h4>What happens next?</h4>
            <ul>
              <li>Our wellness vending specialist will review your facility details</li>
              <li>We'll prepare a customized recommendation based on your needs</li>
              <li>You'll receive a call or email to schedule your consultation</li>
              <li>We'll provide ROI projections specific to your facility</li>
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

  return (
    <div class="contact-form">
      <div class="form-progress">
        <div class="progress-bar">
          <div class="progress-fill" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
        </div>
        <div class="progress-steps">
          <span class={currentStep >= 1 ? 'active' : ''}>1. Contact Info</span>
          <span class={currentStep >= 2 ? 'active' : ''}>2. Business Details</span>
          <span class={currentStep >= 3 ? 'active' : ''}>3. Preferences</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div class="form-step">
            <h3>Contact Information</h3>
            <FormField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={updateFormData('fullName')}
              required
              error={errors.fullName}
            />
            
            <FormField
              label="Business Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={updateFormData('email')}
              required
              error={errors.email}
            />
            
            <FormField
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={updateFormData('phone')}
              placeholder="(555) 123-4567"
              required
              error={errors.phone}
            />
            
            <FormField
              label="Company/Facility Name"
              name="company"
              value={formData.company}
              onChange={updateFormData('company')}
              required
              error={errors.company}
            />
          </div>
        )}

        {currentStep === 2 && (
          <div class="form-step">
            <h3>Business Details</h3>
            <FormField
              label="Business Type"
              type="select"
              name="businessType"
              value={formData.businessType}
              onChange={updateFormData('businessType')}
              options={businessTypes}
              required
              error={errors.businessType}
            />
            
            <FormField
              label="Monthly Visitor Count"
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
                Do you currently have vending machines? <span class="required">*</span>
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
                  Yes
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    name="currentVending"
                    value="no"
                    checked={formData.currentVending === 'no'}
                    onChange={(e) => updateFormData('currentVending')((e.target as HTMLInputElement).value)}
                  />
                  No
                </label>
              </div>
              {errors.currentVending && <span class="form-error">{errors.currentVending}</span>}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div class="form-step">
            <h3>Contact Preferences</h3>
            <FormField
              label="Preferred Contact Method"
              type="select"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={updateFormData('contactMethod')}
              options={contactMethods}
              required
              error={errors.contactMethod}
            />
            
            <FormField
              label="Best Time to Contact"
              type="select"
              name="bestTime"
              value={formData.bestTime}
              onChange={updateFormData('bestTime')}
              options={bestTimes}
              required
              error={errors.bestTime}
            />
            
            <FormField
              label="Additional Requirements or Questions"
              type="textarea"
              name="requirements"
              value={formData.requirements}
              onChange={updateFormData('requirements')}
              placeholder="Tell us about any specific needs, space constraints, or questions you have..."
              rows={4}
            />

            <div class="form-field">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.termsAgreed}
                  onChange={(e) => updateFormData('termsAgreed')((e.target as HTMLInputElement).checked)}
                />
                I agree to be contacted by Kautivo regarding vending solutions and understand that my information will be used according to the privacy policy. <span class="required">*</span>
              </label>
              {errors.termsAgreed && <span class="form-error">{errors.termsAgreed}</span>}
            </div>
          </div>
        )}

        <div class="form-actions">
          {currentStep > 1 && (
            <Button type="button" variant="secondary" onClick={prevStep}>
              Previous
            </Button>
          )}
          
          {currentStep < 3 ? (
            <Button type="button" onClick={nextStep}>
              Next Step
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
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