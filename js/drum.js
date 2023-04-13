var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
} 

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})  

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio('/sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('/sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('/sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('/sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var snare = new Audio('/sounds/snare.mp3');
            snare.play();
        break;

        case "k":
            var crash = new Audio('/sounds/crash.mp3');
            crash.play();
        break;

        case "l":
            var kick = new Audio('/sounds/kick-bass.mp3');
            kick.play();
        break;

        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}

// $0.addEventListener("click", function (){
//     alert("You`ve been hacked!")});

// Constructor Function

// function ObjectExample(name, age, gender, languages){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.languages = languages;
// }

// var objectExample = new ObjectExample("Ralph", 11, "Male", ["English", "Italian", "Japanese"]); 
// console.log(objectExample.languages);

// // Callback - Simplified Example
// function anotherAddEventListener(typeOfEvent, callback) {
    
//     Detect Event Code...

//     var eventThatHappened = {
//         eventType: "keypress",
//         key: "p",
//         durationOfKeypress: 2
//     }

//     if (eventThatHappened.eventType === typeOfEvent) {
//         callback(eventThatHappened);
//     }
// }

// anotherAddEventListener("keypress", function(event){
//     console.log(event);
// });

// document.addEventListener("keypress", function(event){
//     console.log(event);
// });