const form = document.getElementById("myform");
const fName = document.getElementById("fName");
const email = document.getElementById("Email");
const dob = document.getElementById("DOB");
const password = document.getElementById("password");
const phNo = document.getElementById("phNo");
const country = document.getElementById("Country");
const address = document.getElementById("address");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var phNoFormat = / ^[0][1-9]\d{9}$|^[1-9]\d{9}$/; 
var isOk = false;
//  / ^\d{10}$/ ;
const validateInputs = () => {
  let emailValue = email.value;

  if (fName.value.trim() == "") {
    document.getElementById("fNameErr").innerHTML = "firstname cannot be empty";
  } else if (fName.value.trim().length < 3) {
    document.getElementById("fNameErr").innerHTML =
      "firstname must be more than 3 letters";
  } else {
    document.getElementById("fNameErr").innerHTML = "";
    localStorage.setItem("name",fName.value);
  }
  if (email.value == "") {
    document.getElementById("emailErr").innerHTML = "Email cannot be empty";
  } else if (!emailValue.match(mailformat)) {
    document.getElementById("emailErr").innerHTML =
      "Please enter a valid Email ";
  } else {
    document.getElementById("emailErr").innerHTML = "";
  }
  if (dob.value == "") {
    document.getElementById("dobErr").innerHTML =
      "Date of Birth cannot be empty";
  } else {
    document.getElementById("dobErr").innerHTML = "";
  }
  if (password.value == "") {
    document.getElementById("passwordErr").innerHTML =
      "Password cannot be empty";
  } else if (!password.value.match(passFormat)) {
    document.getElementById("passwordErr").innerHTML =
      "Please enter a valid Password ";
    console.log(password.value);
  } else {
    document.getElementById("passwordErr").innerHTML = "";
  }
  if (phNo.value == "") {
    document.getElementById("phNoErr").innerHTML =
      "Phone Number cannot be empty";
  } else if (!phNo.value.match(phNoFormat)) {
    document.getElementById("phNoErr").innerHTML =
      "Please enter a valid Phone Number ";
  } else {
    document.getElementById("phNoErr").innerHTML = "";
  }
  if (country.value == "") {
    document.getElementById("countryErr").innerHTML = "Please select a option ";
  }
  else{
    document.getElementById("countryErr").innerHTML = "";
  }
  if (address.value == "") {
    document.getElementById("addressErr").innerHTML = "Address cannot be empty";
  } 
  else if (!address.value == "") {
    document.getElementById("addressErr").innerHTML = "";
  }
  else{
    return 
  }
  // document.location.href ="./hello.html";
};

form.addEventListener("submit", function(event){
  event.preventDefault();
  validateInputs();
})

// document.querySelector("button").addEventListener("click", (e) => {
//   e.preventDefault();
//   validateInputs();

// });
