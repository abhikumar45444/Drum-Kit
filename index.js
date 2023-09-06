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

for (let i = 0; i < drumButtons.length; i++) {
    let drumButton = drumButtons[i];
    drumButton.addEventListener("click", function(){
        // so because the event is generated we can use this keyword to identify the button on which event is triggered and extract its innerHTML to play sound
        let button = this.innerHTML;

        playSound(button);
    })
}


// for keyboard event we can add eventlistener to the document itself so whenever the key pressed we can handle it.
document.addEventListener("keydown", function(event){
    let key = event.key;
    
    playSound(key);
})


// this function will play sound according the button pressed or key pressed
function playSound(button)
{
    switch(button)
        {
            case "w":{
                let mySound = new Audio(drumSounds  [button]);
                mySound.currentTime = 0;
                mySound.play();
                break;
            }
            case "a":{
                let mySound = new Audio(drumSounds  [button]);
                mySound.currentTime = 0;
                mySound.play();
                break;
            }
            case "s":{
                let mySound = new Audio(drumSounds  [button]);
                mySound.currentTime = 0;
                mySound.play();
                break;
            }
            case "d":{
                let mySound = new Audio(drumSounds  [button]);
                mySound.currentTime = 0;
                mySound.play();
                break;
            }
            case "j":{
                let mySound = new Audio(drumSounds  [button]);
                mySound.currentTime = 0;
                mySound.play();
                break;
            }
            case "k":{
                let mySound = new Audio(drumSounds  [button]);
                mySound.currentTime = 0;
                mySound.play();
                break;
            }
            case "l":{
                let mySound = new Audio(drumSounds  [button]);
                mySound.currentTime = 0;
                mySound.play();
                break;
            }

            default :{
                console.log("incorrect button");
                break;
            }
    
        }
}