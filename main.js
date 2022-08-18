let playerScore = 0; 
let compScore = 0; 


let valuesArray = ['rock', 'paper', 'scissors']; 


let container = document.createElement('container'); 
    let div = document.createElement('div'); 
    div.textContent = "";  
     container.appendChild(div); 
     document.body.append(container); 



// let computerSelection = getComputerChoice();  

function getComputerChoice () { 
    let value = valuesArray[Math.floor(Math.random() * valuesArray.length)];  
    return value; 
}  

let rock = document.querySelector('.rock-btn').addEventListener('click',  inputPlayerRock)  
    function inputPlayerRock () { 
     let computerSelection = getComputerChoice(); 
    const playerSelection = 'rock';  
    let result = playRound(playerSelection, computerSelection); 
    return result; 
}; 
let paper = document.querySelector('.paper-btn').addEventListener('click', inputPlayerPaper)  
  function inputPlayerPaper () { 
   let computerSelection = getComputerChoice(); 
  const playerSelection = 'paper'; 
  let result = playRound(playerSelection, computerSelection);  
  return result;  
  }; 
let scissors = document.querySelector('.scissors-btn').addEventListener('click', inputPlayerScissors)  
    function inputPlayerScissors () {
     let computerSelection = getComputerChoice(); 
    const playerSelection = 'scissors'; 
    let result = playRound(playerSelection, computerSelection); 
    return result; 
}; 

 function playRound(playerSelection, computerSelection) { 

    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
        // console.log("You win! Paper beats rock"); 
       
      div.textContent = "You win! Paper beats rock";
      playerScore++
      resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
      // container.appendChild(div); 
      // document.body.append(container); 
      
        // playerScore++ 
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
         // console.log("You win! Scissors beats paper"); 
        div.textContent = "You win! Scissors beats paper";
        playerScore++
      resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
      // container.appendChild(div); 
      // document.body.append(container); 
      
         // playerScore++ 
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
        // console.log("You win! Rock beats scissors"); 
         div.textContent = "You win! Rock beats scissors";
         playerScore++
        resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
         // container.appendChild(div); 
         // document.body.append(container); 
        
        // playerScore++
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
        // console.log("You lose! Paper beats rock");  
         div.textContent = "You lose! Paper beats rock"; 
        compScore++
        resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
         // container.appendChild(div); 
         // document.body.append(container);
        // compScore++
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
        // console.log("You lose! Scissors beats paper"); 
        
        div.textContent = "You lose! Scissors beats paper"; 
        compScore++
        resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
         // container.appendChild(div); 
         // document.body.append(container);
         // compScore++ 
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
        // console.log("You lose! Rock beats scissors"); 
      
         div.textContent = "You lose! Rock beats scissors"; 
        compScore++
        resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
         // container.appendChild(div); 
         // document.body.append(container);
        // compScore++
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
        // console.log("it's a tie!"); 
      
        div.textContent = "it's a tie!"; 
        resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
         // container.appendChild(div); 
         // document.body.append(container);
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
        // console.log("it's a tie!"); 
      
         div.textContent = "it's a tie!"; 
        resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
         // container.appendChild(div); 
         // document.body.append(container); 
      
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){ 
        // console.log("it's a tie!"); 
      
         div.textContent = "it's a tie!"; 
        resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
         // container.appendChild(div); 
         // document.body.append(container); 
    } 
  finalScore();
 }    
  



function finalScore() { 

 if (playerScore === 3) { 
 finalResultsDiv.textContent = 'player wins!';  
   return;  
  // finalResultsContainer.appendChild(finalResultsDiv); 
  //  document.body.append(finalResultsContainer);
} else if (compScore === 3) {
  finalResultsDiv.textContent = 'comp wins!'; 
  return; 
  // finalResultsContainer.appendChild(finalResultsDiv); 
  // document.body.append(finalResultsContainer); 
  } else { 
// finalResultsDiv.textContent = "it's a tie!"; 
    return; 
// finalResultsContainer.appendChild(finalResultsDiv); 
//  document.body.append(finalResultsContainer);
} 


}








