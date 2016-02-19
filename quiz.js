
// --- Set the height input box as a variable ---- //

var heightInput = document.getElementById("height");


// --- Set the character input box as a variable  ------ //

var charInput = document.getElementById("char");


// ------------- Click on the "Grow Tree" button -------------- //

var growButton = document.getElementById("btn");

growButton.addEventListener("click", function() {

  verifyInputBeforeBuild();
});

// // ------------ Event listener for catching ENTER key press on HEIGHT ----------------//


  heightInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13)

    growButton.click();

});


// ------------ Event listener for catching ENTER key press on CHARACTER input ----------------//


  charInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13)

      growButton.click();

});


// ------------ Click on the CLEAR button ----------------//


var clearInput = document.getElementById("clr");

  clearInput.addEventListener("click", function() {

   alert("You pushed the clear button");
});



// ------------ Function that actually builds the tree in the console -----//

var buildTree = function(height, char) {

  for (var i = -1; height > 0; i++) {

    console.log(" ".repeat(height -=1) + char.repeat(i += 2));
      i -= 1;
  }
}

// ------------- Function that checks for input in both fields before building ------//

var verifyInputBeforeBuild = function() {
  if (heightInput.value === "" || charInput.value === "") {
    alert("Both fields need a value before we can build your tree.");
  }
  else if(isNaN(heightInput.value)) {
    alert("Please enter a number for your desired tree height.");
  }
  else {
    buildTree(heightInput.value, charInput.value);
  }
}






