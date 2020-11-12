export default function arraysAreEqual(array, array2) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] instanceof Array && array2[i] instanceof Array) {
      if (!arraysAreEqual(array[i], array2[i])) return false
    } else if (array[i] !== array2[i]) {
      return false
    }
  }
  return true
}
