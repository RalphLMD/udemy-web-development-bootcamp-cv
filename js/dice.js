var randomNumber = Math.floor(Math.random() * 6) + 1;
var imageSource = "images/dice" + randomNumber + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";

var image = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image.setAttribute("src", imageSource)
image2.setAttribute("src", imageSource2)

if (randomNumber > randomNumber2) {
   document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber == randomNumber2){
   document.querySelector("h1").innerHTML = "🚩Draw!🚩";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}

function refreshPage(){
    window.location.reload();
}