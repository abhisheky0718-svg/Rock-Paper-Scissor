const choices = ["rock", "paper" , "scissor"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
let playerscore = 0 ;
let computerscore = 0 ;

function playgame(playerchoice){
    const computerchoice = choices[Math.floor (Math.random()*3)];
    let result = "";
    if (playerchoice === computerchoice){
        result = " TIE⚖️"
    }
    else{
        switch(playerchoice){
            case "rock":
          result =  (computerchoice ==="scissor") ? "YOU WON" : "YOU LOSE"
          break;
          case "paper":
          result =  (computerchoice ==="rock") ?  "YOU WON" : "YOU LOSE"
          break;
          case "scissor":
          result =  (computerchoice ==="paper") ?  "YOU WON" : "YOU LOSE"
          break;
        }
    }
    
  playerdisplay.textContent = `Player: ${playerchoice}`;
  computerdisplay.textContent = `Computer: ${computerchoice}`;
  resultdisplay.textContent = result;
resultdisplay.classList.remove("green", "red");
  switch(result){
    case "YOU WON":
    resultdisplay.style.color = "green";
    playerscore++;
    playerscoredisplay.textContent = playerscore ;
    break;
    case "YOU LOSE":
    resultdisplay.style.color = "red";
    computerscore++;
    computerscoredisplay.textContent = computerscore;
    break;
    default:
    resultdisplay.style.color = "black";
  }
}
