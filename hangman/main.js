var words = [
    "cat",
    "move",
    "table",
    "return",
    "programm"
];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for ( var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}
var remaingLatters = word.length;
 while(remaingLatters > 0){
     alert(answerArray.join(" "));

 var guess = prompt("Guess letter or push cancel for exit from game.");
 if ( guess === null){
     break;
 } else if (guess.length !== 1){
    alert("Please enter only one letter");
 }
 else{
     for (var j = 0; j < word.length; j++){
         if(word[j] === guess){
             answerArray[j] = guess;
             remaingLatters--;
         }
     }
 }
 }
 alert(answerArray.join(" "));
 alert("Good! Word is " + word);