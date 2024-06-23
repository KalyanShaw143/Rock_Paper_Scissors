let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw!!");
    msg.innerText = "Game-Draw..";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! --> Your ${userChoice} beats ${compChoice}`;
    
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!!!");
        msg.innerText = `You Lose!!! --> ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("User choice = ",userChoice);

    const compChoice = genCompChoice();
    console.log("Comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
       let userWin = true;
       if(userChoice === "rock"){
        // scissor,paper
        userWin = compChoice === "paper" ? false : true;
       }
       else if(userChoice === "paper"){
        // rock,scissor
        userWin = compChoice === "scissors" ? false : true;
       }
       else{
        //rock,paper
        userWin = compChoice === "rock" ? false : true;
       }
       showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("Choiced was clicked", userChoice);
        playGame(userChoice);
    })
})

