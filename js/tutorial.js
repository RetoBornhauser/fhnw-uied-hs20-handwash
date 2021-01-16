var index = 0

AFRAME.registerComponent("tutorial", {
  init: function() {
    
    var backToMenuButton = (this.backToMenuButton = this.el.querySelector(
      "#backToMenuButton"
    ));

    var previousStepButton = (this.previousStepButton = this.el.querySelector(
      "#previousStep"
    ));

    var nextStepButton = (this.nextStepButton = this.el.querySelector(
      "#nextStep"
    ));

    this.onBackToMenuClicked = this.onBackToMenuClicked.bind(this);

    this.onPreviousStepButtonClicked = this.onPreviousStepButtonClicked.bind(
      this
    );
    this.onNextStepButtonClicked = this.onNextStepButtonClicked.bind(this);

    backToMenuButton.addEventListener("click", this.onBackToMenuClicked);
    previousStepButton.addEventListener(
      "click",
      this.onPreviousStepButtonClicked
    );
    nextStepButton.addEventListener("click", this.onNextStepButtonClicked);

    var steps = (this.steps = this.el
      .querySelector("#steps")
      .querySelectorAll("a-text"));
    

    steps[0].addState("activeStep");

  },

  onBackToMenuClicked: function(evt) {
    console.log("clicked");
    var buttonEls = (this.buttonEls = document.querySelectorAll(
      ".menu-button"
    ));
    document.querySelector("#menu").removeState("clicked");

    //Remove all UI Buttons from Magic Mirror
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].setAttribute("visible", true);
      buttonEls[i].play();
      buttonEls[i].emit("mouseleave");
    }

    document.querySelector("#tutorial").setAttribute("visible", false);
    document
      .querySelector("#manipulateAnimation")
      .setAttribute("visible", false);
  },

  onPreviousStepButtonClicked: function(evt) {
    
    
    
  },

  onNextStepButtonClicked: function(evt) {
    
    document.querySelector('#previousStepContainer').setAttribute('visible', true)
    
    
     var steps = (this.steps = this.el
      .querySelector("#steps")
      .querySelectorAll("a-text"));
    
     for (var i = 0; i < steps.length; ++i) {
       if(steps[i].is("activeStep")) {
         console.log(i)
         steps[i].setAttribute('width', 1)
         index = i
         
       }     
    }
    
   
    
    steps[index].removeState("activeStep")
    
    steps[index+1].addState("activeStep")
    steps[index+1].setAttribute('width', 1.4)
    
    
    var hands = document.querySelector("#manipulateAnimation")
    
    
    if(index === 1){
      hands.setAttribute('animation-mixer',"clip: one")
    }
    
    if(index === 2){
      hands.setAttribute('animation-mixer',"clip: two")
    }
    
    if(index === 3){
      hands.setAttribute('animation-mixer',"clip: three")
    }
    
    
    
    if(index === 4){
       document.querySelector("#nextStepContainer").setAttribute('visible', false)
    }
   
    
    
  }
});
