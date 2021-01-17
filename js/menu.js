AFRAME.registerComponent("highlight", {
  init: function() {
    var backToMenuButton = (this.backToMenuButton = this.el.querySelector(
      "#backToMenuButton"
    ));

    var tutorialButton = (this.tutorialButton = this.el.querySelector(
      "#tutorialButton"
    ));

    var timerButton = (this.timerButton = this.el.querySelector(
      "#timerButton"
    ));

    this.onTutorialClicked = this.onTutorialClicked.bind(this);
    this.onTimerClicked = this.onTimerClicked.bind(this);
    this.onBackToMenuClicked = this.onBackToMenuClicked.bind(this);

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

    backToMenuButton.addEventListener("click", this.onBackToMenuClicked);
  },
  
  onBackToMenuClicked: function(evt) {
    var buttonEls = (this.buttonEls = document.querySelectorAll(
      ".menu-button"
    ));
    document.querySelector("#menu").removeState("clicked");

    //Add all UI Buttons to Magic Mirror
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].setAttribute("visible", true);
      buttonEls[i].play();
      buttonEls[i].emit("mouseleave");
    }

    document.querySelector("#tutorial").setAttribute("visible", false);
     document.querySelector("#timer-container").setAttribute("visible", false);
    document
      .querySelector("#manipulateAnimation")
      .setAttribute("visible", false);
     document
      .querySelector("#manipulateAnimation")
      .setAttribute("animation-mixer", "clip: four");
    document
      .querySelector("#backToMenuContainer")
      .setAttribute("visible", false);
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

    document
      .querySelector("#backToMenuContainer")
      .setAttribute("visible", true);
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
    
  
    document
      .querySelector("#backToMenuContainer")
      .setAttribute("visible", true);
     

    document.querySelector("#timer-container").setAttribute("visible", true);
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
