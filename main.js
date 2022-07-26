// getting random elements from the array of choices

// mod 2

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
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){ 
        return "it's a tie!"; 
    } 
}    



// const playerSelection = "rock";
// console.log(playRound(playerSelection, computerSelection));    





        let playerScore = 0; 
        let compScore = 0; 

  function game() { 
   
        for (let i = 0; i < 5; i++) { 
        
        let playerInput = prompt('Enter rock, paper, or scissors'); 
        let computerSelection = getComputerChoice(); 
          
        let result = playRound(playerInput, computerSelection);      
          
          if (result === "You win! Paper beats rock") { 
            playerScore++ 
          } else if (result === "You win! Scissors beats paper") { 
            playerScore++
          }  else if (result === "You win! Rock beats scissors") { 
            playerScore++
          } else if (result === "You lose! Paper beats rock") { 
            compScore++
          } else if (result === "You lose! Scissors beats paper") { 
            compScore++
          } else if (result === "You lose! Rock beats scissors") { 
            compScore++
          } else if (result === "it's a tie!") { 
            
          }
          if (playerScore > compScore) { 
            console.log('player wins that round!'); 
          } else if (compScore > playerScore) { 
            console.log('computer wins that round!');    
          } else { 
            console.log('It/s a tie!')
          }
        } 
        if (playerScore > compScore) { 
            console.log('player wins!'); 
          } else if (compScore > playerScore){ 
            console.log('computer wins!');    
          } else { 
            console.log('It/s a tie!'); 
          }
  
  } 



















// // getting random elements from the array of choices

// // mod

// let valuesArray = ['rock', 'paper', 'scissors']; 



// function getComputerChoice () { 
//     let value = valuesArray[Math.floor(Math.random() * valuesArray.length)];  
//     // let playerInput = prompt('Enter rock, paper, or scissors'); 
//     // console.log(value, playerInput); 
//     // playRound(playerInput, value);
//   // return statement 
//   return value; 
// }  



//     let playerScore = 0; 
//     let compScore = 0; 

// function playRound(playerSelection, computerSelection) { 

//     if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
//         let result1 = "You win! Paper beats rock"; 
//         return result1;  
//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
//         let result2 = "You win! Scissors beats paper"; 
//         return result2; 
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
//         let result3 = "You win! Rock beats scissors"; 
//         return result3; 
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
//         let result4 = "You lose! Paper beats rock"; 
//         return result4; 
//     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
//         let result5 = "You lose! Scissors beats paper"; 
//         return result5; 
//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
//         let result6 = "You lose! Rock beats scissors"; 
//         return result6; 
//     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
//         let result7 = "it's a tie!"; 
//         return result7; 
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
//         return "it's a tie!"; 
//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') { 
//         return "it's a tie!"; 
//     } 
// }    

// // getting result of playround 
// let playRoundResult = playRound; 

// // const playerSelection = "rock";
// let computerSelection = getComputerChoice();
// // console.log(playRound(playerSelection, computerSelection));    



// // pass result of playround to game function 
// // playround will need to be invoked 5 times 
// // the results will need to be printed and a winner must be logged at the end 

// // keep score inside of game function 
// function game() { 
//     let playerInput = prompt('Enter rock, paper, or scissors'); 

//         let result = playRound(playerInput, computerSelection);      
   
//         for (let i = 0; result < 5; i++) {  
//           // let playRoundResult1 = playRound(playerInput, getComputerChoice);    
//           // calling playRound within the loop 
//           // it needs to be invoked 5 times... 
         
//             if (playerScore > compScore) {                
//                 // console.log(result); 
//                 console.log('player won that round!'); 
//             } else {                 
//                 // console.log(result); 
//                 console.log('computer won that round!');
//             }
//         }
//             if (playerScore > compScore) {       
//             console.log('the player won!');   
//         }   else if (compScore > playerScore) { 
//             console.log('computer wins!'); 
//         }   else { 
//             console.log('It/s a tie!');      
//         }
//     }


















































