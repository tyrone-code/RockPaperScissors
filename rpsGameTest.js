
// function rockPaperScissors(){
//     //let user = prompt("Enter either Rock paper or scissors");
//     let computer = Math.floor((Math.random() * 3) + 1);
//     let paper = (computer === 1); // 
//     let scissors = (computer === 2); // 
//     let rock = (computer === 3);
//     let buttonRock = document.getElementById("rock");
//     let buttonPaper = document.getElementById("paper");
//     let buttonScissors = document.getElementById("scissors");
   
//     // rock is 1
//     // paper is 2
//     // scissors is 3
   
// if (buttonRock && paper === true){
//     document.getElementById("computerPoints").innerHTML = "computer gets a point";
//     alert("computer chose paper you loose!");
    
//     }
// else if (buttonRock && rock === true){
//     alert("computer chose rock aswell it is a draw!");
      
// }

// else if (buttonRock && scissors === true){
//     alert("computer chose scissors you win!");
//     document.getElementById("playerPoints").innerHTML = "you got a point!";
//    // document.getElementById("demo").innerHTML = "I have changed!";


// }

// //_------------------------------------------------------- paper
// else if (buttonPaper && scissors === true){
//     alert("computer chose scissors you lose!");

// }

// else if (buttonPaper && paper === true){
//     alert("computer chose Paper aswell! it is a draw");
     

// }


// else if (buttonPaper && rock === true){
//     alert("computer chose rock you win!");
// }
// //_------------------------------------------------------- scissors
// else if (user === "scissors" && scissors === true){
//     alert("computer chose scissors its a draw KLINK!");

// }

// else if (user === "scissors" && rock === true){
//     alert("computer chose Rock you lose!");
     

// }


// else if (user === "scissors" && paper === true){
//     alert("computer chose Paper you win!");
     

// }


// }



var computerPoints = 0
var userPoints = 0

     
function Rock(){
      //let user = prompt("Enter either Rock paper or scissors");
    let computer = Math.floor((Math.random() * 3) + 1);
    let paper = (computer === 1); // 
    let scissors = (computer === 2); // 
    let rock = (computer === 3);
    let buttonRock = document.getElementById("rock");
   
     if (buttonRock && paper === true){
        console.log(computer);
        console.log(paper);  
        computerPoints = computerPoints + 1
        document.getElementById("computerPoints").innerHTML = computerPoints;
        document.getElementById("paperImg").style.display = "block";
        document.getElementById("rockImg").style.display = "hidden";
        document.getElementById("scissorsImg").style.display = "hidden";
        }
    else if (buttonRock && rock === true){
        document.getElementById("rockImg").style.display = "block";
        document.getElementById("paperImg").style.display = "none";
        document.getElementById("scissorsImg").style.display = "none";
    }
    
    else if (buttonRock && scissors === true){
        console.log(computer);
        userPoints = userPoints + 1
        document.getElementById("userPoints").innerHTML = userPoints;
        document.getElementById("scissorsImg").style.display = "block";
        document.getElementById("rockImg").style.display = "none";
        document.getElementById("paperImg").style.display = "none";
    }

}


function Paper(){
    //let user = prompt("Enter either Rock paper or scissors");
  let computer = Math.floor((Math.random() * 3) + 1);
  let paper = (computer === 1); // 
  let scissors = (computer === 2); // 
  let rock = (computer === 3);
  let buttonPaper = document.getElementById("paper");
  
  if (buttonPaper && paper === true){
      console.log(computer);
      console.log(paper);   
      document.getElementById("paperImg").style.display = "block";
      document.getElementById("rockImg").style.display = "none";
      document.getElementById("scissorsImg").style.display = "none";
      }
  else if (buttonPaper && rock === true){
      console.log(computer);
      console.log(rock);   
      userPoints = userPoints + 1
      document.getElementById("userPoints").innerHTML = userPoints;
      document.getElementById("paperImg").style.display = "none";
      document.getElementById("rockImg").style.display = "block";
      document.getElementById("scissorsImg").style.display = "none";
  }
  
  else if (buttonPaper && scissors === true){
      console.log(computer);
      computerPoints = computerPoints + 1
      document.getElementById("computerPoints").innerHTML = computerPoints;
      document.getElementById("paperImg").style.display = "none";
      document.getElementById("rockImg").style.display = "none";
      document.getElementById("scissorsImg").style.display = "block";
       
  
  }
}

function Scissor(){
  //let user = prompt("Enter either Rock paper or scissors");
let computer = Math.floor((Math.random() * 3) + 1);
let paper = (computer === 1); // 
let scissors = (computer === 2); // 
let rock = (computer === 3);
let buttonScissors = document.getElementById("scissor");

if (buttonScissors && paper === true){
    console.log(computer);
    console.log(paper);
    userPoints = userPoints + 1
    document.getElementById("userPoints").innerHTML = userPoints;
    document.getElementById("paperImg").style.display = "block";
    document.getElementById("rockImg").style.display = "none";
    document.getElementById("scissorsImg").style.display = "none";

    }
else if (buttonScissors && rock === true){
    console.log(computer);
    console.log(rock);
    computerPoints = computerPoints + 1
    document.getElementById("computerPoints").innerHTML = computerPoints;
    document.getElementById("paperImg").style.display = "none";
    document.getElementById("rockImg").style.display = "block";
    document.getElementById("scissorsImg").style.display = "none";

}

else if (buttonScissors && scissors === true){
    console.log(computer);
    document.getElementById("paperImg").style.display = "none";
    document.getElementById("rockImg").style.display = "none";
    document.getElementById("scissorsImg").style.display = "block";
     

}
}

// program to display a text using setTimeout method
// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

setTimeout(Rock, 3000);