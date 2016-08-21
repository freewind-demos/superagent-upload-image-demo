const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
app.use(fileUpload());

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

app.post('/upload', function(req, res) {
  const imageFile = req.files.image;
  const targetName = generateTargetName(imageFile.name);
  imageFile.mv('./uploaded-images/' + targetName, function(err) {
    if(err) return res.status(500).send('Error happens when uploading');
    res.status(201).send('Uploaded successfully!');
  })
});

function generateTargetName(fileName) {
  const extName = path.extname(fileName);
  const prefixName = path.basename(fileName, extName);
  const timestamp = Date.now();
  return prefixName + '-' + timestamp + extName;
}

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000');
});