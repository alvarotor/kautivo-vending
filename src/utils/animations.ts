export function initializeAnimations() {
  // Handle hero animations with staggered delay
  const heroElements = document.querySelectorAll('.hero .fade-in')
  heroElements.forEach((el, index) => {
    const element = el as HTMLElement
    // Ensure immediate visibility first
    element.style.opacity = '1'
    element.style.transform = 'translateY(0)'
    
    // Add animation with delay after a short timeout
    setTimeout(() => {
      element.style.opacity = '0'
      element.style.transform = 'translateY(30px)'
      element.classList.add('animate')
      
      setTimeout(() => {
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
        element.classList.add('visible')
      }, 100 + (index * 200))
    }, 300)
  })

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // Observe all elements with fade-in class
  const fadeInElements = document.querySelectorAll('.fade-in')
  fadeInElements.forEach(el => {
    // Skip hero elements as they're already visible
    if (!el.closest('.hero')) {
      observer.observe(el)
    }
  })

  // Fallback: Show all fade-in elements if they're still hidden after 1 second
  setTimeout(() => {
    fadeInElements.forEach(el => {
      if (!el.classList.contains('visible')) {
        el.classList.add('visible')
      }
    })
  }, 1000)

  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('a[href^="#"]')
    
    if (link) {
      e.preventDefault()
      const href = link.getAttribute('href')
      if (href && href !== '#') {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }
  })
}