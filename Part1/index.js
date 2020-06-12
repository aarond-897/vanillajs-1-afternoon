let gameTracker = [];
let winner=false;



function play(clickedId){


  const player = document.getElementById('player')

  const clickedElement = document.getElementById(clickedId)
  

  if (player.innerText==='X'){
    if (!clickedElement.innerText){
    clickedElement.innerText='X';
    player.innerText = 'O'
    gameTracker[clickedId]='X'
    }
  }else{
    if (!clickedElement.innerText){
    clickedElement.innerText='O'
    player.innerText='X'
    gameTracker[clickedId]='O'
    }
  }


  //row winners
  if (gameTracker[0] !== undefined && gameTracker[0]===gameTracker[1] && gameTracker[0]===gameTracker[2]){
    console.log('you win')
    winner=true
    window.alert(`Player ${gameTracker[0]} wins!!!`)
    console.log(winner)
    boardReset()
  }
  if (gameTracker[3] !== undefined && gameTracker[3]===gameTracker[4] && gameTracker[3]===gameTracker[5]){
    winner=true
    window.alert(`Player ${gameTracker[3]} wins!!!`)
    boardReset()
  }
  if (gameTracker[6] !== undefined && gameTracker[6]===gameTracker[7]===gameTracker[8]){
    winner=true
    window.alert(`Player ${gameTracker[6]} wins!!!`)
    boardReset()
  }

  //column winners
  if (gameTracker[0] !== undefined && gameTracker[0]===gameTracker[3] && gameTracker[0]===gameTracker[6]){
    winner=true
    window.alert(`Player ${gameTracker[0]} wins!!!`)
  }
  if (gameTracker[1] !== undefined && gameTracker[1]===gameTracker[4] && gameTracker[1]===gameTracker[7]){
    winner=true
    window.alert(`Player ${gameTracker[1]} wins!!!`)
    boardReset()
  }
  if (gameTracker[2] !== undefined && gameTracker[2]===gameTracker[5] && gameTracker[2]===gameTracker[8]){
    winner=true
    window.alert(`Player ${gameTracker[2]} wins!!!`)
    boardReset()
  }

  //diagonal winners
  if(gameTracker[0] !== undefined && gameTracker[0]===gameTracker[4] && gameTracker[0]===gameTracker[8]){
    winner=true
    window.alert(`Player ${gameTracker[0]} wins!!!`)
    boardReset()
  }
  if(gameTracker[2] !== undefined && gameTracker[2]===gameTracker[4] && gameTracker[2]===gameTracker[6]){
    winner=true
    window.alert(`Player ${gameTracker[2]} wins!!!`)
    boardReset()
  }

  //determines if the board is full and there is no winner
  if (gameTracker.length===9 && !gameTracker.includes(undefined) &&winner===false){
    window.alert("Cat's game")
    boardReset();
    console.log(gameTracker)
    console.log(winner)
  }






}
  // Black Diamond Tasks

// 1

  // The below have been tasks have been completed via the boardReset function lisetd below
  // clear the gameTracker (done)
  // set winner to false (done)
  // make sure there is no text in the html table (done)

//2
  //reset button (done)

//3
  //if else block on lines 15-27 have another condition disallowing overrides

//4
  //once a winner is confirmed the board will reset ending the current game

function boardReset(){
  winner=false;
  console.log(winner)

  for (let i = 0; i < gameTracker.length; i++) {
    document.getElementById(i).innerText="";
  }

  console.log(document.querySelector('table'))

  gameTracker.splice(0)
  console.log(gameTracker)
}