// function playRound(playerSelection, compSelection) {
//   if() {
//     return 'computer won this round'
//   } else if() {
//     //
//   } else {
//    // statement
// } 

// function playGame() {
//  //for loop 
//  // need to use value of playRound? How do you do that?
//  // update overall Score? How do you do that? Remember scoping rules 
//  // need to add return value of playGame function 
// } 

// function getOverallResult() {
// // statements
// }
        
 container.appendChild(div); 
      document.body.append(container); 

    let resultsContainer = document.createElement('container'); 
    let resultsDiv = document.createElement('div');   

        // resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;                 
        
          resultsContainer.appendChild(resultsDiv); 
           document.body.append(resultsContainer); 

    let finalResultsContainer = document.createElement('container'); 
    let finalResultsDiv = document.createElement('div'); 
    


 finalResultsContainer.appendChild(finalResultsDiv); 
   document.body.append(finalResultsContainer);











// create div to display winner here, in global scope outside of function
        // finalResultsContainer.appendChild(finalResultsDiv); 
        //    document.body.append(finalResultsContainer);

//   function game() {  
    
  
       
//         for (let i = 0; i <= 5; i++) { 
          
//           let results1 = playRound(); 
          
//         if (results1 == ("You win! Paper beats rock" || "You win! Scissors beats paper" || "You win! Rock beats scissors")) { 
//           resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
//             playerScore++ 
        
//         } else if (results1 == ("You lose! Paper beats rock" || "You lose! Scissors beats paper" || "You lose! Rock beats scissors")) { 
//            resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;
//           compScore++ 
//         } else { 
        
//            resultsDiv.textContent = "It's a tie!"; 
//         }
//         }        
//   } 
          
          
          
          
 // playRound(); 
    //     let result = playRound(playerSelection, computerSelection); 
    // return result; 
    
        // let playerInput = prompt('Enter rock, paper, or scissors');  
        // let computerSelection = getComputerChoice(); 
        // let result = playRound(playerInput, computerSelection);      
          
      
//         if (playerScore > compScore) {  
        
//           // resultsDiv.textContent = 'player' + ' = ' + `${playerScore}`; 
          
  
//            } else if (compScore > playerScore)  { 
//             // console.log('computer wins!');  
//             // resultsDiv.textContent = 'comp' +  ' = ' + `${compScore}`;      
            
                    
//           } else { 
//             // console.log("it's a tie!"); 
            
//           }
    
  // all below should be seperate function which compares overall scores 
//         function getOverallScore() { 
          
//           let finalResults = game(); 
         
//    if (playerScore > compScore) { 
//       finalResultsDiv.textContent = 'player wins!'; 
//       finalResultsContainer.appendChild(finalResultsDiv); 
//            document.body.append(finalResultsContainer);
      
//     } else if (compScore > playerScore) { 
//       finalResultsDiv.textContent = 'comp wins!'; 
//       finalResultsContainer.appendChild(finalResultsDiv); 
//            document.body.append(finalResultsContainer);
       
//     }   else { 
//        finalResultsDiv.textContent = "it's a tie!"; 
//       finalResultsContainer.appendChild(finalResultsDiv); 
//            document.body.append(finalResultsContainer);
    
//     }
        
//       }  
            
    // create seperate container and div for final score, so on div for player/comp score 
   // another div for (completed) which shows who won in that round 
   // last div to display final score 
    
    // find way to update player and comp score in the div that they are in 
    


  
 




// document.querySelector('.scissors-btn').addEventListener('click',  function() {
// playRound(playerSelection, computerSelection)
// });     

// method 1 for getting playerselection 
// document.querySelector('.scissors-btn').addEventListener('click',  function() {
// const playerSelection = 'scisscors'
// playRound(playerSelection, computerSelection)
// });

// method 2 for getting playerselection 
// document.querySelector('.scissors-btn').addEventListener('click',  function() {
// playRound('scisscors', computerSelection)
// });



// document.querySelector('.rockButton').addEventListener('click', inputPlayerRock);




































































































































































// let playerScore = 0; 
// let compScore = 0; 

// let valuesArray = ['rock', 'paper', 'scissors']; 


