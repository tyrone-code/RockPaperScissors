
var computerPoints = 0
var userPoints = 0



function Rock(){
      //let user = prompt("Enter either Rock paper or scissors");
    let computer = Math.floor((Math.random() * 3) + 1);
    let paper = (computer === 1); // 
    let scissors = (computer === 2); // 
    let rock = (computer === 3);
    let buttonRock = document.getElementById("rock");
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissors").style.display = "none";
    let endResult = 5
    if (computerPoints === endResult){
      alert("You lose!")
      document.getElementById("computerPoints").innerHTML = 0
      document.getElementById("userPoints").innerHTML = 0
      window.location.reload(true)

    }
    else if (userPoints === endResult){
      alert("You win!")
      document.getElementById("computerPoints").innerHTML = 0
      document.getElementById("userPoints").innerHTML = 0
      window.location.reload(true)
    }
   
     else if (buttonRock && paper === true){
        console.log(computer);
        console.log(paper);  
        computerPoints = computerPoints + 1
        document.getElementById("computerPoints").innerHTML = computerPoints;
        document.getElementById("loseMessage").innerHTML = "Computer chose paper you lose!!!";
        document.getElementById("loseMessage").style.display = "block"
        document.getElementById("paperImg").style.display = "block";
        document.getElementById("rockImg").style.display = "none";
        document.getElementById("scissorsImg").style.display = "none";

        
       
        }
    else if (buttonRock && rock === true){
        document.getElementById("rockImg").style.display = "block";
        document.getElementById("paperImg").style.display = "none";
        document.getElementById("scissorsImg").style.display = "none";
        document.getElementById("drawMessage").innerHTML = "Computer chose rock as well it is a draw!!";
        document.getElementById("drawMessage").style.display = "block"
    }
    
    else if (buttonRock && scissors === true){
        console.log(computer);
        userPoints = userPoints + 1
        document.getElementById("userPoints").innerHTML = userPoints;
        document.getElementById("scissorsImg").style.display = "block";
        document.getElementById("rockImg").style.display = "none";
        document.getElementById("paperImg").style.display = "none";
        document.getElementById("winMessage").innerHTML = "Computer chose scissors you win!";
        document.getElementById("winMessage").style.display = "block"
    }
 

}

// 


function Paper(){
    //let user = prompt("Enter either Rock paper or scissors");
  let computer = Math.floor((Math.random() * 3) + 1);
  let paper = (computer === 1); // 
  let scissors = (computer === 2); // 
  let rock = (computer === 3);
  let buttonPaper = document.getElementById("paper");
  let endResult = 5
  document.getElementById("rock").style.display = "none";
  document.getElementById("scissors").style.display = "none";
  if (computerPoints === endResult){
    alert("You lose!")
    document.getElementById("computerPoints").innerHTML = 0
    document.getElementById("userPoints").innerHTML = 0
    window.location.reload(true)

  }
  else if (userPoints === endResult){
    alert("You win!")
    document.getElementById("computerPoints").innerHTML = 0
    document.getElementById("userPoints").innerHTML = 0
    window.location.reload(true)
  }
  
  else if (buttonPaper && paper === true){
      console.log(computer);
      console.log(paper);   
      document.getElementById("paperImg").style.display = "block";
      document.getElementById("rockImg").style.display = "none";
      document.getElementById("scissorsImg").style.display = "none";
      document.getElementById("drawMessage").innerHTML = "Computer chose paper as well it is a draw!!";
      document.getElementById("drawMessage").style.display = "block"
      }
  else if (buttonPaper && rock === true){
      console.log(computer);
      console.log(rock);   
      userPoints = userPoints + 1
      document.getElementById("userPoints").innerHTML = userPoints;
      document.getElementById("paperImg").style.display = "none";
      document.getElementById("rockImg").style.display = "block";
      document.getElementById("scissorsImg").style.display = "none";
      document.getElementById("winMessage").innerHTML = "Computer chose rock you win!";
      document.getElementById("winMessage").style.display = "block"
  }
  
  else if (buttonPaper && scissors === true){
      console.log(computer);
      computerPoints = computerPoints + 1
      document.getElementById("computerPoints").innerHTML = computerPoints;
      document.getElementById("paperImg").style.display = "none";
      document.getElementById("rockImg").style.display = "none";
      document.getElementById("scissorsImg").style.display = "block";
      document.getElementById("loseMessage").innerHTML = "Computer chose scissors you lose!";
      document.getElementById("loseMessage").style.display = "block"
       
  
  }
}



