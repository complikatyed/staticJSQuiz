
// --- Set the height input box as a variable ---- //

var heightRequest = document.getElementById("height");


// --- Set the character input box as a variable  ------ //

var charRequest = document.getElementById("char");


// ------------- Click on the "Grow Tree" button -------------- //

var growButton = document.getElementById("btn");

growButton.addEventListener("click", function() {

  verifyInputBeforeBuild();
});

// // ------------ Event listener for catching ENTER key press on HEIGHT ----------------//


// var heightInput = document.getElementById("height");

//   heightInput.addEventListener("click", function() {

//   inputKeyUp();
// });

// // ------------ Event listener for catching ENTER key press on HEIGHT ----------------//


// var charInput = document.getElementById("char");

//   charInput.addEventListener("click", function() {

//   inputKeyUp();
// });

// // ------------ Function for catching ENTER key press  --------------------------//

// var inputKeyUp = function(e) {
//   //e.which = e.which || e.keyCode;
//   if(e.keyCode === 13) {     // keyCode 13 is the Enter key

//     verifyInputBeforeBuild();
//   }
// }


// ------------ Click on the CLEAR button ----------------//


var charInput = document.getElementById("clr");

  charInput.addEventListener("click", function() {

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
  if (heightRequest.value === "" || charRequest.value === "") {
    alert("Both fields need a value before we can build your tree.");
  }
  else if(isNaN(heightRequest.value)) {
    alert("Please enter a number for your desired tree height.");
  }
  else {
    buildTree(heightRequest.value, charRequest.value);
  }
}






