export function initializeAnimations() {
  // Immediately show hero content to prevent blank page
  const heroElements = document.querySelectorAll('.hero .fade-in')
  heroElements.forEach(el => {
    el.classList.add('visible')
    // Force immediate visibility
    const element = el as HTMLElement
    element.style.opacity = '1'
    element.style.transform = 'translateY(0)'
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