// let container = document.createElement('container'); 
// let div = document.createElement('div'); 
// div.textContent = "";  
// container.appendChild(div); 
// document.body.append(container); 



// // let computerSelection = getComputerChoice();  

// function getComputerChoice () { 
// let value = valuesArray[Math.floor(Math.random() * valuesArray.length)];  
// return value; 
// }  

// let rock = document.querySelector('.rock-btn').addEventListener('click',  inputPlayerRock)  
// function inputPlayerRock () { 
// let computerSelection = getComputerChoice(); 
// const playerSelection = 'rock';  
// let result = playRound(playerSelection, computerSelection); 
// return result; 
// }; 
// let paper = document.querySelector('.paper-btn').addEventListener('click', inputPlayerPaper)  
// function inputPlayerPaper () { 
// let computerSelection = getComputerChoice(); 
// const playerSelection = 'paper'; 
// let result = playRound(playerSelection, computerSelection);  
// return result;  
// }; 
// let scissors = document.querySelector('.scissors-btn').addEventListener('click', inputPlayerScissors)  
// function inputPlayerScissors () {
// let computerSelection = getComputerChoice(); 
// const playerSelection = 'scissors'; 
// let result = playRound(playerSelection, computerSelection); 
// return result; 
// };   

// function playRound(playerSelection, computerSelection) { 

// if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
// // console.log("You win! Paper beats rock"); 

// div.textContent = "You win! Paper beats rock";
// container.appendChild(div); 
// document.body.append(container); 

// playerScore++ 
// } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
//  // console.log("You win! Scissors beats paper"); 
// div.textContent = "You win! Scissors beats paper";
// container.appendChild(div); 
// document.body.append(container); 

//  playerScore++ 
// } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
// // console.log("You win! Rock beats scissors"); 
//  div.textContent = "You win! Rock beats scissors";
//  container.appendChild(div); 
//  document.body.append(container); 

// playerScore++
// } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
// // console.log("You lose! Paper beats rock");  
//  div.textContent = "You lose! Paper beats rock"; 
//  container.appendChild(div); 
//  document.body.append(container);
// compScore++
// } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
// // console.log("You lose! Scissors beats paper"); 

// div.textContent = "You lose! Scissors beats paper"; 
//  container.appendChild(div); 
//  document.body.append(container);
//  compScore++ 
// } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
// // console.log("You lose! Rock beats scissors"); 

//  div.textContent = "You lose! Rock beats scissors"; 
//  container.appendChild(div); 
//  document.body.append(container);
// compScore++
// } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
// // console.log("it's a tie!"); 

// div.textContent = "it's a tie!"; 
//  container.appendChild(div); 
//  document.body.append(container);
// } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
// // console.log("it's a tie!"); 

//  div.textContent = "it's a tie!"; 
//  container.appendChild(div); 
//  document.body.append(container); 

// } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){ 
// // console.log("it's a tie!"); 

//  div.textContent = "it's a tie!"; 
//  container.appendChild(div); 
//  document.body.append(container); 
// } 
// }    



// let resultsContainer = document.createElement('container'); 
// let resultsDiv = document.createElement('div');   

// resultsDiv.textContent = 'player' + ' ' + ' = ' + `${playerScore}` + ' ' + 'comp' + ' ' + ' = ' + `${compScore}`;                    
//   resultsContainer.appendChild(resultsDiv); 
//    document.body.append(resultsContainer);


// function game() { 

// if (playerScore === 5) { 

// } else if (compScore === 5) { 

// }     


// for (let i = 0; i <= 5; i++) { 


  
  
  

// // let playerInput = prompt('Enter rock, paper, or scissors');  
// // let computerSelection = getComputerChoice(); 
// // let result = playRound(playerInput, computerSelection);      
  

// if (playerScore > compScore) {  

//   resultsDiv.textContent = 'player' + ' = ' + `${playerScore}`;                    
//   // resultsContainer.appendChild(resultsDiv); 
//   //  document.body.append(resultsContainer);

    
    
  

    
  
   
//   } else if (compScore > playerScore){ 
//     // console.log('computer wins!');  
//     resultsDiv.textContent = 'comp' +  ' = ' + `${compScore}`;           
    
    
//   } else { 
//     // console.log("it's a tie!"); 
//    resultsDiv.textContent = "It's a tie!"; 
    
    
//   }

