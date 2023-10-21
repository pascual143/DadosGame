function lanzaDados() {
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

  document.getElementById('dado1').innerHTML = randomNumber1;
  document.getElementById('dado2').innerHTML = randomNumber2;

}
