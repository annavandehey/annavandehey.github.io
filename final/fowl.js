console.log("theMessage is here! (the javascript is here)")


//  the function which handles the input field logic (var is nameField)
function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
    
}
// use an eventlistener for the event
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false);