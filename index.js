const choices = ["rock", "paper" , "scissor"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");


function playgame(playerchoice){
    const computerchoice = choices[Math.floor (Math.random()*3)];
    let result = "";
    if (playerchoice === computerchoice){
        result = " it's  a tie ⚖️"
    }
    else{
        switch(playerchoice){
            case "rock":
          result =  (computerchoice ==="scissor") ? " YOU WON✌️ " : "SORRY! YOU LOOSE 👎"
          break;
          case "paper":
          result =  (computerchoice ==="rock") ?  " YOU WON ✌️" : "SORRY! YOU LOOSE 👎"
          break;
          case "scissor":
          result =  (computerchoice ==="paper") ?  " YOU WON ✌️" : "SORRY! YOU LOOSE 👎"
          break;
        }
    }
    
  playerdisplay.textContent = `Player: ${playerchoice}`;
  computerdisplay.textContent = `Computer: ${computerchoice}`;
  resultdisplay.textContent = result;

  switch(result){
    case " YOU WON✌️ ":
    resultdisplay.style.color = "green";
    break;
    case "SORRY! YOU LOOSE 👎":
    resultdisplay.style.color = "red";
    break;
    default:
    resultdisplay.style.color = "black";
  }
}
