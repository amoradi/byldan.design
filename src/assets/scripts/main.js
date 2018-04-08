var homeCopy = `<p class='u-red u-large-font'>
      we deliver dynomite design <br /> to communicate fact, fiction and fancy
    </p>     
    <p class='u-pink'>
      for artistics, educationalists, gastronomes,
      <br /> capitalists, melody makers, happenings & others
    </p>      
    <p>created circa 2018, by aaron moradi</p>
`;

var options = {
  strings: [homeCopy],
  typeSpeed: 40,
  startDelay: 3200,
  showCursor: false
}

//var typed = new Typed(".is-moving-text", options);

window.requestTimeout = function(fn, delay) {
  if( !window.requestAnimationFrame       && 
    !window.webkitRequestAnimationFrame && 
    !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
    !window.oRequestAnimationFrame      && 
    !window.msRequestAnimationFrame)
      return window.setTimeout(fn, delay);
      
  var start = new Date().getTime(),
    handle = new Object();
    
  function loop(){
    var current = new Date().getTime(),
      delta = current - start;
      
    delta >= delay ? fn.call() : handle.value = requestAnimationFrame(loop);
  };
  
  handle.value = requestAnimationFrame(loop);
  return handle;
};

function playHomeSlide() {
  blueTakeOver();
  releaseConfetti();
}

function blueTakeOver() {
  requestTimeout(function() { 
    document.querySelector('body').setAttribute('class', 'is-blue');
  }, 4500);

  requestTimeout(function() { 
    document.querySelector('body').setAttribute('class', 'is-white');
  }, 4700);
}

function releaseConfetti() {
  var confettiSettings = { 
    target: 'Confetti',
    size: 4,
    clock: 50,
    max: 80,
    animate: true,
    props: ['square', 'triangle'],
    colors: [[255,0,0],[0, 255, 255],[255, 123, 172], [102, 51, 153], [255, 255, 255]]
  };

  var confetti = new window.ConfettiGenerator(confettiSettings);
  confetti.render();
  // requestTimeout(function() { 
  //   document.querySelector('#Confetti').setAttribute('class', 'is-active');
  //   confetti.render();
  // }, 6000);
}

//window.onload = releaseConfetti;
