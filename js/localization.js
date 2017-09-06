// $<prefix> == DOMElement
var $save = document.querySelector('html body button#save')
changeMessage();

$save.addEventListener('click', function(){
  //check which button is checked, get is's value.tolowercase
  var lang_buttons = document.getElementsByTagName('input');
  var selected_lang;
  for (var i = 0; i < lang_buttons.length; i++) {
    if (lang_buttons[i].type === 'radio' && lang_buttons[i].checked) {
        selected_lang = lang_buttons[i].value;
        break;
    }
  }
  applyLanguage(selected_lang);
  changeMessage();
});

function applyLanguage(lang) {
  localStorage.setItem("lang", lang);
}

 function getCurrentLanguage() {
	var defaultLanguage = 'ua';
	if (localStorage.getItem("lang")){
    defaultLanguage = localStorage.getItem("lang");
  }
  return defaultLanguage;
}

function changeMessage(){
  var currentLang = getCurrentLanguage();
    //making all text invisible
  var langVisible = document.getElementsByClassName('visible');
  while (langVisible[0]) {
  	langVisible[0].classList.remove('visible');
  }

  //making text in currentLang visible
  var langEls = document.getElementsByClassName('lang-' + currentLang);
  for (var i=0; i<langEls.length; i++) {
  	var langEl = langEls[i];
    langEl.classList.add('visible');
  }
}
