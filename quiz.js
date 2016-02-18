
// --- Set the height input box as a variable ---- //

var heightRequest = document.getElementById("height");


// --- Set the character input box as a variable  ------ //

var charRequest = document.getElementById("char");


// ------------- Click on the "Grow Tree" button -------------- //

var growButton = document.getElementById("btn");
var seed = document.getElementById("seed");

growButton.addEventListener("click", function() {

   // ----------- Check for inputs in both fields ----------------//
  if (heightRequest.value === "" || charRequest.value === "") {
    alert("Both fields need a value, dumb-ass!")
  }
  else {
    buildTree(heightRequest.value, charRequest.value);
  }

});

// ------------ Function for catching ENTER key press ----------------//

var inputKeyUp = function(e) {
  e.which = e.which || e.keyCode;
  if(e.which === 13) {
    buildTree(heightRequest.value, charRequest.value);
  }
}


// ------------ Function that actually builds the tree in the console -----//

var buildTree = function(height, char) {

  for (var i = -1; height > 0; i++) {

    console.log(" ".repeat(height -=1) + char.repeat(i += 2));
      i -= 1;
  }
}



