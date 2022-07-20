// getting random elements from the array of choices

let valuesArray = ['rock', 'paper', 'scissors']; 



function getComputerChoice () { 
    let value = valuesArray[Math.floor(Math.random() * valuesArray.length)]; 
    return value;   
} 


function playRound(playerSelection, computerSelection) { 
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
        return "You win! Paper beats rock"; 
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
        return "You win! Scissors beats paper"; 
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
        return "You win! Rock beats scissors"; 
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
        return "You lose! Paper beats rock"; 
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
        return "You lose! Scissors beats paper"; 
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
        return "You lose! Rock beats scissors"; 
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
        return "it's a tie!"; 
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
        return "it's a tie!"; 
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') { 
        return "it's a tie!"; 
    } else { 
        return "error, try again"; 
    }
}    




const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));        


function game() { 
    
        for (let i = 0; i < 5; i++) { 
            playRound(); 
        
    }
}
        


// old conditional code 
// function playRound(playerSelection, computerSelection) { 
//     if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
//                 return "You win! Paper beats rock"; 
//             } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
//                 return "You win! Scissors beats paper"; 
//             } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
//                 return "You win! Rock beats scissors"; 
//             } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
//                 return "You lose! Paper beats rock"; 
//             } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
//                 return "You lose! Scissors beats paper"; 
//             } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
//                 return "You lose! Rock beats scissors"; 
//             } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
//                 return "it's a tie!"; 
//             } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
//                 return "it's a tie!"; 
//             } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') { 
//                 return "it's a tie!"; 
//             } else { 
//                 return "error, try again"; 
//             }
//         } 








        
        
        
        
        // switch statement.. 
        
        // function playRound(playerSelection, computerSelection) { 
            //     switch (computerSelection) { 
                //         case 1: (playerSelection === 'paper' && computerSelection === 'rock'); 
                //         return "You win! Paper beats rock"; 
                
                //         case 2: (playerSelection === 'scissors' && computerSelection === 'paper'); 
                //         return "You win! Scissors beats paper";
                
                //         case 3: (playerSelection === 'rock' && computerSelection === 'scissors'); 
                //         return "You win! Rock beats scissors";
                
                //         case 4: (playerSelection === 'rock' && computerSelection === 'paper'); 
                //         return "You lose! Paper beats rock"; 
                
                //         case 5: (playerSelection === 'paper' && computerSelection === 'scissors'); 
                //         return "You lose! Scissors beats paper"; 
                
                //         case 6: (playerSelection === 'scissors' && computerSelection === 'rock'); 
                //         return "You lose! Rock beats scissors"; 
                
                //         case 7: (playerSelection === 'paper' && computerSelection === 'paper'); 
                //         return "It's a tie"; 
                
                //         case 8: (playerSelection === 'rock' && computerSelection === 'rock'); 
                //         return "It's a tie"; 
                
                //         case 9: (playerSelection === 'scissors' && computerSelection === 'scissors'); 
                //         return "It's a tie"; 
                
                //         case 10: 
                //         return "error, try again"; 
                
                //     }   
                // }
                
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
                
                
                
                
                
                
                
                
                
                // backup code for if else conditional logic 
                
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