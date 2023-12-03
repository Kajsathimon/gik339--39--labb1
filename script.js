<<<<<<< HEAD
const checkbox = document.getElementById("divStyle"); //deklarerar varabeln checkbox med const och hämtar med id divStyle

console.log(checkbox); //ger output om checkboxen till konsolen

const textFields = document.querySelectorAll(".textfield");

console.log(textFields); //plural på grund av queryselectorall

const button = document.getElementsByTagName("button");

console.log(button);

const divBox = document.getElementById("divBox");

console.log(divBox);


function handleEvent(e) {
  console.log("Avsändare:", e.target);
  const name = e.target.name;
  const value = e.target.value;
  const html = `<p>Fältet ${name} har värdet ${value}</p>`;
  divBox.insertAdjacentHTML("afterbegin", html); //Infogar den skapade HTML-strängen i div-elementet före dess befintliga innehåll. Eftersom vi använde afterbegin kommer alltid ny text läggas överst i rutan. 
}

//Eventlyssnare för checkbox
checkbox.addEventListener("change", function () {
  const colorInput = document.getElementById("color");
  const colorValue = colorInput.value;
  divBox.style.backgroundColor = colorValue;
  if (colorValue.trim() !== "") {
    divBox.style.backgroundColor = colorValue;
    }
});

//Eventlyssnare för textFields
textFields.forEach(function (textfield) {
  textfield.addEventListener("input", handleEvent);
  textfield.addEventListener("blur", handleEvent);
});

// Eventlyssnare för knapp
button[0].addEventListener("click", function () {
  divBox.remove(); // Remove the div element
});


=======
const checkbox = document.getElementById('divStyle');

console.log(checkbox);

const textfields = document.querySelectorAll('.textfield');

console.log(textfields);

const button = document.getElementsByTagName('button');
>>>>>>> ab034d74baa3dcf8b46c4656601459aeedd83bb8
