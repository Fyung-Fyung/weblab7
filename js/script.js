function init(){
//add your javascrip between these two lines of code

document.getElementById("entrybutton").addEventListener("click",alertme);

function alertme(){
  var input = document.getElementById("entryinput").value;
  alert("Mutanda Effiong: " + input);
  document.getElementById("textoutput").innerHTML = input;
}

}



window.addEventListener('load', init);