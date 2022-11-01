
function rockPaperScissors(){
    //let user = prompt("Enter either Rock paper or scissors");
    let computer = Math.floor((Math.random() * 3) + 1);
    let paper = (computer === 1); // 
    let scissors = (computer === 2); // 
    let rock = (computer === 3);
    let buttonRock = document.getElementById("rock");
    let buttonPaper = document.getElementById("paper");
    let buttonScissors = document.getElementById("scissors");
   
    // rock is 1
    // paper is 2
    // scissors is 3
   
if (buttonRock && paper === true){
    alert("computer chose paper you loose!");
    console.log(computer);
    console.log(paper);   

    }
else if (buttonRock && rock === true){
    alert("computer chose rock aswell it is a draw!");
    console.log(computer);
    console.log(rock);   
}

else if (buttonRock && scissors === true){
    alert("computer chose scissors you win!");
    console.log(computer);
     

}

//_------------------------------------------------------- paper
else if (buttonPaper && scissors === true){
    alert("computer chose scissors you lose!");
    console.log(computer);

}

else if (buttonPaper && paper === true){
    alert("computer chose Paper aswell! it is a draw");
    console.log(computer);
     

}


else if (buttonPaper && rock === true){
    alert("computer chose rock you win!");
    console.log(computer);
}
//_------------------------------------------------------- scissors
else if (user === "scissors" && scissors === true){
    alert("computer chose scissors its a draw KLINK!");
    console.log(computer);

}

else if (user === "scissors" && rock === true){
    alert("computer chose Rock you lose!");
    console.log(computer);
     

}


else if (user === "scissors" && paper === true){
    alert("computer chose Paper you win!");
    console.log(computer);
     

}


}


//rockPaperScissors();


function Rock(){
      //let user = prompt("Enter either Rock paper or scissors");
    let computer = Math.floor((Math.random() * 3) + 1);
    let paper = (computer === 1); // 
    let scissors = (computer === 2); // 
    let rock = (computer === 3);
    let buttonRock = document.getElementById("rock");

    if (buttonRock && paper === true){
        alert("computer chose paper you loose!");
        console.log(computer);
        console.log(paper);   
    
        }
    else if (buttonRock && rock === true){
        alert("computer chose rock aswell it is a draw!");
        console.log(computer);
        console.log(rock);   
    }
    
    else if (buttonRock && scissors === true){
        alert("computer chose scissors you win!");
        console.log(computer);
         
    
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
      alert("computer chose paper its a a draw");
      console.log(computer);
      console.log(paper);   
  
      }
  else if (buttonPaper && rock === true){
      alert("computer chose rock you win!");
      console.log(computer);
      console.log(rock);   
  }
  
  else if (buttonPaper && scissors === true){
      alert("computer chose scissors you lose!");
      console.log(computer);
       
  
  }
}



function Rock(){
    //let user = prompt("Enter either Rock paper or scissors");
  let computer = Math.floor((Math.random() * 3) + 1);
  let paper = (computer === 1); // 
  let scissors = (computer === 2); // 
  let rock = (computer === 3);
  let buttonRock = document.getElementById("rock");

  if (buttonRock && paper === true){
      alert("computer chose paper you loose!");
      console.log(computer);
      console.log(paper);   
  
      }
  else if (buttonRock && rock === true){
      alert("computer chose rock aswell it is a draw!");
      console.log(computer);
      console.log(rock);   
  }
  
  else if (buttonRock && scissors === true){
      alert("computer chose scissors you win!");
      console.log(computer);
       
  
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
    alert("computer chose paper you win!");
    console.log(computer);
    console.log(paper);   

    }
else if (buttonScissors && rock === true){
    alert("computer chose rock you lose!");
    console.log(computer);
    console.log(rock);   
}

else if (buttonScissors && scissors === true){
    alert("computer chose scissors its a draw! klink!");
    console.log(computer);
     

}
}