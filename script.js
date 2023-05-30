let playerScore = 0;
let computerScore = 0;
function getComputerChoice()
{
    let num = Math.floor(Math.random() * 3);

    if(num === 0)
    {
        return "rock";
    }
    else if(num == 1)
    {
        return "paper";
    }
    else{
        return "scissors";
    }

}

function playRound(playerSelection, computerSelection)
{
    let ps = playerSelection.toLowerCase();
    if(ps === computerSelection)
    {
        return "Tie Game!";
    }
    else if(ps === "rock")
    {
        if(computerSelection === "paper")
        {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${ps}`;
        }
        else if(computerSelection === "scissors")
        {
            playerScore++;
            return `You Win! ${ps} beats ${computerSelection}`;
            
        }
    }
    else if(ps === "paper")
    {
        if(computerSelection === "scissors")
        {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${ps}`;
        }
        else if(computerSelection === "rock")
        {
            playerScore++;
            return `You Win! ${ps} beats ${computerSelection}`;
            
        }
    }
    else if(ps === "scissors")
    {
        if(computerSelection === "rock")
        {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${ps}`;
        }
        else if(computerSelection === "paper")
        {
            playerScore++;
            return `You Win! ${ps} beats ${computerSelection}`;
            
        }
    }
}

function game()
{
    
for(let i = 0; i < 5; i++)
{
    let playerSelection = prompt("Enter rock, paper, or scissors");
    console.log(playRound(playerSelection, getComputerChoice()));
}
if(playerScore > computerScore)
{
    resetScore();
    return "You Win!";
}
else if(playerScore < computerScore){
    resetScore();
    return "You Lose :(";
}
else {
    resetScore();
    return "Draw!";
}
}

function resetScore()
{
    playerScore = 0;
    computerScore = 0;
}
