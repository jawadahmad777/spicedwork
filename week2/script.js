// Write a function that expects a string representing a selector to be passed as a parameter.
// The function should find all the elements in the document that match the selector
// and change their style so that the text they contain is italic, underlined, and bold.

function findSelector(selector) {
    var mySelector = document.querySelectorAll(selector);
    for (var i = 0; i < mySelector.length; i++) {
        mySelector[i].style.fontWeight = "bold";
        mySelector[i].style.textDecoration = "underline";
        mySelector[i].style.fontStyle = "italic";
    }
}
findSelector(".test");
