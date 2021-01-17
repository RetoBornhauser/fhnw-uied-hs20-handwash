var countDownEntity = null;
var duration = 0;
var refreshIntervalId;

AFRAME.registerComponent("timer-container", {
  init: function() {
    var timerStartButton = (this.timerStartButton = this.el.querySelector(
      "#timerStartButton"
    ));

    this.onTimerStartButtonClicked = this.onTimerStartButtonClicked.bind(this);

    timerStartButton.addEventListener("click", this.onTimerStartButtonClicked);
  },

  onTimerStartButtonClicked: function(evt) {
    startTimer(duration, countDownEntity);
  }
});

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  this.refreshIntervalId = setInterval(function() {
    seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.setAttribute("count-down", seconds);

    showStep(seconds);
    if (--timer < 0) {
      clearInterval(this.refreshIntervalId);
      timer = duration;
      display.setAttribute("count-down", 30);
    }
  }, 1000);
}

function resetTimer(countDownEntity) {}

window.onload = function() {
  countDownEntity = document.getElementById("timer");
  duration = countDownEntity.getAttribute("count-down");
};

function showStep(seconds) {
  document.querySelector("#timerStep").setAttribute("visible", true);
  var hands = document.querySelector("#manipulateAnimation");
  document
      .querySelector("#manipulateAnimation")
      .setAttribute("visible", true);

  if (seconds > 25) {
    document
      .querySelector("#timerStep")
      .setAttribute("value", "1. Wasser marsch");
    hands.setAttribute("animation-mixer", "clip: one");
  } else if (seconds <= 25 && seconds > 20) {
    document.querySelector("#timerStep").setAttribute("value", "2. Einseifen");
    hands.setAttribute("animation-mixer", "clip: two");
  } else if (seconds <= 20 && seconds > 15) {
    document
      .querySelector("#timerStep")
      .setAttribute("value", "3. Handflaechen");
    hands.setAttribute("animation-mixer", "clip: two");
  } else if (seconds <= 15 && seconds > 10) {
    document
      .querySelector("#timerStep")
      .setAttribute("value", "4. Handruecken");
    hands.setAttribute("animation-mixer", "clip: four");
  } else if (seconds <= 10 && seconds > 5) {
    document
      .querySelector("#timerStep")
      .setAttribute("value", "5. Fingerspitzen");
    hands.setAttribute("animation-mixer", "clip: five");
  } else if (seconds <= 5 && seconds > 0) {
    document.querySelector("#timerStep").setAttribute("value", "6. Trocknen");
    hands.setAttribute("animation-mixer", "clip: six");
  } else {
    document
      .querySelector("#timerStep")
      .setAttribute("value", "1. Wasser marsch");
    hands.setAttribute("animation-mixer", "clip: null");
    document.querySelector("#timerStep").setAttribute("visible", false);
  }
}
