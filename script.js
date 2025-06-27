function myFunction() {
  var x = document.getElementById("menutop");
  if (x.className === "barrasnav") {
    x.className += " responsive";
  } else {
    x.className = "barrasnav";
  }
}