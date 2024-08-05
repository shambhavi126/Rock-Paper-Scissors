let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "#BDBDBD";
    }else{
        /*compScore++;
        compScorePara.innerText = compScore;*/
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
    }
}

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});