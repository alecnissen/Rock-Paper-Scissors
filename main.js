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
    } 
}    




const playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));        




// Write a NEW function called game(). 
// Call the playRound function inside of this one to play a 5 round game that 
// keeps score and reports a winner or loser at the end.
// Remember loops? This is a great opportunity to use one to play those five rounds:

// for (let i = 0; i < 5; i++) {
//    // your code here!
// }
// At this point you should be using console.log() to display the results of each round 
// and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.

// function 
// use prompt to have user enter their choice of RPS 
// save the result of the prompt to variable and pass it into the playround function 
// loop to keep track of the round, starts at 0 then ends at 5 
// keeps score - use score variable for both players 
// use a conditional to determine who won each round (increment++) and then console.log the results after each round, 
// console.log the winner of the round, then console.log the winner of the game 
// 

// How to determine a winner at the end of each round, what will I be comparing to determine the winner? The playRound function already determines a winner for a single round 
// can I use the playRound function as a helper function to get the results ? 


function game() { 
    let playerInput = prompt('Enter rock, paper, or scissors');     // getting the user input 
    let playerScore = 0;   // setting a score variable for both, to keep track for each round, and the variable will be updated each round 
    let computerScore = 0; 

    function playRound(playerInput, getComputerChoice) {   // calling the playRound func inside the game func, plugging in the values for both 
        for (let i = 0; i < 5; i++) {   // loop to control how many round get played 
            if (playerInput) {                 // conditional to check who won that round
                console.log('player won that round!'); // log the results 
                playerScore++         // update the score 
            } else {                 // if the above fails, it will check this block 
                console.log('computer won that round!');
                computerScore++
            }
        }
        if (playerScore > computerScore) {      // return the final results, outside of the loop, once the loop has finished 
            console.log('the player won!');   // log the results for either using if else 
        } else if (computerScore > playerScore) { 
            console.log('computer wins!'); 
        } else { 
            console.log('It/s a tie!');      // account for in case of tie 
        }
    
    }
}




// function game() { 
//     save the value of playRound to a variable 
    // let round = playRound; 


    
//     let computerScore = 0; 
//     let playerScore = 0; 
    
//         for (let i = 0; i < 5; i++) { 

//         if (conditional logic for each round to determine winner) { 
//             computerScore++
//             console.log('Computer won that round!');
//         } else { 
//             playerScore++ 
//             console.log('Player won that round'); 
//         }
//     } 

        // outside of loop! Use conditional to compare whose score is greater once the 5 rounds are completed 

//     if (computerScore > playerScore) { 
//          console.log('Computer wins! Player loses!');
//     } else  { 
//         console.log('Player wins! Computer loses!');
//     }
// }
        


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