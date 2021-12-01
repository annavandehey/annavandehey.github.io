console.log("theMessage is here! (the javascript is here)")


//  the function which handles the input field logic
function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
    
    if (nameField.length < 3) {
        result.textContent = 'Username must contain at least 3 characters';
        //alert('Username must contain at least 3 characters');
    } else {
        //alert(nameField);
        result.textContent = 'Welcome ' + nameField +'. We are so glad to meet you.'
        var myobj = document.getElementById("nameForm");
        var newobj = document.getElementById("text1");
        var newobj2 = document.getElementById("text2");
        myobj.remove();
        newobj.remove();
        newobj2.remove();
        
    }
}
// use an eventlistener for the event
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false);