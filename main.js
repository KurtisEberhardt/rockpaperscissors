let rock = 1;
let paper = 2;
let scissors = 3;



let winConditions = []
//rock = 1, paper = 2, scissors = 3
winConditions['paper']='rock';
winConditions['rock']='scissors';
winConditions['scissors']='paper';

function computerLogic(){
    let min = 1;
    let max = 3;
    let computerChoice = (Math.floor(Math.random() * (max - min)+min));
    
    switch(computerChoice){
    case 1: 
    return 'rock'
    case 2:
    return 'paper'
    case 3: 
    return 'scissors'
    }
}
function play(playerChoice){
    
    let computerChoice = computerLogic()

    if(winConditions[playerChoice]==computerChoice)
        console.log("You win! Play again?")
        else if(winConditions[computerChoice]==playerChoice)
        console.log("You lose! Try again?")
        else console.log("You tied! Play again?")
}