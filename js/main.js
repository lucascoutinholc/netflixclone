const inputs = document.getElementsByClassName("box-lg");

const labels = document.getElementsByClassName("labelEmail");

const topValue1 = window.getComputedStyle(labels[0]).top;
const fontSizeValue1 = window.getComputedStyle(labels[0]).fontSize;

const topValue2 = window.getComputedStyle(labels[1]).top;
const fontSizeValue2 = window.getComputedStyle(labels[1]).fontSize;

inputs[0].onclick = function() {
  labels[0].style.top = "0.3rem";
  labels[0].style.fontSize = "0.8rem";
};

inputs[0].addEventListener("focusout", function() {
  labels[0].style.top = topValue1;
  labels[0].style.fontSize = fontSizeValue1;
});

inputs[1].onclick = function() {
  labels[1].style.top = "0.3rem";
  labels[1].style.fontSize = "0.8rem";
};

inputs[1].addEventListener("focusout", function() {
  labels[1].style.top = topValue2;
  labels[1].style.fontSize = fontSizeValue2;
});
