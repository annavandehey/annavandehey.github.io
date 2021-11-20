console.log("theMessage is here! (the javascript is here)")

const theButton = document.getElementById("firstButton");
let theBody = document.querySelector("body");
let thePara = document.querySelector("p");
// console.log(thePara)

var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};


if onClick=1
    console.log("You clicked the button!");
    theBody.style.backgroundColor = "green";
    theBody.style.color = "white"
    thePara.textContent = "why did you press it?"
   
}
function makeDo2(){
    console.log("You clicked the button!");
    theBody.style.backgroundColor = "green";
    theBody.style.color = "white"
    thePara.textContent = "you presesed the button twice!"
   
}
function makeDo3(){
    console.log("You clicked the button!");
    theBody.style.backgroundColor = "green";
    theBody.style.color = "white"
    thePara.textContent = "you presesed the button thrice!"
   
}
