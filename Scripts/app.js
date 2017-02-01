/* javascript lives here */

console.log("App Started");

var firstHeading = document.getElementById("firstHeading");

console.log(firstHeading.textContent);

var firstParagraph = document.getElementById("firstParagraph");

var myContent = "It was sunny day in Florida";

firstParagraph.textContent = myContent;









// create a reference to the button on the page (index.html)
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click event and call the Click function
clickMeButton.addEventListener("click", Click);

// click function - used as an event handler
function Click() {
 console.log("clicked!");
}
