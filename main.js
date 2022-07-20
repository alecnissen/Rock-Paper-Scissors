// getting random elements from the array of choices

let valuesArray = ['Rock', 'Paper', 'Scissors']; 



function getComputerChoice () { 
    let value = valuesArray[Math.floor(Math.random() * valuesArray.length)]; 
    return value;   
} 

// function playRound(playerSelection, computerSelection) { 
//     switch (computerSelection) { 
//         case 'paper'

        // case value2:
        // (playerSelection === 'scissors' && computerSelection === 'paper')     
        // console.log("You win! Scissors beats paper"); 
        // break; 

        // case value3: 
        // (playerSelection === 'rock' && computerSelection === 'scissors') 
        // console.log("You win! Rock beats scissors");  
        // break; 



        function playRound(playerSelection, computerSelection) { 
            if (playerSelection === 'paper' && computerSelection === 'rock') { 
                return "You win! Paper beats rock"; 
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
                return "You win! Scissors beats paper"; 
            } else if (playerSelection === 'rock' && computerSelection === 'scissors') { 
                return "You win! Rock beats scissors"; 
            } else if (playerSelection === 'rock' && computerSelection === 'paper') { 
                return "You lose! Paper beats rock"; 
            } else if (playerSelection === 'paper' && computerSelection === 'scissors') { 
                return "You lose! Scissors beats paper"; 
            } else if (playerSelection === 'scissors' && computerSelection === 'rock') { 
                return "You lose! Rock beats scissors"; 
            } else if (playerSelection === 'paper' && computerSelection === 'paper') { 
                return "it's a tie!"; 
            } else if (playerSelection === 'rock' && computerSelection === 'rock') { 
                return "it's a tie!"; 
            } else if (playerSelection === 'scissors' && computerSelection === 'scissors') { 
                return "it's a tie!"; 
            } else { 
                return "error, try again"; 
            }
        } 
    

















// function playRound(playerSelection, computerSelection) { 
//     if (playerSelection === 'paper' && computerSelection === 'rock') { 
//         return "You win! Paper beats rock"; 
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
//         return "You win! Scissors beats paper"; 
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors') { 
//         return "You win! Rock beats scissors"; 
//     } else if (playerSelection === 'rock' && computerSelection === 'paper') { 
//         return "You lose! Paper beats rock"; 
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') { 
//         return "You lose! Scissors beats paper"; 
//     } else if (playerSelection === 'scissors' && computerSelection === 'rock') { 
//         return "You lose! Rock beats scissors"; 
//     } else if (playerSelection === 'paper' && computerSelection === 'paper') { 
//         return "it's a tie!"; 
//     } else if (playerSelection === 'rock' && computerSelection === 'rock') { 
//         return "it's a tie!"; 
//     } else if (playerSelection === 'scissors' && computerSelection === 'scissors') { 
//         return "it's a tie!"; 
//     } else { 
//         return "error, try again"; 
//     }
// } 