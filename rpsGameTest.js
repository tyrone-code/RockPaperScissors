
function rockPaperScissors(){
    let user = prompt("Enter either Rock paper or scissors");
    let computer = Math.floor((Math.random() * 3) + 1);
    let paper = (computer === 1); // paper is greater than equal to 10
    let scissors = (computer === 2); // scissors is less then 10 but not greater then 5
    let rock = (computer === 3);
   
    // rock is 1
    // paper is 2
    // scissors is 3
// if paper is greater then the value 10 paper wins else not
if (user === "rock" && paper === true){
    alert("computer chose paper you loose!");
    console.log(computer);
    console.log(paper);
    

}

else if (user === "rock" && paper === false){
    alert("computer choose scissors you win!");
    console.log(computer);
    console.log(paper);
}

else if (user === "paper" && scissors === true){
  alert("computer choose scissors you lose!");
    console.log(computer);
    console.log(scissors);
}
    
else if (user === "paper" && scissors === false){
       alert("computer choose rock you win!");
        console.log(computer);
        console.log(rock);
    }



else if (user === "scissors" && rock === true){
   alert("computer choose rock you lose");
    console.log(computer);
    console.log(rock);
    }


else if (user === "scissors" && rock === false){
    alert("computer choose paper you win!");
    console.log(computer);
    console.log(scissors);
        }


    
    





}




rockPaperScissors()
/*else if (user === "paper"){
    console.log("you enter paper");
    console.log(computer);
}

else if (user === "scissors"){
    console.log("you entered scissors");
    console.log(computer);
}

else{
    console.log("please enter a valid value");
    console.log(computer)
*/
