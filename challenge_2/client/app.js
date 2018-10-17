document.getElementById('submitText').addEventListener('click', () => {
  getJSONTextdata(postData);
});

document.getElementById('submitFile').addEventListener('click', () => {
  getJSONFiledata(postData);
});

getJSONTextdata = function(callback) {
  var text = document.getElementById('InputText').value;
  callback(text);
};

getJSONFiledata = function(callback) {
  var file = document.getElementById('InputFile').files[0];
  callback(file);
};

postData = function(data) {
  fetch('/', {
    method: 'POST',
    body: data,
    headers: {'Content-Type': 'application/json'}
  })
  .catch(err => {
    console.log('unable to post text');
  })
  .then(res => {
    return res.json();
  })
  .then(data => {
    document.getElementById('outputCSV').value = (data.text.data);
  })
};