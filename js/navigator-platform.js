
var navigatorMessageMap = {
  'android': 'android',
  'linux': 'linux',
  'mac': 'macos',
  'iphone': 'macos',
  'ipod': 'macos',
  'ipad':'macos',
  'win': 'windows',
};

var os = "no-os";
var message;
var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
	key = key.toLowerCase();
	var version = navigatorMessageMap[key];
  if (platform.includes(key)){
    os = navigatorMessageMap[key];
    message = "Download " + os.toUpperCase() + " version of our app";
	}
}

if (os !== "no-os"){
  document.getElementById("download-message").innerHTML = message;
} else {
  document.getElementById("download-message").innerHTML = "We are sorry. No version of our app is available for your system";
}
