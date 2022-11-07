
 var computerPoints = 0
 var userPoints = 0
function headsOrTails() {
    // we want to increment points, by default the computer chooses heads, so if a user clicks 
    //flip a coin and the output is tails, the user gets a point else if not the computer gets a point
    
    let coin = Math.floor((Math.random() * 2) + 1);
    let heads = (coin === 1);
  
   
    //let user = ""
    //let computer = ""
    if (heads === true) {
        document.getElementById("showMessage").innerHTML = "computer flipped heads, you lose!"
       computerPoints = computerPoints + 1
     
       document.getElementById("computerPoints").innerHTML = computerPoints;
    }
    else {
        document.getElementById("showMessage").innerHTML = "You flipped tails you win!"
        userPoints = userPoints + 1
        document.getElementById("userPoints").innerHTML = userPoints;

    }
}