window.onload = () => {
  'use strict'
  navigator?.serviceWorker.register('./sw.js')
  setTimeout(() => alert('Hello, PWA!'), 5000)
}
