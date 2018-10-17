document.getElementById('submitText').addEventListener('click', () => {
  getJSONTextdata(postTextData);
});

document.getElementById('submitFile').addEventListener('click', () => {
  getJSONFiledata(postFileData);
});

getJSONTextdata = function(callback) {
  var text = document.getElementById('InputText').value;
  callback(text);
};

getJSONFiledata = function(callback) {
  var file = document.getElementById('InputFile').files[0];
  console.log(file);
  callback(file);
};

postTextData = function(data) {
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

postFileData = function(file) {
  fetch('/', {
    method: 'POST',
    body: file,
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