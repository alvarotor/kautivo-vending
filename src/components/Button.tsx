import { createPath, navigateTo } from '../utils/routing'

interface ButtonProps {
  children: any
  variant?: 'primary' | 'secondary'
  size?: 'normal' | 'large'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'normal',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  const classes = `btn btn-${variant} ${size === 'large' ? 'btn-large' : ''} ${className}`.trim()
  
  if (href) {
    const handleClick = (e: Event) => {
      e.preventDefault()
      navigateTo(href)
    }
    
    return (
      <a href={createPath(href)} class={classes} onClick={handleClick}>
        {children}
      </a>
    )
  }
  
  return (
    <button 
      type={type}
      class={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}