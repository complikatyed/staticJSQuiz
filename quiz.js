// --- Set the height input box as a variable ---- //

var heightInput = document.getElementById("height");


// --- Set the character input box as a variable  ------ //

var charInput = document.getElementById("char");


// Create tree object



tree = {

height: "",
char: ""

};

tree.height = heightInput.value;
tree.char = charInput.value;


// ------------- Click on the "Grow Tree" button -------------- //

var growButton = document.getElementById("btn");

growButton.addEventListener("click", function() {

  tree.height = heightInput.value;
  tree.char = charInput.value;

  verifyInputBeforeBuild(tree);

});


// ------------ Event listener for catching ENTER key press on HEIGHT ----------------//


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

   clearPage();
});

// ------------- Function that clears the two inputs ---------//

var clearPage = function() {
  heightInput.value = "";
  charInput.value = "";
}

// ------------ Function that actually builds the tree in the console ---------------//

var buildTree = function(myObj) {
  var height = myObj.height;
  var char = myObj.char;

  for (var i = -1; height > 0; i++) {

    console.log(" ".repeat(height -=1) + char.repeat(i += 2));

      i -= 1;
  }
  clearPage(myObj);
}

// ------------- Function that checks for input in both fields before building ------//


var verifyInputBeforeBuild = function(myObj) {

  if (myObj.height === "" || myObj.char === "") {
    alert("Both fields need a value before we can build your tree.");
  }
  else if(isNaN(myObj.height)) {
    alert("Please enter a number for your desired tree height.");
  }
  else if(myObj.height.length !== 1) {
    alert("Please enter a number from 1-9.");
  }
  else if(myObj.char.length !== 1) {
    alert("Please choose only one character.");
  }
  else {
    buildTree(myObj);
  }
}






