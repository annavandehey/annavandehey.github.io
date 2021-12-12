console.log("theMessage is here! (the javascript is here in fowl1)")


//  the function which handles the input field logic (var is nameField)
function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
    
}
var container = document.querySelector(".text");
var speeds ={
    slow: 120,
    normal: 70,
    fast: 40,
}

// Text lines for slidemain.html.... can add classes:["pink"] below if deisred
var container = document.querySelector(".text");

var speeds = {
   pause: 500, //Higher number = longer delay
   slow: 120,
   normal: 90,
   fast: 40,
   superFast: 30
};

var textLines = [
   { speed: speeds.superFast, string: "Oh, I think I'm going to decide after they bring out the complementary bread." },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.fast, string: "I always fill up before my meal even gets here!" },

];


var characters = [];
textLines.forEach((line, index) => {
   if (index < textLines.length - 1) {
      line.string += " "; //Add a space between lines
   }

   line.string.split("").forEach((character) => {
      var span = document.createElement("span");
      span.textContent = character;
      container.appendChild(span);
      characters.push({
         span: span,
         isSpace: character === " " && !line.pause,
         delayAfter: line.speed,
         classes: line.classes || []
      });
   });
});

function revealOneCharacter(list) {
   var next = list.splice(0, 1)[0];
   next.span.classList.add("revealed");
   next.classes.forEach((c) => {
      next.span.classList.add(c);
   });
   var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

   if (list.length > 0) {
      setTimeout(function () {
         revealOneCharacter(list);
      }, delay);
   }
}

//Kick it off
setTimeout(() => {
   revealOneCharacter(characters);   
}, 600)


