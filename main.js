// getting random elements from the array of choices

let valuesArray = ['Rock', 'Paper', 'Scissors']; 



function getComputerChoice () { 
    let value = valuesArray[Math.floor(Math.random() * valuesArray.length)]; 
    return value;   
} 