// } 
// } 





















































































































// let valuesArray = ['rock', 'paper', 'scissors']; 

// let computerSelection = getComputerChoice();      

// const div = document.createElement('div'); 




// // let object = {playerSelection: '', computerSelection: ''}; 
// document.querySelector('rock-btn').addEventListener('click', playRound); 
// document.querySelector('paper-btn').addEventListener('click', playRound);
// document.querySelector('scissors-btn').addEventListener('click', playRound);


// document.addEventListener('.rock-btn', function(e) {
//     console.log(e.target)
//     }) 


//  function getComputerChoice () { 
//     let value = valuesArray[Math.floor(Math.random() * valuesArray.length)];  
//     return value; 
// }  



//  function playRound(playerSelection, computerSelection) { 

//     if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
//         console.log("You win! Paper beats rock");  
//         playerScore++
//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
//          console.log("You win! Scissors beats paper"); 
//          playerScore++
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
//         console.log("You win! Rock beats scissors");
//         playerScore++
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
//         console.log("You lose! Paper beats rock"); 
//         compScore++
//     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
//         console.log("You lose! Scissors beats paper");
//         compScore++
//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
//         console.log("You lose! Rock beats scissors"); 
//         compScore++
//     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
//         console.log("it's a tie!");
//     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
//         console.log("it's a tie!"); 
//     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){ 
//         console.log("it's a tie!"); 
//     } 
// }    
  





//         let playerScore = 0; 
//         let compScore = 0; 

//   function game() { 

//     // commented out part that plays 5 five around, according to directions 
   
//         // for (let i = 0; i < 5; i++) { 
        
//         // let playerInput = prompt('Enter rock, paper, or scissors');  
//         // let computerSelection = getComputerChoice(); 
//         // let result = playRound(playerInput, computerSelection);      
          
//      }  
//         if (playerScore > compScore) { 
//             console.log('player wins!'); 
//           } else if (compScore > playerScore){ 
//             console.log('computer wins!');    
//           } else { 
//             console.log("it's a tie!"); 
//           }
    
// //   } 





























// // // getting random elements from the array of choices

// // // mod 2

// // let valuesArray = ['rock', 'paper', 'scissors']; 



// // function getComputerChoice () { 
// //     let value = valuesArray[Math.floor(Math.random() * valuesArray.length)];  
// //     return value; 
// // }  



// //  function playRound(playerSelection, computerSelection) { 

// //     if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
// //         return "You win! Paper beats rock";  
// //     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
// //          return "You win! Scissors beats paper"; 
// //     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
// //         return "You win! Rock beats scissors";  
// //     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
// //         return "You lose! Paper beats rock";   
// //     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
// //         return "You lose! Scissors beats paper";  
// //     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
// //         return "You lose! Rock beats scissors";  
// //     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
// //         return "it's a tie!";  
// //     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
// //         return "it's a tie!"; 
// //     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){ 
// //         return "it's a tie!"; 
// //     } 
// // }    



// // // const playerSelection = "rock";
// // // console.log(playRound(playerSelection, computerSelection));    





// //         let playerScore = 0; 
// //         let compScore = 0; 

// //   function game() { 
   
// //         for (let i = 0; i < 5; i++) { 
        
// //         let playerInput = prompt('Enter rock, paper, or scissors'); 
// //         let computerSelection = getComputerChoice(); 
          
// //         let result = playRound(playerInput, computerSelection);      
          
// //           if (result === "You win! Paper beats rock") { 
// //             playerScore++ 
// //           } else if (result === "You win! Scissors beats paper") { 
// //             playerScore++
// //           }  else if (result === "You win! Rock beats scissors") { 
// //             playerScore++
// //           } else if (result === "You lose! Paper beats rock") { 
// //             compScore++
// //           } else if (result === "You lose! Scissors beats paper") { 
// //             compScore++
// //           } else if (result === "You lose! Rock beats scissors") { 
// //             compScore++
// //           } else if (result === "it's a tie!") { 
            
