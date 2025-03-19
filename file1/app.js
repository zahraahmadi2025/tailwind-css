const result = document.getElementById("result");
const number = document.getElementById("number");
const btn = document.getElementById("btn-play");

function showingResult(){
    let userChoice = +number.value;
    let computerChoice = Math.random()*100;

if(userChoice > computerChoice){
result.textContent ="You won!"
console.log("userchoice" ,userChoice);
console.log("computerchoice" ,computerChoice);
}
else if(computerChoice > userChoice){
    result.textContent ="computer won!"
    console.log("userchoice" ,userChoice);
    console.log("computerchoice" ,computerChoice);
}
else{
result.textContent ="you hava chosen equal numbers";
console.log("userchoice" ,userChoice);
console.log("computerchoice" ,computerChoice);
}
}
btn. addEventListener("click",showingResult);