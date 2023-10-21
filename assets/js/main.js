const clown = document.querySelector('#clown')
const scream = document.querySelector('#scream')
const boy = document.querySelector('#boy')

document.querySelector('#scary').addEventListener('click', scary);
document.querySelector('#scarier').addEventListener('click', scarier);
document.querySelector('#scariest').addEventListener('click', scariest);


function scary(){
    scream.classList.add('hidden')
    boy.classList.add('hidden')
    clown.classList.toggle('hidden')

}
function scarier(){
    clown.classList.add('hidden')
    boy.classList.add('hidden')
    scream.classList.toggle('hidden')

}
function scariest(){
    scream.classList.add('hidden')
    clown.classList.add('hidden')
    boy.classList.toggle('hidden')

}

function sounda(){
    var snd = new Audio('/assets/audio/clown-darkness.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundb(){
    var snd = new Audio('/assets/audio/scream-eat-you-alive.wav')//wav is also supported
    snd.play()//plays the sound
}
function soundc(){
    var snd = new Audio('/assets/audio/boy-scream.wav')//wav is also supported
    snd.play()//plays the sound
}