
window.addEventListener('scroll', function (e) {
	// console.log(document.body.scrollTop);
  //
  var scroll = document.body.scrollTop;
  var parallaxAll = document.getElementsByClassName('parallax');
   for (var i = 0; i<parallaxAll.length; i++){
    var speed = parallaxAll[i].getAttribute("scroll-speed");
    var posY = - (scroll*speed);
    parallaxAll[i].style.backgroundPosition = '0px '+posY+'px';
  }


})


/*
(function($){
  $.fn.parallax = function(options){
    var $$ = $(this);
    offset = $$.offset();
    var defaults = {
      'start': 0,
      'stop': offset.top + $$.height(),
      'coeff': 0.95
    };
    var opts = $.extend(defaults, options);
    return this.each(function(){
      $(window).bind('scroll', function() {
        windowTop = $(window).scrollTop();
        if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
          newCoord = windowTop * opts.coeff;
          $$.css({
              'background-position': '0 '+ newCoord + 'px'
          });
        }
      });
    });
  };
})(jQuery);

// call the plugin
$('.section').parallax({ 'coeff':-0.65 });
$('.section .inner').parallax({ 'coeff':1.15 });*/
