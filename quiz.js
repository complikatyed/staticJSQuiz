
// --- Set the height input box as a variable ---- //

var heightRequest = document.getElementById("height");


// --- Set the character input box as a variable  ------ //

var charRequest = document.getElementById("char");


// ------------- Click on the "Grow Tree" button -------------- //

var growButton = document.getElementById("btn");

growButton.addEventListener("click", function() {

  verifyInputBeforeBuild();
});

// ------------ Function for catching ENTER key press ----------------//

var inputKeyUp = function(e) {
  e.which = e.which || e.keyCode;
  if(e.which === 13) {     // keyCode 13 is the Enter key

    verifyInputBeforeBuild();
  }
}


// ------------ Function that actually builds the tree in the console -----//

var buildTree = function(height, char) {

  for (var i = -1; height > 0; i++) {

    console.log(" ".repeat(height -=1) + char.repeat(i += 2));
      i -= 1;
  }
}

// ------------- Function that checks for input in both fields before building ------//

var verifyInputBeforeBuild = function() {
  if (heightRequest.value === "" || charRequest.value === "") {
    alert("Both fields need a value before we can build your tree.")
  }
  else {
    buildTree(heightRequest.value, charRequest.value);
  }
}





