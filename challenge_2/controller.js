var Generator = function(obj) {
  this.text = this.formatData(obj);
}

Generator.prototype.getValues = function(cols, obj, output) {
  if (output === undefined) {
    output = cols.join() + '\r\n';
  }
  var row = [];
  for (var i = 0; i < cols.length; i++) {
    if (obj[cols[i]] !== undefined) {
      row.push(obj[cols[i]]);
    } else {
      row.push('');
    }
  }
  output += row.join() + '\r\n';
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

Generator.prototype.formatData = function(obj) {
  var cols = new Set;
  cols = Array.from(this.getKeys(obj, cols));
  var output = this.getValues(cols, obj)
  var data = {"data": output};
  return data;
}

module.exports = Generator;