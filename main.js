let wordinput = document.querySelector("#word-input")
let currentWord = document.querySelector("#current-word")
let displayScore = document.querySelector("#score")
let timeDisplay = document.querySelector("#time")
let message = document.querySelector("#message")

let time=6
let score=0

//Array of word
const words = ['hat','lucky','river','runaway','hero','cocktail','joke','stubborn','statue','echo','siblings','javascript','master','developer','establishment','nutrition','revolver','investigate','symptom','laughter','magic','space'];

window.addEventListener("DOMContentLoaded",inti)

function inti(){
   showWord(words)
   wordinput.addEventListener("input",startMatch)
   setInterval(countdown,1000)
   setInterval(checkstatus,50)
}

function showWord(words){
 const randomIndex = Math.floor(Math.random()*words.length)
 currentWord.innerHTML = words[randomIndex]
}

function startMatch(){
    if(matchWord()){
    showWord(words)
    wordinput.value=''
    message.innerHTML = "Correct!!"
    score++;
    time=6

    }
    else{
       message.innerHTML="Incorrect!!"
    }
    displayScore.innerHTML=score
}

function matchWord(){
    if(currentWord.innerHTML === wordinput.value){

       return true;
    }
    else{
       return false;
    }
}

function countdown(){
    if(time>0)
    time--
    timeDisplay.innerHTML = time
    
}

function checkstatus(){
    if(time===0)
    { 
        message.innerHTML = "GAME OVER!"
        wordinput.style.display="none"
        score=0
    }
}

