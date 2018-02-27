let body = document.getElementsByTagName('BODY')[0];
let script = document.createElement('script');
script.type = 'text/javascript';
script.src = document.currentScript.getAttribute('bundle');

script.onloadstart() = function() {
	console.log("loading");
}

script.onload() = function() {
	console.log("loaded");
	body.appendChild(script);
};