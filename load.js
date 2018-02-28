let body = document.getElementsByTagName('BODY')[0];
let script = document.createElement('script');
script.type = 'text/javascript';

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