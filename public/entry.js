const request = require('superagent');
const $ = require('jquery');

function uploadImage(event) {
  event.preventDefault();

  const file = event.target.image.files[0];
  const formData = new FormData();
  formData.append('image', file);

  request.post('/upload')
    .send(formData)
    .end((err, res) => {
        console.log(err);
        console.log(res);
    })
}

$('#form').bind('submit', uploadImage);