// //           }
// //           if (playerScore > compScore) { 
// //             console.log('player wins that round!'); 
// //           } else if (compScore > playerScore) { 
// //             console.log('computer wins that round!');    
// //           } else { 
// //             console.log('It/s a tie!')
// //           }
// //         } 
// //         if (playerScore > compScore) { 
// //             console.log('player wins!'); 
// //           } else if (compScore > playerScore){ 
// //             console.log('computer wins!');    
// //           } else { 
// //             console.log('It/s a tie!'); 
// //           }
  
// //   } 



















// // // getting random elements from the array of choices

// // // mod

// // let valuesArray = ['rock', 'paper', 'scissors']; 



// // function getComputerChoice () { 
// //     let value = valuesArray[Math.floor(Math.random() * valuesArray.length)];  
// //     // let playerInput = prompt('Enter rock, paper, or scissors'); 
// //     // console.log(value, playerInput); 
// //     // playRound(playerInput, value);
// //   // return statement 
// //   return value; 
// // }  



// //     let playerScore = 0; 
// //     let compScore = 0; 

// // function playRound(playerSelection, computerSelection) { 

// //     if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
// //         let result1 = "You win! Paper beats rock"; 
// //         return result1;  
// //     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
// //         let result2 = "You win! Scissors beats paper"; 
// //         return result2; 
// //     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
// //         let result3 = "You win! Rock beats scissors"; 
// //         return result3; 
// //     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
// //         let result4 = "You lose! Paper beats rock"; 
// //         return result4; 
// //     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
// //         let result5 = "You lose! Scissors beats paper"; 
// //         return result5; 
// //     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
// //         let result6 = "You lose! Rock beats scissors"; 
// //         return result6; 
// //     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
// //         let result7 = "it's a tie!"; 
// //         return result7; 
// //     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
// //         return "it's a tie!"; 
// //     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') { 
// //         return "it's a tie!"; 
// //     } 
// // }    

// // // getting result of playround 
// // let playRoundResult = playRound; 

// // // const playerSelection = "rock";
// // let computerSelection = getComputerChoice();
// // // console.log(playRound(playerSelection, computerSelection));    



// // // pass result of playround to game function 
// // // playround will need to be invoked 5 times 
// // // the results will need to be printed and a winner must be logged at the end 

// // // keep score inside of game function 
// // function game() { 
// //     let playerInput = prompt('Enter rock, paper, or scissors'); 

// //         let result = playRound(playerInput, computerSelection);      
   
// //         for (let i = 0; result < 5; i++) {  
// //           // let playRoundResult1 = playRound(playerInput, getComputerChoice);    
// //           // calling playRound within the loop 
// //           // it needs to be invoked 5 times... 
         
// //             if (playerScore > compScore) {                
// //                 // console.log(result); 
// //                 console.log('player won that round!'); 
// //             } else {                 
// //                 // console.log(result); 
// //                 console.log('computer won that round!');
// //             }
// //         }
// //             if (playerScore > compScore) {       
// //             console.log('the player won!');   
// //         }   else if (compScore > playerScore) { 
// //             console.log('computer wins!'); 
// //         }   else { 
// //             console.log('It/s a tie!');      
// //         }
// //     }


















































// // // getting random elements from the array of choices

// // let valuesArray = ['rock', 'paper', 'scissors']; 



// // function getComputerChoice () { 
// //     let value = valuesArray[Math.floor(Math.random() * valuesArray.length)]; 
// //     return value;   
// // } 

// // let playerScore = 0; 
// // let compScore = 0; 

// // function playRound(playerSelection, computerSelection) { 

// //     if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
// //         playerScore++ 
// //         return "You win! Paper beats rock"; 
// //     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
// //         playerScore++ 
// //         return "You win! Scissors beats paper"; 
// //     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
// //         playerScore++ 
// //         return "You win! Rock beats scissors"; 
// //     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
// //         compScore++
// //         return "You lose! Paper beats rock"; 
// //     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
// //         compScore++
// //         return "You lose! Scissors beats paper"; 
// //     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
// //         compScore++
// //         return "You lose! Rock beats scissors"; 
// //     } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
// //         return "it's a tie!"; 
// //     } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
// //         return "it's a tie!"; 
// //     } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') { 
// //         return "it's a tie!"; 
// //     } 
// // }    




