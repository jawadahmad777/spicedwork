// Write a function that expects a string representing a class name to be passed
//  as a parameter. The function should return an array containing all the elements in
//  the document that have the class that was passed in.

function findSelector(selector) {
    var mySelector = document.getElementsByClassName(selector);
    var myArr = [];
    //console.log(mySelector[0]);
    for (var i = 0; i < mySelector.length; i++) {
        myArr.push(mySelector[i]);
    }
    return myArr;
}

console.log(findSelector(".test"));
