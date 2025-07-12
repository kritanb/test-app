

let newButton = document.getElementById("new");
let text = "question";
const newFlashCard = document.createElement("div");

function newFlash(answer){
    newFlashCard;
    newFlashCard.innerText = document.getElementById(text).value;
    document.body.appendChild(newFlashCard);
}

function flip(){
    text = "answer";
    newFlashCard.innerText = document.getElementById(text).value;
}

