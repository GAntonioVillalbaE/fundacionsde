function myFunction() {
  var x = document.getElementById("menutop");
  if (x.className === "filasnav") {
    x.className += " responsive";
  } else {
    x.className = "filasnav";
  }
}