function addElement() {
    var newDiv = document.createElement("div");
    var textNode = document.createTextNode("AWESOME");
    newDiv.style.marginLeft = "20px";
    newDiv.style.marginTop = "100px";
    newDiv.style.fontSize = "200px";
    newDiv.style.position = "fixed";
    newDiv.style.zIndex = "2147483647";
    newDiv.appendChild(textNode);
    console.log(newDiv);
    document.body.appendChild(newDiv);
}
addElement();