// // // const playerSelection = "rock";
// // // let computerSelection = getComputerChoice();
// // // console.log(playRound(playerSelection, computerSelection));    





// // // Write a NEW function called game(). 
// // // Call the playRound function inside of this one to play a 5 round game that 
// // // keeps score and reports a winner or loser at the end.
// // // Remember loops? This is a great opportunity to use one to play those five rounds:

// // // for (let i = 0; i < 5; i++) {
// // //    // your code here!
// // // }
// // // At this point you should be using console.log() to display the results of each round 
// // // and the winner at the end.
// // // Use prompt() to get input from the user. Read the docs here if you need to.

// // // function 
// // // use prompt to have user enter their choice of RPS 
// // // save the result of the prompt to variable and pass it into the playround function 
// // // loop to keep track of the round, starts at 0 then ends at 5 
// // // keeps score - use score variable for both players 
// // // use a conditional to determine who won each round (increment++) and then console.log the results after each round, 
// // // console.log the winner of the round, then console.log the winner of the game 
// // // 

// // // How to determine a winner at the end of each round, what will I be comparing to determine the winner? The playRound function already determines a winner for a single round 
// // // can I use the playRound function as a helper function to get the results ? 


// // function game() { 
// //     let playerInput = prompt('Enter rock, paper, or scissors');

// //      let result = playRound(playerInput, getComputerChoice) 
// //         for (let i = 0; i < 5; i++) {  
// //             if (playerScore > compScore) {                
// //                 console.log('player won that round!');          
// //             } else {                 
// //                 console.log('computer won that round!');
// //             }
// //         }
// //             if (playerScore > computerScore) {       
// //             console.log('the player won!');   
// //         }   else if (computerScore > playerScore) { 
// //             console.log('computer wins!'); 
// //         }   else { 
// //             console.log('It/s a tie!');      
// //         } 
    
// //     } 
// // console.log(game()); 














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


// // function game() { 
// //     let playerInput = prompt('Enter rock, paper, or scissors');     // getting the user input 
// //     let playerScore = 0;   // setting a score variable for both, to keep track for each round, and the variable will be updated each round 
// //     let computerScore = 0; 

// //     function playRound(playerInput, getComputerChoice) {   // calling the playRound func inside the game func, plugging in the values for both 
// //         for (let i = 0; i < 5; i++) {   // loop to control how many round get played 
// //             if (playerInput) {                 // conditional to check who won that round
// //                 console.log('player won that round!'); // log the results 
// //                 playerScore++         // update the score 
// //             } else {                 // if the above fails, it will check this block 
// //                 console.log('computer won that round!');
// //                 computerScore++
// //             }
// //         }
// //         if (playerScore > computerScore) {      // return the final results, outside of the loop, once the loop has finished 
// //             console.log('the player won!');   // log the results for either using if else 
// //         } else if (computerScore > playerScore) { 
// //             console.log('computer wins!'); 
// //         } else { 
// //             console.log('It/s a tie!');      // account for in case of tie 
// //         }
    
// //     }
// // }















// // function game() { 
// //     save the value of playRound to a variable 
//     // let round = playRound; 


    
// //     let computerScore = 0; 
// //     let playerScore = 0; 
    
// //         for (let i = 0; i < 5; i++) { 

// //         if (conditional logic for each round to determine winner) { 
// //             computerScore++
// //             console.log('Computer won that round!');
// //         } else { 
// //             playerScore++ 
// //             console.log('Player won that round'); 
// //         }
// //     } 

//         // outside of loop! Use conditional to compare whose score is greater once the 5 rounds are completed 

// //     if (computerScore > playerScore) { 
// //          console.log('Computer wins! Player loses!');
// //     } else  { 
// //         console.log('Player wins! Computer loses!');
// //     }
// // }
        


