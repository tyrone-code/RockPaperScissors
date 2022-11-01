
function rockPaperScissors(){
    let user = prompt("Enter either Rock paper or scissors");
    let computer = Math.floor((Math.random() * 3) + 1);
    let paper = (computer === 1); // 
    let scissors = (computer === 2); // 
    let rock = (computer === 3);
   
    // rock is 1
    // paper is 2
    // scissors is 3

if (user === "rock" && paper === true){
    alert("computer chose paper you loose!");
    console.log(computer);
    console.log(paper);   

    }
else if (user === "rock" && rock === true){
    alert("computer chose rock aswell it is a draw!");
    console.log(computer);
    console.log(rock);   
}

else if (user === "rock" && paper === false){
    alert("computer chose scissors you win!");
    console.log(computer);
     

}

//_------------------------------------------------------- paper
else if (user === "paper" && scissors === true){
    alert("computer chose scissors you lose!");
    console.log(computer);

}

else if (user === "paper" && paper === true){
    alert("computer chose Paper aswell! it is a draw");
    console.log(computer);
     

}


else if (user === "paper" && rock === true){
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


rockPaperScissors();