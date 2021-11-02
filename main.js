window.onload = () => {
  'use strict'
  navigator?.serviceWorker.register('./sw.js')
  alert('Hello, PWA!')
  setTimeout(() => alert('Hello, PWA!'), 5000)
}
