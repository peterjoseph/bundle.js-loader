# Bundle.js Loader
Modern web applications often require very large initial downloads of javascript bundle files.
While the file is being downloaded, the end user doesn't know if the page is loading in the browser.

Bundle.js Loader is a script that fetches the file, and displays a loading spinner during this process.

Installation
-----

1. Add the loader.js (or load.min) file to the root directory of your project.
2. Include your loading spinner gif in the same directory.
3. Place the following script in the `<BODY>` of the index.html file where the `bundle.js` file is loaded.

```
<script src="./loader.min.js" bundle="./bundle.js" spinner="./spinner.gif"></script>
```