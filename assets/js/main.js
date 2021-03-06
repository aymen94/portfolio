'use strict';
var change = document.querySelectorAll('H2.hide');
var i = 0;

function switchText() {
  change[i].classList.remove('show');
  i = i % (change.length - 1);
  change[++i].classList.add('show');
}

window.addEventListener('load', function () {
  if ('serviceWorker' in navigator)
    try {
      navigator.serviceWorker
        .register('sw.min.js', { scope: './' })
        .then(function (reg) {
          console.info('Service worker registration success');
        });
    } catch (err) {
      console.error(err);
    }
  else console.log('no serviceWorker');

  setInterval(switchText, 1500);
});