var body = document.getElementsByTagName('BODY')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = './bundle.js';

if (script.readyState = 4) {
	console.log("Loaded");
}