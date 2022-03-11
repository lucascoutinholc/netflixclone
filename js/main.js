const inputs = document.getElementsByClassName("box-lg");

const labels = document.getElementsByClassName("labelEmail");

inputs[0].onclick = function() {
  labels[0].style.top = "0.3rem";
  labels[0].style.fontSize = "0.8rem";
};

inputs[0].addEventListener("focusout", function() {
  labels[0].style.top = "1.1rem";
  labels[0].style.fontSize = "1.1rem";
});

inputs[1].onclick = function() {
  labels[1].style.top = "0.3rem";
  labels[1].style.fontSize = "0.8rem";
};

inputs[1].addEventListener("focusout", function() {
  labels[1].style.top = "1.1rem";
  labels[1].style.fontSize = "1.1rem";
});
