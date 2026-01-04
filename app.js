let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3); 
    return options[randIdx];

};
const drawGame = () => {
     msg.innerText ="game was draw. Play again.";
     msg.style.backgroundColor ="blue";
};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
       
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
       
        msg.innerText =`you lose  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};

const playGame =(userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
      console.log("computer choice =",compChoice);
      if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        }
        else if (userChoice ==="paper"){

            userWin = compChoice ==="scissor" ? false : true;
        } else {
        userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choices)=> { 
    choices.addEventListener("click",() => {
        const userChoice = choices.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});