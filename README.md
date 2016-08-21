Express Uploading Image Demo
============================

Instead of using form to upload an image, we can also use superagent to upload it.

```
npm install -g webpack
npm install

webpack
node index.js
```

Then open your browser to open <http://localhost:3000/>, and you can upload an image now (note only image files can be selected).

The uploaded image will be inside the `uploaded-images` directory of server side, with a timestamp added in the file name.

Note: Don't forget to run `webpack` if you modify any js code under `public`.

Articles
-------

- Uploading files with superagent in the browser:  <https://blog.gaya.ninja/articles/uploading-files-superagent-in-browser/>