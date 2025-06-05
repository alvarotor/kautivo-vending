interface FormFieldProps {
  label: string
  type?: string
  name: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  placeholder?: string
  error?: string
  options?: { value: string; label: string }[]
  rows?: number
}

export function FormField({
  label,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  placeholder,
  error,
  options,
  rows
}: FormFieldProps) {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    onChange(target.value)
  }

  return (
    <div class="form-field">
      <label class="form-label" for={name}>
        {label}
        {required && <span class="required">*</span>}
      </label>
      
      {type === 'select' && options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          class={`form-input ${error ? 'form-input-error' : ''}`}
          required={required}
        >
          <option value="">Select an option</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          class={`form-input ${error ? 'form-input-error' : ''}`}
          required={required}
          rows={rows || 4}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          class={`form-input ${error ? 'form-input-error' : ''}`}
          required={required}
        />
      )}
      
      {error && <span class="form-error">{error}</span>}
      
      <style jsx>{`
        .form-field {
          margin-bottom: var(--spacing-md);
        }
        
        .form-label {
          display: block;
          margin-bottom: var(--spacing-xs);
          color: var(--color-dark-gray);
          font-weight: 500;
        }
        
        .required {
          color: #E74C3C;
          margin-left: 4px;
        }
        
        .form-input {
          width: 100%;
          padding: var(--spacing-sm);
          border: 2px solid #E5E7EB;
          border-radius: var(--border-radius);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .form-input:focus {
          outline: none;
          border-color: var(--color-sage);
          box-shadow: 0 0 0 3px rgba(135, 169, 107, 0.1);
        }
        
        .form-input-error {
          border-color: #E74C3C;
        }
        
        .form-input-error:focus {
          border-color: #E74C3C;
          box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
        }
        
        .form-error {
          display: block;
          margin-top: var(--spacing-xs);
          color: #E74C3C;
          font-size: 0.875rem;
        }
        
        textarea.form-input {
          resize: vertical;
          min-height: 100px;
        }
      `}</style>
    </div>
  )
}