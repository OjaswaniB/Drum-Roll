// button was pressed


var x=document.querySelectorAll(".drum").length;
for(var i=0; i<x ;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",s);
}

function s(){

    var n= this.innerHTML;
    soundcheck(n);
    animate(n);
}

//key was pressed


document.addEventListener("keypress", function(event){

soundcheck(event.key);
animate(event.key);
}

);

function soundcheck(key){

    switch(key){

        case 'w':
            var audio= new Audio("tom-1.mp3");
                audio.play();
        break;

        
        case 'a':
            var audio= new Audio("tom-2.mp3");
                audio.play();
        break;

        
        case 's':
            var audio= new Audio("tom-3.mp3");
                audio.play();
        break;

        
        case 'd':
            var audio= new Audio("tom-4.mp3");
                audio.play();
        break;

        
        case 'j':
            var audio= new Audio("crash.mp3");
                audio.play();
        break;

        
        case 'k':
            var audio= new Audio("snare.mp3");
                audio.play();
        break;

        
        case 'l':
            var audio= new Audio("kick-bass.mp3");
                audio.play();
        break;

        default: console.log()
    }
       
}

function animate(currentKey){

    var activekey= document.querySelector("."+currentKey)
    activekey.classList.add("pressed");

    setTimeout( function(){activekey.classList.remove("pressed")}, 100);

}

   //this.style.color="white"; 