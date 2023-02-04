

document.getElementById("name-input").addEventListener("input", function() {
  let nameInput = document.getElementById("name-input").value;
  let nameOutput = document.getElementById("name-output");
  
  if (nameInput === "") {
    nameOutput.innerHTML = "Anonymous";
  } else {
    nameOutput.innerHTML = nameInput;
  }
});