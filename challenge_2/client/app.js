var Generator = function() {
  this.text = undefined;
  document.getElementById('submit').addEventListener('click', () => {
    this.getJSONdata(this.formatData.bind(this));
  });
}

Generator.prototype.getJSONdata = function(callback) {
  this.text = document.getElementById('InputText').value;
  callback(this.text, this.postData);
};

Generator.prototype.getValues = function(cols, obj, output) {
  if (output === undefined) {
    output = cols.join() + '\n';
  }
  var row = [];
  for (var i = 0; i < cols.length; i++) {
    if (obj[cols[i]] !== undefined) {
      row.push(obj[cols[i]]);
    } else {
      row.push('');
    }
  }
  output += row.join() + '\n';
  for (var i = 0; i < obj.children.length; i++) {
    output = this.getValues(cols, obj.children[i], output);
  }
  return output;
}

Generator.prototype.getKeys = function(obj, cols) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] !== 'children') {
      cols.add(keys[i]);
    }
  }
  for (var i = 0; i < obj.children.length; i++) {
    this.getKeys(obj.children[i], cols);
  }
  return cols;
}

Generator.prototype.postData = function(data) {
  fetch('/', {
    method: 'POST',
    body: data,
    headers: {'Content-Type': 'application/json'}
  })
  .catch(err => {
    console.log('unable to post text');
  })
  .then(res => {
    console.log('success');
  })
}

Generator.prototype.formatData = function(text, callback) {
  var obj = JSON.parse(text);
  var cols = new Set;
  cols = Array.from(this.getKeys(obj, cols));
  var output = this.getValues(cols, obj)
  console.log(typeof output);
  var data = {"data": output}
  callback(JSON.stringify(data));
}

var CSV_Generator = new Generator();