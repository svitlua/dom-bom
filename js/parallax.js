
window.addEventListener('scroll', function (e) {
  var scroll = document.body.scrollTop;
  var parallaxAll = document.getElementsByClassName('parallax');
   for (var i = 0; i<parallaxAll.length; i++){
    var speed = parallaxAll[i].getAttribute("scroll-speed");
    var posY = - (scroll*speed);
    parallaxAll[i].style.backgroundPosition = '0px '+posY+'px';
  }
})

