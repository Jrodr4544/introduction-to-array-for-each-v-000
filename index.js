// Add your doToElementsInArray() function here:
var doToElementsInArray = (array, callback) => {
  array.forEach(callback);
}

var callback = (element, index, array) => {

}

// Add your changeCompletely() function here:
var changeCompletely = (element, index, array) => {
  array[index] = element + " is element # "+index;  
}