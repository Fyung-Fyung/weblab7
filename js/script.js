function init(){
//add your javascrip between these two lines of code
document.getElementById("entrybutton").addEventListener("click", alertme);
function alertme(){
    var userinput = document.getElementById("entryinput".value);
    alert("Mutanda Effiong:"+ userinput);
    document.getElementById("textoutput").innerHTML = userinput;
}

window.addEventListener('load', init);
}
