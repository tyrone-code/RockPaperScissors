
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

   
     if (buttonRock && paper === true){
        console.log(computer);
        console.log(paper);  
        computerPoints = computerPoints + 1
        document.getElementById("computerPoints").innerHTML = computerPoints;
        document.getElementById("paperImg").style.display = "block";
        document.getElementById("rockImg").style.display = "none";
        document.getElementById("scissorsImg").style.display = "none";
        
       
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
  document.getElementById("rock").style.display = "none";
  document.getElementById("scissors").style.display = "none";

  
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

function Scissors(){
  //let user = prompt("Enter either Rock paper or scissors");
let computer = Math.floor((Math.random() * 3) + 1);
let paper = (computer === 1); // 
let scissors = (computer === 2); // 
let rock = (computer === 3);
let buttonScissors = document.getElementById("scissors");
document.getElementById("rock").style.display = "none";
document.getElementById("paper").style.display = "none";

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

function showImagesRock() {
    document.getElementById("paper").style.display = "block";
    document.getElementById("scissors").style.display = "block";
    // --------------------------------------------------------

    //paper position after rock function is executed
    document.getElementById("paper").style.marginLeft = "8rem";
    document.getElementById("paper").style.marginTop = "-11rem";
    // -------------------------------------------------------
    // Scissors position after paper function is executed
    document.getElementById("scissors").style.marginLeft = "17rem";
    document.getElementById("scissors").style.marginTop = "-11rem";
    // -----------------------------------------------------------
    // hover effect....
    document.stylesheet[0].insertRule("#rockhover:hover {color:green}")
    document.stylesheet[0].insertRule("#paperhover:hover {color:green}")
    document.stylesheet[0].insertRule("#scissorshover:hover {color:green}")
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


  }

  // .computer-image-position{
  //   margin-left:60rem;
  //   position:absolute;
  //   margin-top:-12rem;
//   var foo = document.createElement("div");
//   foo.className = "foo";
//   foo.innerHTML = "This is foo, hover me";
//   document.body.appendChild(foo);
  
//   var style = document.createElement("style");
//   // Pick a color at random
//   var color = ["red", "blue", "green"][Math.floor(Math.random() * 3)];
//   style.appendChild(
//       document.createTextNode(
//             ".foo:hover { background-color: " + color + " }")
//   );
//   document.querySelector("head").appendChild(style);

