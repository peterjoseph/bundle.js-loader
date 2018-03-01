// Setup body and script objects
let body = document.getElementsByTagName('BODY')[0];
let script = document.createElement('script');
script.type = 'text/javascript';

// Push loading spinner to screen
body.innerHTML +=
	'<div style="position:absolute; z-index:100; top:50%; left: 50%; transform: translate(-50%, -50%);">' + 
		'<img src="' + document.currentScript.getAttribute('spinner') + '" alt="Loading">' + 
	'</div>';

// Create new script request
let xhr = new XMLHttpRequest(), method = "GET", url = document.currentScript.getAttribute('bundle');
xhr.responseType = 'blob';

// Load the script
xhr.open(method, url, true);
xhr.onload = function () {
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
	script.src = URL.createObjectURL(xhr.response);
	body.appendChild(script);
  }
};
xhr.send();