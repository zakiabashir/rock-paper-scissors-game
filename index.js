//=================================== ROCK,PAPER,SCEISOR GAME =====================================//

//============================ HTML ACCESS OPTION IN JS =========================================

let option = ["rock","papper","scissors"];

let rock = document.querySelector(".rock");
let papper = document.querySelector(".papper");
let scissors = document.querySelector(".scissors");

let youWin = document.querySelector("#win-status-user");
let compWin = document.querySelector("#win-status-computer");
let draw = document.querySelector("#draw");

let userScore = document.querySelector("#user-score");
let computerScore = document.querySelector("#comp-score");

let userScoreCount = 0;
let computerScoreCount  = 0;

let computerSelection = document.querySelector("#computer-select");

let resetGame = document.querySelector("#reset-game");

//=================================== ROCK OPTION ======================================

rock.addEventListener(`click`, ()=>{

  if(computerScoreCount < 10 && userScoreCount < 10){

  let compOption = option[Math.floor(Math.random()*3)];
 
  if(compOption==="rock"){
    draw.classList.remove("hide");
    setTimeout(()=>{
    draw.classList.add("hide");  
    },2000);

    computerSelection.innerText = "COMPUTER CHOOSE ROCK:";
    computerSelection.classList.remove("hide");
    setTimeout(()=>{
    computerSelection.classList.add("hide");  
    },2000);


  }else if(compOption==="papper"){
    compWin.classList.remove("hide");
    setTimeout(()=>{
    compWin.classList.add("hide");  
    },2000);

    computerSelection.innerText = "COMPUTER CHOOSE PAPPER:";
    computerSelection.classList.remove("hide");
    setTimeout(()=>{
    computerSelection.classList.add("hide");  
    },2000);

    computerScoreCount = computerScoreCount + 1;
    computerScore.innerText = computerScoreCount;

  }else{

    youWin.classList.remove("hide");
    setTimeout(()=>{
    youWin.classList.add("hide");  
    },2000);

    computerSelection.innerText = "COMPUTER CHOOSE SCISSORS:";
    computerSelection.classList.remove("hide");
    setTimeout(()=>{
    computerSelection.classList.add("hide");  
    },2000);

   userScoreCount = userScoreCount + 1;
   userScore.innerText = userScoreCount;

  }
}else if(computerScoreCount===10){
    alert("COMPUTER WIN THIS GAME:");
}else{
  alert("YOU WIN THIS GAME:" +"\n"+"\n"+ "IF YOU PLAYING GAME CONTINUE THEN PRESS RESET BUTTON:");
}
})

//======================================= PAPPER OPTION =========================================

papper.addEventListener(`click`, ()=>{

  if(computerScoreCount<10 && userScoreCount<10){

  let compOption = option[Math.floor(Math.random()*3)];
  if(compOption==="papper"){
    draw.classList.remove("hide");
    setTimeout(()=>{
    draw.classList.add("hide");  
    },2000);

    computerSelection.innerText = "COMPUTER CHOOSE PAPPER:";
    computerSelection.classList.remove("hide");
    setTimeout(()=>{
    computerSelection.classList.add("hide");  
    },2000);

  }else if(compOption==="scissors"){
    compWin.classList.remove("hide");
    setTimeout(()=>{
    compWin.classList.add("hide");  
    },2000);

    computerSelection.innerText = "COMPUTER CHOOSE SCISSORS:";
    computerSelection.classList.remove("hide");
    setTimeout(()=>{
    computerSelection.classList.add("hide");  
    },2000);

    computerScoreCount = computerScoreCount + 1;
    computerScore.innerText = computerScoreCount;

  }else{
    
    youWin.classList.remove("hide");
    setTimeout(()=>{
    youWin.classList.add("hide");  
    },2000);

    computerSelection.innerText = "COMPUTER CHOOSE ROCK:";
    computerSelection.classList.remove("hide");
    setTimeout(()=>{
    computerSelection.classList.add("hide");  
    },2000);

    userScoreCount = userScoreCount + 1;
    userScore.innerText = userScoreCount;

  }
}else if (computerScoreCount===10){
  alert("COMPUTER WIN THIS GAME:");
}else{
  alert("YOU WIN THIS GAME: "+"\n"+"\n"+ "IF YOU PLAYING GAME CONTINUE THEN PRESS RESET BUTTON:");
}
})

//======================================= SCISSORS OPTION============================================

scissors.addEventListener(`click`, ()=>{

  if(computerScoreCount<10 && userScoreCount<10){

  let compOption = option[Math.floor(Math.random()*3)];

  if(compOption==="scissors"){
    draw.classList.remove("hide");
    setTimeout(()=>{
    draw.classList.add("hide");  
    },2000);

    computerSelection.innerText = "COMPUTER CHOOSE SCISSORS:";
    computerSelection.classList.remove("hide");
    setTimeout(()=>{
    computerSelection.classList.add("hide");  
    },2000);

  }else if(compOption==="rock"){
    compWin.classList.remove("hide");
    setTimeout(()=>{
    compWin.classList.add("hide");  
    },2000);

    computerSelection.innerText = "COMPUTER CHOOSE ROCK:";
    computerSelection.classList.remove("hide");
    setTimeout(()=>{
    computerSelection.classList.add("hide");  
    },2000);

    computerScoreCount = computerScoreCount + 1;
    computerScore.innerText = computerScoreCount;


  }else{

    youWin.classList.remove("hide");
    setTimeout(()=>{
    youWin.classList.add("hide");  
    },2000);

    computerSelection.innerText = "COMPUTER CHOOSE PAPPER:";
    computerSelection.classList.remove("hide");
    setTimeout(()=>{
    computerSelection.classList.add("hide");  
    },2000);

    userScoreCount = userScoreCount + 1;
    userScore.innerText = userScoreCount;

  }
}else if (computerScoreCount===10){
  alert("COMPUTER WIN THIS GAME:");
}else{
  alert("YOU WIN THIS GAME:" +"\n"+"\n"+ "IF YOU PLAYING GAME CONTINUE THEN PRESS RESET BUTTON:");
}
})

//================================ RESET GAME OPTION ======================================

resetGame.onclick = ()=>{
  userScoreCount = 0;
  userScore.innerText = userScoreCount;

  computerScoreCount = 0;
  computerScore.innerText = computerScoreCount;
}


