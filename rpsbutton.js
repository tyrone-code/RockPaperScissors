const message = 'Hello world' // Try edit me

// Update header text
//document.querySelector('#header').innerHTML = message
function randInt(){
  let randNum = Math.floor(Math.random() * 100);
  document.querySelector('#header').innerHTML = randNum
  if (randNum > 50){
    document.getElementById('>50').innerHTML = "greater than 50!" 
  }
  else document.getElementById('>50').innerHTML = "less then 50!" 
}
