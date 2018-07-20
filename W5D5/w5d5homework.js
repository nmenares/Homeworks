//  Simple Timeout
function alert(x) {
  console.log(x);
}
window.setTimeout(alert('HAMMERTIME'), 5000);

// Timeout Plus Closure
function hammerTime(time) {
  window.setTimeout(function() {
    console.log(`${time} is hammertime!`);
  }, time);
}
