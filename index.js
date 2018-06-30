// Add your doToElementsInArray() function here:
var doToElementsInArray = (array, callback) => {
  array.forEach(callback);
}

var callback = (element, index, array) => {
  array[index] = element + " is element # "+index;
}



// Add your changeCompletely() function here:
var changeCompletely = (array) => {
  
}