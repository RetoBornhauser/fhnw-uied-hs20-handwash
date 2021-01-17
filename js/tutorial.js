var index = 0;

AFRAME.registerComponent("tutorial", {
  init: function() {
   
    var previousStepButton = (this.previousStepButton = this.el.querySelector(
      "#previousStep"
    ));

    var nextStepButton = (this.nextStepButton = this.el.querySelector(
      "#nextStep"
    ));

   

    this.onPreviousStepButtonClicked = this.onPreviousStepButtonClicked.bind(
      this
    );
    this.onNextStepButtonClicked = this.onNextStepButtonClicked.bind(this);

    
    previousStepButton.addEventListener(
      "click",
      this.onPreviousStepButtonClicked
    );
    nextStepButton.addEventListener("click", this.onNextStepButtonClicked);

    var steps = (this.steps = this.el
      .querySelector("#steps")
      .querySelectorAll("a-text"));

    steps[0].addState("activeStep");
    setAnimation();
  },

  

  onPreviousStepButtonClicked: function(evt) {
    var steps = (this.steps = this.el
      .querySelector("#steps")
      .querySelectorAll("a-text"));

    for (var i = 0; i < steps.length; ++i) {
      if (steps[i].is("activeStep")) {
        steps[i].setAttribute("width", 1);
        steps[i].removeState("activeStep");
        index = i -1;
      }
    }

    steps[index].addState("activeStep");
    steps[index].setAttribute("width", 1.4);
    setAnimation()

  },

  onNextStepButtonClicked: function(evt) {
    var steps = (this.steps = this.el
      .querySelector("#steps")
      .querySelectorAll("a-text"));

    for (var i = 0; i < steps.length; ++i) {
      if (steps[i].is("activeStep")) {
        steps[i].setAttribute("width", 1);
        steps[i].removeState("activeStep");
        index = i + 1;
      }
    }

    steps[index].addState("activeStep");
    steps[index].setAttribute("width", 1.4);
    setAnimation();
  }
});

function setAnimation() {
  var hands = document.querySelector("#manipulateAnimation");

  if (index === 0) {
    hands.setAttribute("animation-mixer", "clip: one");

    document
      .querySelector("#previousStepContainer")
      .setAttribute("visible", false);
  }

  if (index === 1) {
    hands.setAttribute("animation-mixer", "clip: two");
     document
      .querySelector("#previousStepContainer")
      .setAttribute("visible", true);
  }

  if (index === 2) {
    hands.setAttribute("animation-mixer", "clip: two");
  }

  if (index === 3) {
    hands.setAttribute("animation-mixer", "clip: four");
  }

  if (index === 4) {
    hands.setAttribute("animation-mixer", "clip: five");
    document.querySelector("#nextStepContainer").setAttribute("visible", true);
  }

  if (index === 5) {
    hands.setAttribute("animation-mixer", "clip: six");
    document.querySelector("#nextStepContainer").setAttribute("visible", false);
  }
}
