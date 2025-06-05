import { render } from 'preact'
import { App } from './App'
import { initializeAnimations } from './utils/animations'
import './styles/index.css'

// Debug: Add some basic styling to ensure CSS is working
document.head.insertAdjacentHTML('beforeend', `
<style>
body {
  background-color: #f0f0f0 !important;
  color: #333 !important;
  font-family: Arial, sans-serif !important;
}
#app {
  min-height: 100vh !important;
}
</style>
`)

render(<App />, document.getElementById('app')!)

// Initialize animations after DOM is ready
document.addEventListener('DOMContentLoaded', initializeAnimations)