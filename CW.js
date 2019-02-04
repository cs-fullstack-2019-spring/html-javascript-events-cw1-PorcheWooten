// When the User clicks the reset button, any text already in the textarea should be cleared/erased
var something = "Whatever I want";
var idx = 0;

var textArea= document.getElementById("typer");
var btn = document.querySelector('button');
btn.onclick = function (e) {
    console.log("button clicked");
    textArea.value="";
    idx=0

};

// As the User types, make it so they always enter a set sentence no matter what letters they actually type (each to the User presses a key, your JavaScript should add the next character from your hardcoded sentence to the textarea just as if they typed it).
textArea.onkeydown= function (e) {
    console.log("something typed");
    e.preventDefault();
    textArea.value+= something[idx];
    idx++
};