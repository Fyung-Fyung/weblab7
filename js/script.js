function init(){
//add your javascrip between these two lines of code
function init(){
  // Function to run when the button is clicked
  function runEvent() {
      // 1. Get the value from the text input field
      // CHECK YOUR HTML: Replace 'REPLACE_WITH_INPUT_ID' with the actual ID of your <input> tag.
      var inputValue = document.getElementById("REPLACE_WITH_INPUT_ID").value;

      // 2. Show the alert with your name and the input value
      alert("Your Name: " + inputValue);

      // 3. Change the headline (h2) text to the input value
      // Assuming 'demo' is the ID of your h2 based on your previous code.
      document.getElementById("demo").innerHTML = inputValue;
  }

  // Add listener to the button (assuming 'myBtn' is the button ID)
  document.getElementById("myBtn").addEventListener("click", runEvent);
}

window.addEventListener('load', init);
}
