const choices = ["rock", "paper", "scissors"] ;

function getComputerChoice(choices) {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return  computerChoice
};

function getPlayerChoice(choices) {
    const playerChoice = prompt("Rock, Paper or Scissors? ");
    if (choices.includes(playerChoice.toLowerCase()) == false) {
        console.log(`Choice "${playerChoice}" is invalid. Please, select one of the following: ${choices}`)
    }
    return playerChoice.toLowerCase()
};

function singleRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case (playerSelection == computerSelection):
            return "Draw"

        case (playerSelection == "rock" && computerSelection == "scissors"):
            return "Player wins! Rock beats scissors!"

        case (playerSelection == "rock" && computerSelection == "paper"):
            return "Computer wins! Paper beats rock!"

        case (playerSelection == "paper" && computerSelection == "rock"):
            return "Player wins! Paper beats rock!"

        case (playerSelection == "paper" && computerSelection == "scissors"):
            return "Computer wins! Scissors beats paper!"

        case (playerSelection == "scissors" && computerSelection == "paper"):
            return "Player wins! Scissors beats paper!"

        case (playerSelection == "scissors" && computerSelection == "rock"):
            return "Computer wins! Rock beats scissors!"
    }
}