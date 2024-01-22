

////when Button on screen press

var noOfbuttons=document.querySelectorAll(".drum").length;

for(let i=0;i<noOfbuttons;i++){
        document.querySelectorAll("button")[i].addEventListener("click",function (){

var buttonInnerHtml=this.innerHTML;
makesoundOf(buttonInnerHtml);
//for animation on button
buttonpressed(buttonInnerHtml)

});
}


//for entire web page when keyboard button press
document.addEventListener("keydown" ,function(event){
makesoundOf(event.key);
//for animation on button
buttonpressed(event.key);
});

function makesoundOf(key){

    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
             break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
             break;
        case "j":
             snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

function buttonpressed(button){
    //converting input to class
    var activeButton=document.querySelector("."+button);
    //adding new class to that button presseses as press in css to add new style
    
    activeButton.classList.add("pressed");

    //to remove that animation after a pressed to again come in normal position
    //settimeout takes threeeparameters as function ,time
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    },100);//here 100 means 0.1s
}