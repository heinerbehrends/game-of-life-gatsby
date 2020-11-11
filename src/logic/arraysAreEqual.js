export default function arraysAreEqual(array, array2) {
  // if the other array is a falsy value, return
  if (!array2) return false

  // compare lengths - can save a lot of time
  if (array.length != array2.length) return false

  for (var i = 0, l = array.length; i < l; i++) {
    // Check if we have nested arrays
    if (array[i] instanceof Array && array2[i] instanceof Array) {
      // recurse into the nested arrays
      if (!arraysAreEqual(array[i], array2[i])) return false
    } else if (array[i] != array2[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false
    }
  }
  return true
}
