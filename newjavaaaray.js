// Create two arrays
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

// Concatenate the two arrays
var concatenatedArray = array1.concat(array2);

// Get the element to display the contents on the page
var displayElement = document.getElementById("arrayContents");

// Create a string to hold the concatenated array contents
var contentString = "";

// Loop through the concatenated array and add each element to the content string
for (var i = 0; i < concatenatedArray.length; i++) {
  contentString += concatenatedArray[i] + ", ";
}

// Remove the trailing comma and space from the content string
contentString = contentString.slice(0, -2);

// Display the concatenated array contents on the page
displayElement.innerHTML = contentString;
