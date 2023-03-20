let options = document.getElementsByClassName("option");
let score = undefined;
let button = document.getElementById("submitButton");
let scoreSpan = document.getElementById("scoreSpan");


for(option of options){
    option.addEventListener("click", select);
}

button.addEventListener("click", submit);

function select(event){
    let target = event.currentTarget;
    for(option of options){
        option.classList.remove("selected");
    }
    target.classList.add("selected");
    score = target.innerHTML;
    scoreSpan.innerText = score;
}

function submit(){
    let currentSection = document.getElementById("optionsSection");
    let endSection =  document.getElementById("thanksSection");
    if(score != undefined){
        currentSection.style.display = "none";
        endSection.style.display = "flex";
    }
}
