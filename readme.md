# Bundle.js Loader
Modern web applications and script files are frequently very large downloads.
While the download is taking place, the end user doesn't see any progress in the browser.

Bundle.js Loader is a simple script that fetches the file, and displays a loading spinner during this process.

Installation
-----

1. Add the loader.js (or loader.min.js) file to the root directory of your project.
2. Include a loading spinner gif in the same directory.
3. Place the following script in the `<BODY>` of the index.html file where the `bundle.js` file is loaded.

```
<script src="./loader.min.js" bundle="./bundle.js" spinner="./spinner.gif" entry="app"></script>
```
