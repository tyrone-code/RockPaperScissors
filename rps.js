const message = 'Hello world' // Try edit me

// Update header text
//document.querySelector('#header').innerHTML = message
function randInt(){
  var randNum = Math.floor(Math.random() * 100);
  document.querySelector('#header').innerHTML = randNum
}
if (randNum > 50){
  console.log("oui")
}
// Log to console
console.log(message)