window.onload = () => {
  'use strict'
  navigator?.serviceWorker.register('./sw.js')
}
