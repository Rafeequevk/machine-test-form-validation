const fname = document.getElementById("fname").value;
const lname = document.getElementById("lname").value;
const error = document.getElementById("error");

function handleSubmit() {
  if ((fname = "")) {
    error.innerHTML = "name cannot be blank";
  }
}
