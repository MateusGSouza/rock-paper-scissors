function getComputerChoice(choices) {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return  computerChoice
};

function getPlayerChoice(choices) {
    const playerChoice = prompt("Rock, Paper, Scissors! ");

    if (choices.includes(playerChoice.toLowerCase()) == false) {
        console.log(`Choice "${playerChoice}" is invalid. Please, select one of the following: ${choices}`)
    };

    return playerChoice.toLowerCase()
};

async function singleRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == computerSelection):
            return ["Draw!"];
            break;

        case (playerSelection == "rock" && computerSelection == "scissors"):
            return ["Player wins! Rock beats scissors!", "player"];
            break;

        case (playerSelection == "rock" && computerSelection == "paper"):
            return ["Computer wins! Paper beats rock!", "computer"];
            break;

        case (playerSelection == "paper" && computerSelection == "rock"):
            return ["Player wins! Paper beats rock!", "player"];
            break;

        case (playerSelection == "paper" && computerSelection == "scissors"):
            return ["Computer wins! Scissors beats paper!", "computer"];
            break;

        case (playerSelection == "scissors" && computerSelection == "paper"):
            return ["Player wins! Scissors beats paper!", "player"];
            break;

        case (playerSelection == "scissors" && computerSelection == "rock"):
            return ["Computer wins! Rock beats scissors!", "computer"];
            break;
    }
};


async function main() {
    const choices = ["rock", "paper", "scissors"] ;

    const rounds = parseInt(prompt("Hello! Let's play Rock, Paper, Scissors. How many rounds do you want to play? "));

    for (let tries = 0; tries < 3; tries++) {

        if (!rounds) {
            console.warn("Please insert a valid number of rounds")
        };
        if (tries == 3) {
            return "Invalid \"rounds\" input. Execution interrupted"
        } 
    };
    

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {

        const computerChoice = getComputerChoice(choices);
        const playerChoice = getPlayerChoice(choices);
        let roundResult = await singleRound(playerChoice, computerChoice);

        console.log(roundResult[0])

        if ( roundResult[1] == "computer" ) {
            computerScore++
        } else if ( roundResult[1] == "player" ) {
            playerScore++
        };
    };

    if ( computerScore == playerScore ) {
        console.log("It's a draw! You both win!");
    } else if ( computerScore < playerScore ) {
        console.log(`Player wins with a score of ${playerScore} v ${computerScore}`);
    } else {
        console.log(`Computer wins with a score of ${computerScore} v ${playerScore}`);
    };
};

main();