function Scissors(){
  //let user = prompt("Enter either Rock paper or scissors");
let computer = Math.floor((Math.random() * 3) + 1);
let paper = (computer === 1); // 
let scissors = (computer === 2); // 
let rock = (computer === 3);
let endResult = 5
let buttonScissors = document.getElementById("scissors");
document.getElementById("rock").style.display = "none";
document.getElementById("paper").style.display = "none";
if (computerPoints === endResult){
  alert("You lose!")
  document.getElementById("computerPoints").innerHTML = 0
  document.getElementById("userPoints").innerHTML = 0
  window.location.reload(true)

}
else if (userPoints === endResult){
  alert("You win!")
  document.getElementById("computerPoints").innerHTML = 0
  document.getElementById("userPoints").innerHTML = 0
  window.location.reload(true)
}

else if (buttonScissors && paper === true){
    console.log(computer);
    console.log(paper);
    userPoints = userPoints + 1
    document.getElementById("userPoints").innerHTML = userPoints;
    document.getElementById("paperImg").style.display = "block";
    document.getElementById("rockImg").style.display = "none";
    document.getElementById("scissorsImg").style.display = "none";
    document.getElementById("winMessage").innerHTML = "Computer chose paper you win!";
    document.getElementById("winMessage").style.display = "block"

    }
else if (buttonScissors && rock === true){
    console.log(computer);
    console.log(rock);
    computerPoints = computerPoints + 1
    document.getElementById("computerPoints").innerHTML = computerPoints;
    document.getElementById("paperImg").style.display = "none";
    document.getElementById("rockImg").style.display = "block";
    document.getElementById("scissorsImg").style.display = "none";
    document.getElementById("loseMessage").innerHTML = "Computer chose rock you lose!";
    document.getElementById("loseMessage").style.display = "block"

}

else if (buttonScissors && scissors === true){
    console.log(computer);
    document.getElementById("paperImg").style.display = "none";
    document.getElementById("rockImg").style.display = "none";
    document.getElementById("scissorsImg").style.display = "block";
    document.getElementById("drawMessage").innerHTML = "Computer chose scissors as well it is a draw!!";
    document.getElementById("drawMessage").style.display = "block"

}
}



function showImagesRock() {
    document.getElementById("paper").style.display = "block";
    document.getElementById("scissors").style.display = "block";
    // --------------------------------------------------------

// Computer will display none once function is executed so that it doesnt stay on screen







    //paper position after rock function is executed
    document.getElementById("paper").style.marginLeft = "8rem";
    document.getElementById("paper").style.marginTop = "-11rem";
    // -------------------------------------------------------
    // Scissors position after paper function is executed
    document.getElementById("scissors").style.marginLeft = "17rem";
    document.getElementById("scissors").style.marginTop = "-11rem";
    // -----------------------------------------------------------
    // hover effect....
    document.getElementById("rockImg").style.display = "none";
    document.getElementById("paperImg").style.display = "none";
    document.getElementById("scissorsImg").style.display = "none";
// ---------------------------------------------------------------------
document.getElementById("loseMessage").style.display = "none"
document.getElementById("drawMessage").style.display = "none"
document.getElementById("winMessage").style.display = "none"
  }


  function showImagesPaper() {
    document.getElementById("rock").style.display = "block";
    document.getElementById("scissors").style.display = "block";
//paper position after paper function is executed
document.getElementById("paper").style.marginLeft = "8rem";
document.getElementById("paper").style.marginTop = "-11rem";
 // Scissors position after paper function is executed
 document.getElementById("scissors").style.marginLeft = "17rem";
 document.getElementById("scissors").style.marginTop = "-11rem";
 //-------------------------------------------------------------------
 document.getElementById("rockImg").style.display = "none";
 document.getElementById("paperImg").style.display = "none";
 document.getElementById("scissorsImg").style.display = "none";
    
// ---------------------------------------------------
document.getElementById("loseMessage").style.display = "none"
document.getElementById("drawMessage").style.display = "none"
document.getElementById("winMessage").style.display = "none"
   
  }




  function showImagesScissors() {
    document.getElementById("paper").style.display = "block";
    document.getElementById("rock").style.display = "block";
    document.getElementById("paper").style.marginLeft = "8rem";
document.getElementById("paper").style.marginTop = "-11rem";
 // Scissors position after paper function is executed
 document.getElementById("scissors").style.marginLeft = "17rem";
 document.getElementById("scissors").style.marginTop = "-11rem";
 //-------------------------------------------------------------------
 document.getElementById("rockImg").style.display = "none";
 document.getElementById("paperImg").style.display = "none";
 document.getElementById("scissorsImg").style.display = "none";
 //------------------------------------------------------------
 document.getElementById("loseMessage").style.display = "none"
document.getElementById("drawMessage").style.display = "none"
document.getElementById("winMessage").style.display = "none"

  }

// Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }