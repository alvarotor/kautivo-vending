export function initializeAnimations() {
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
    observer.observe(el)
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