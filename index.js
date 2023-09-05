let drumButtons = document.querySelectorAll(".drum");

let drumSounds = {
    w:'./sounds/tom-1.mp3',
    a:'./sounds/tom-2.mp3',
    s:'./sounds/tom-3.mp3',
    d:'./sounds/tom-4.mp3',
    j:'./sounds/snare.mp3',
    k:'./sounds/crash.mp3',
    l:'./sounds/kick-bass.mp3',
}

drumButtons.forEach(button => {
    button.addEventListener("click", function(){
        
        for(let eachSound in drumSounds)
        {
            if(button.innerHTML == eachSound)
            {
                console.log(drumSounds[eachSound]);
                let mySound = new Audio(drumSounds[eachSound]);
                mySound.currentTime = 0;
                mySound.play();
            }
        }
    })
})

document.addEventListener("keydown", function(event){
    
    if(event.key == "w")
    {
        let mySound = new Audio(drumSounds[event.key]);
        mySound.currentTime = 0;
        mySound.play();
    }
    else if(event.key == "a")
    {
        let mySound = new Audio(drumSounds[event.key]);
        mySound.currentTime = 0;
        mySound.play();
    }
    else if(event.key == "s")
    {
        let mySound = new Audio(drumSounds[event.key]);
        mySound.currentTime = 0;
        mySound.play();
    }
    else if(event.key == "d")
    {
        let mySound = new Audio(drumSounds[event.key]);
        mySound.currentTime = 0;
        mySound.play();
    }
    else if(event.key == "j")
    {
        let mySound = new Audio(drumSounds[event.key]);
        mySound.currentTime = 0;
        mySound.play();
    }
    else if(event.key == "k")
    {
        let mySound = new Audio(drumSounds[event.key]);
        mySound.currentTime = 0;
        mySound.play();
    }
    else if(event.key == "l")
    {
        let mySound = new Audio(drumSounds[event.key]);
        mySound.currentTime = 0;
        mySound.play();
    }
})