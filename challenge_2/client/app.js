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

document.getElementById('downloadFile').addEventListener('click', () => {
  var output = document.getElementById('outputCSV').value;
  fetch('/download', {
    method: 'POST',
    body: JSON.stringify({data: output}),
    headers: {'Content-Type': 'application/json'}
  });
  fetch('/download', {
    method: 'GET',
  }).then(res => {
    window.open('/download?foo=bar&xxx=yyy');
  })
  // }).then(res => {
  //   return res.blob();
  // }).then(data => {
  //   var fr = new FileReader();
  //   fr.readAsText(data);
  //   fr.onload = (
  //     console.log(fr.result)
  //   );
  // })
})