const inputs = document.getElementsByClassName("box-lg");

const labels = document.getElementsByClassName("labelEmail");

const topValue1 = window.getComputedStyle(labels[0]).top;
const fontSizeValue1 = window.getComputedStyle(labels[0]).fontSize;

const topValue2 = window.getComputedStyle(labels[1]).top;
const fontSizeValue2 = window.getComputedStyle(labels[1]).fontSize;

const questions = document.getElementsByTagName("h3");

const closedAnswers = document.getElementsByClassName("closed");

const plusImages = document.querySelectorAll(".plusImage");

questions[0].onclick = function() {
  const display = window.getComputedStyle(closedAnswers[0]).display;

  if (display == "none") {
    closeAnswers();
    plusImages[0].style.transform = "rotate(45deg)";
    closedAnswers[0].style.display = "block";
  } else {
    closeAnswers();
    plusImages[0].style.transform = "none";
  }
}

questions[1].onclick = function() {
  const display = window.getComputedStyle(closedAnswers[1]).display;

  if (display == "none") {
    closeAnswers();
    plusImages[1].style.transform = "rotate(45deg)";
    closedAnswers[1].style.display = "block";
  } else {
    closeAnswers();
    plusImages[1].style.transform = "none";
  }
}

questions[2].onclick = function () {
  const display = window.getComputedStyle(closedAnswers[2]).display;

  if (display == "none") {
    closeAnswers();
    plusImages[2].style.transform = "rotate(45deg)";
    closedAnswers[2].style.display = "block";
  } else {
    closeAnswers();
    plusImages[2].style.transform = "none";
  }
}

questions[3].onclick = function () {
  const display = window.getComputedStyle(closedAnswers[3]).display;

  if (display == "none") {
    closeAnswers();
    plusImages[3].style.transform = "rotate(45deg)";
    closedAnswers[3].style.display = "block";
  } else {
    closeAnswers();
    plusImages[3].style.transform = "none";
  }
}

questions[4].onclick = function () {
  const display = window.getComputedStyle(closedAnswers[4]).display;

  if (display == "none") {
    closeAnswers();
    plusImages[4].style.transform = "rotate(45deg)";
    closedAnswers[4].style.display = "block";
  } else {
    closeAnswers();
    plusImages[4].style.transform = "none";
  }
}

questions[5].onclick = function () {
  const display = window.getComputedStyle(closedAnswers[5]).display;

  if (display == "none") {
    closeAnswers();
    plusImages[5].style.transform = "rotate(45deg)";
    closedAnswers[5].style.display = "block";
  } else {
    closeAnswers();
    plusImages[5].style.transform = "none";
  }
}

function closeAnswers() {
  for (let i = 0; i < questions.length; i++) {
    closedAnswers[i].style.display = "none";
    plusImages[i].style.transform = "none";
  }
}

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