// // old conditional code 
// // function playRound(playerSelection, computerSelection) { 
// //     if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') { 
// //                 return "You win! Paper beats rock"; 
// //             } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') { 
// //                 return "You win! Scissors beats paper"; 
// //             } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') { 
// //                 return "You win! Rock beats scissors"; 
// //             } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') { 
// //                 return "You lose! Paper beats rock"; 
// //             } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') { 
// //                 return "You lose! Scissors beats paper"; 
// //             } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') { 
// //                 return "You lose! Rock beats scissors"; 
// //             } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') { 
// //                 return "it's a tie!"; 
// //             } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') { 
// //                 return "it's a tie!"; 
// //             } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') { 
// //                 return "it's a tie!"; 
// //             } else { 
// //                 return "error, try again"; 
// //             }
// //         } 








        
        
        
        
//         // switch statement.. 
        
//         // function playRound(playerSelection, computerSelection) { 
//             //     switch (computerSelection) { 
//                 //         case 1: (playerSelection === 'paper' && computerSelection === 'rock'); 
//                 //         return "You win! Paper beats rock"; 
                
//                 //         case 2: (playerSelection === 'scissors' && computerSelection === 'paper'); 
//                 //         return "You win! Scissors beats paper";
                
//                 //         case 3: (playerSelection === 'rock' && computerSelection === 'scissors'); 
//                 //         return "You win! Rock beats scissors";
                
//                 //         case 4: (playerSelection === 'rock' && computerSelection === 'paper'); 
//                 //         return "You lose! Paper beats rock"; 
                
//                 //         case 5: (playerSelection === 'paper' && computerSelection === 'scissors'); 
//                 //         return "You lose! Scissors beats paper"; 
                
//                 //         case 6: (playerSelection === 'scissors' && computerSelection === 'rock'); 
//                 //         return "You lose! Rock beats scissors"; 
                
//                 //         case 7: (playerSelection === 'paper' && computerSelection === 'paper'); 
//                 //         return "It's a tie"; 
                
//                 //         case 8: (playerSelection === 'rock' && computerSelection === 'rock'); 
//                 //         return "It's a tie"; 
                
//                 //         case 9: (playerSelection === 'scissors' && computerSelection === 'scissors'); 
//                 //         return "It's a tie"; 
                
//                 //         case 10: 
//                 //         return "error, try again"; 
                
//                 //     }   
//                 // }
                
//                 // function playRound(playerSelection, computerSelection) { 
//                 //     switch (computerSelection) { 
//                 //         case 'paper'
                
//                         // case value2:
//                         // (playerSelection === 'scissors' && computerSelection === 'paper')     
//                         // console.log("You win! Scissors beats paper"); 
//                         // break; 
                
//                         // case value3: 
//                         // (playerSelection === 'rock' && computerSelection === 'scissors') 
//                         // console.log("You win! Rock beats scissors");  
//                         // break; 
                
                
                
                
                
                
                
                
                
//                 // backup code for if else conditional logic 
                
// // function playRound(playerSelection, computerSelection) { 
// //     if (playerSelection === 'paper' && computerSelection === 'rock') { 
// //         return "You win! Paper beats rock"; 
// //     } else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
// //         return "You win! Scissors beats paper"; 
// //     } else if (playerSelection === 'rock' && computerSelection === 'scissors') { 
// //         return "You win! Rock beats scissors"; 
// //     } else if (playerSelection === 'rock' && computerSelection === 'paper') { 
// //         return "You lose! Paper beats rock"; 
// //     } else if (playerSelection === 'paper' && computerSelection === 'scissors') { 
// //         return "You lose! Scissors beats paper"; 
// //     } else if (playerSelection === 'scissors' && computerSelection === 'rock') { 
// //         return "You lose! Rock beats scissors"; 
// //     } else if (playerSelection === 'paper' && computerSelection === 'paper') { 
// //         return "it's a tie!"; 
// //     } else if (playerSelection === 'rock' && computerSelection === 'rock') { 
// //         return "it's a tie!"; 
// //     } else if (playerSelection === 'scissors' && computerSelection === 'scissors') { 
// //         return "it's a tie!"; 
// //     } else { 
// //         return "error, try again"; 
// //     }
// // } 