// // getting random elements from the array of choices

// let valuesArray = ['rock', 'paper', 'scissors']; 



// function getComputerChoice () { 
//     let value = valuesArray[Math.floor(Math.random() * valuesArray.length)]; 
//     return value;   
// } 

// let playerScore = 0; 
// let compScore = 0; 

// function playRound(playerSelection, computerSelection) { 

//     if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
//         playerScore++ 
//         return "You win! Paper beats rock"; 
//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
//         playerScore++ 
//         return "You win! Scissors beats paper"; 
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
//         playerScore++ 
//         return "You win! Rock beats scissors"; 
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
//         compScore++
//         return "You lose! Paper beats rock"; 
//     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
//         compScore++
//         return "You lose! Scissors beats paper"; 
//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
//         compScore++
//         return "You lose! Rock beats scissors"; 
//     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
//         return "it's a tie!"; 
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
//         return "it's a tie!"; 
//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') { 
//         return "it's a tie!"; 
//     } 
// }    




// // const playerSelection = "rock";
// // let computerSelection = getComputerChoice();
// // console.log(playRound(playerSelection, computerSelection));    





// // Write a NEW function called game(). 
// // Call the playRound function inside of this one to play a 5 round game that 
// // keeps score and reports a winner or loser at the end.
// // Remember loops? This is a great opportunity to use one to play those five rounds:

// // for (let i = 0; i < 5; i++) {
// //    // your code here!
// // }
// // At this point you should be using console.log() to display the results of each round 
// // and the winner at the end.
// // Use prompt() to get input from the user. Read the docs here if you need to.

// // function 
// // use prompt to have user enter their choice of RPS 
// // save the result of the prompt to variable and pass it into the playround function 
// // loop to keep track of the round, starts at 0 then ends at 5 
// // keeps score - use score variable for both players 
// // use a conditional to determine who won each round (increment++) and then console.log the results after each round, 
// // console.log the winner of the round, then console.log the winner of the game 
// // 

// // How to determine a winner at the end of each round, what will I be comparing to determine the winner? The playRound function already determines a winner for a single round 
// // can I use the playRound function as a helper function to get the results ? 


// function game() { 
//     let playerInput = prompt('Enter rock, paper, or scissors');

//      let result = playRound(playerInput, getComputerChoice) 
//         for (let i = 0; i < 5; i++) {  
//             if (playerScore > compScore) {                
//                 console.log('player won that round!');          
//             } else {                 
//                 console.log('computer won that round!');
//             }
//         }
//             if (playerScore > computerScore) {       
//             console.log('the player won!');   
//         }   else if (computerScore > playerScore) { 
//             console.log('computer wins!'); 
//         }   else { 
//             console.log('It/s a tie!');      
//         } 
    
//     } 
// console.log(game()); 














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


// function game() { 
//     let playerInput = prompt('Enter rock, paper, or scissors');     // getting the user input 
//     let playerScore = 0;   // setting a score variable for both, to keep track for each round, and the variable will be updated each round 
//     let computerScore = 0; 

//     function playRound(playerInput, getComputerChoice) {   // calling the playRound func inside the game func, plugging in the values for both 
//         for (let i = 0; i < 5; i++) {   // loop to control how many round get played 
//             if (playerInput) {                 // conditional to check who won that round
//                 console.log('player won that round!'); // log the results 
//                 playerScore++         // update the score 
//             } else {                 // if the above fails, it will check this block 
//                 console.log('computer won that round!');
//                 computerScore++
//             }
//         }
//         if (playerScore > computerScore) {      // return the final results, outside of the loop, once the loop has finished 
//             console.log('the player won!');   // log the results for either using if else 
//         } else if (computerScore > playerScore) { 
//             console.log('computer wins!'); 
//         } else { 
//             console.log('It/s a tie!');      // account for in case of tie 
//         }
    
//     }
// }















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