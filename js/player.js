var width = window.innerWidth;
var height = window.innerHeight;
var cactus_id = 0;

document.getElementById('player').style.top = parseInt(height/2)+'px';
document.getElementById('player').style.left = parseInt(width/2)+'px';

document.body.onkeydown = function (e) {
	var el = document.getElementById('player');

  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_UP = 38;
  var KEYCODE_DOWN = 40;
  var KEYDOWN_SPACE = 32;
  var KEYDOWN_ENTER = 13;

  if (e.keyCode === KEYCODE_LEFT && parseInt(el.style.left)>0) {
    el.style.left = (parseInt(el.style.left) - 10) + 'px';
  } else if (e.keyCode === KEYCODE_RIGHT &&parseInt(el.style.left)<width-15) {
  	el.style.left = (parseInt(el.style.left) + 10) + 'px';
  } else if (e.keyCode === KEYCODE_UP && parseInt(el.style.top)>0){
  	el.style.top = (parseInt(el.style.top) - 10) + 'px';
  } else if (e.keyCode === KEYCODE_DOWN && parseInt(el.style.top)<height-15){
  	el.style.top = (parseInt(el.style.top) + 10) + 'px';
  }else if(e.keyCode === KEYDOWN_SPACE || e.keyCode === KEYDOWN_ENTER){
    console.log('fire!');
    var cactus_img = document.createElement("img");
    cactus_img.setAttribute("src", "images/cactus.png");
    var cactus_div = document.createElement("div");
    cactus_div.setAttribute("class", "cactus");
    cactus_div.setAttribute("id", cactus_id);
    cactus_div.style.left = (parseInt(el.style.left) - 10) + 'px';
    cactus_div.style.top = (parseInt(el.style.top) - 10) + 'px'
    document.body.appendChild(cactus_div);
    document.getElementById(cactus_id).appendChild(cactus_img);
    cactus_id++;
  }
}
