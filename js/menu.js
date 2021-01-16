AFRAME.registerComponent("highlight", {
  init: function() {
    
    console.log(this.el)
    var tutorialButton = (this.tutorialButton = this.el.querySelector(
      "#tutorialButton"
    ));

    var timerButton = (this.timerButton = this.el.querySelector(
      "#timerButton"
    ));

    this.onTutorialClicked = this.onTutorialClicked.bind(this);
    this.onTimerClicked = this.onTimerClicked.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.reset = this.reset.bind(this);

    var backgroundEl = document.querySelector("#background");
    backgroundEl.addEventListener("click", this.reset);

    tutorialButton.addEventListener("click", this.onTutorialClicked);
    tutorialButton.addEventListener("mouseenter", this.onMouseEnter);
    tutorialButton.addEventListener("mouseleave", this.onMouseLeave);

    timerButton.addEventListener("click", this.onTimerClicked);
    timerButton.addEventListener("mouseenter", this.onMouseEnter);
    timerButton.addEventListener("mouseleave", this.onMouseLeave);
  },

  onTutorialClicked: function(evt) {
    evt.target.pause();
    evt.target.setAttribute("material", "color", "#046de7");
    this.el.addState("clicked");
    var buttonEls = (this.buttonEls = this.el.querySelectorAll(".menu-button"));

    //Remove all UI Buttons from Magic Mirror
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].setAttribute("visible", false);
    }

    document.querySelector("#tutorial").setAttribute("visible", true);
    document
      .querySelector("#manipulateAnimation")
      .setAttribute("visible", true);
  },

  onTimerClicked: function(evt) {
    evt.target.pause();
    evt.target.setAttribute("material", "color", "#046de7");
    this.el.addState("clicked");
    var buttonEls = (this.buttonEls = this.el.querySelectorAll(".menu-button"));

    //Remove all UI Buttons from Magic Mirror
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].setAttribute("visible", false);
    }
  },

  onMouseEnter: function(evt) {
    try {
      var buttonEls = this.buttonEls;
      evt.target.setAttribute("material", "color", "#046de7");
      for (var i = 0; i < buttonEls.length; ++i) {
        if (evt.target === buttonEls[i]) {
          continue;
        }
        buttonEls[i].setAttribute("material", "color", "white");
      }
    } catch (exception) {}
  },

  onMouseLeave: function(evt) {
    if (this.el.is("clicked")) {
      return;
    }
    evt.target.setAttribute("material", "color", "white");
  },

  reset: function() {
    var buttonEls = this.buttonEls;
    for (var i = 0; i < buttonEls.length; ++i) {
      this.el.removeState("clicked");
      buttonEls[i].play();
      buttonEls[i].emit("mouseleave");
    }
  }
});
