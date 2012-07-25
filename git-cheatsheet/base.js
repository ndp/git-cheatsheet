function next(a, val) {
  var index = a.indexOf(val);
  if (index == -1 || index == (a.length - 1)) {
    return a[0];
  } else {
    return a[index + 1]
  }
}

function prev(a, val) {
  var index = a.indexOf(val);
  if (index <= 0) {
    return a[a.length - 1];
  } else {
    return a[index - 1]
  }
}


