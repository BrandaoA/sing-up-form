
const userInput = document.querySelectorAll(".btn");
const userInput1 = document.getElementById("first-name");
const userInput2 = document.getElementById("last-name");
const userInput3 = document.getElementById("email");
const userInput4 = document.getElementById("password");
const container = document.querySelector(".main-container");
const errorMessage1 = document.querySelector(".error-message1");
const errorMessage2 = document.querySelector(".error-message2");
const errorMessage3 = document.querySelector(".error-message3");
const errorMessage4 = document.querySelector(".error-message4");
const subscribeButton = document.querySelector(".free-trial");
let thanksContainer = document.querySelector(".thanks-message");
let shadowEffect = document.querySelector(".dark-bk");
let emailLink = document.querySelector(".mailbox");
let returnBtn = document.querySelector(".return-btn");


  function validate() {
    
    if(userInput1.value == "") {
      errorMessage1.style.display = "flex";
      userInput1.classList.add("active");
      container.classList.add("active")
    } else if(!userInput1.value == "") {
      errorMessage1.style.display = "none";
      userInput1.classList.remove("active");
    }

    if(userInput2.value == "") {
      errorMessage2.style.display = "flex";
      userInput2.classList.add("active");
    } else if(!userInput2.value == "") {
      errorMessage2.style.display = "none";   
      userInput2.classList.remove("active");
    }

    let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]{2,4})$/

    if(regx.test(userInput3.value)) {
      errorMessage3.style.display = "none";
      userInput3.classList.remove("active");
      emailLink.innerHTML = userInput3.value;
    } else {
      errorMessage3.style.display = "flex";
      userInput3.classList.add("active");
      container.classList.add("active");
      userInput3.placeholder = "email@example/com";
    }

    if(userInput4.value == "") {
      errorMessage4.style.display = "flex";
      userInput4.classList.add("active");
      container.classList.add("active")
    } else if(!userInput4.value == "") {
      errorMessage4.style.display = "none";
      userInput4.classList.remove("active");
    }
    
    if(!userInput4.value == "" && !userInput2.value == "" && regx.test(userInput3.value) && !userInput4.value == "") {
      shadowEffect.style.display = "unset";
      thanksContainer.style.display = "unset";
    }
  }


  function resetButton() {
    document.getElementById("reset-button").reset();
    shadowEffect.style.display = "none";
    thanksContainer.style.display = "none";
  }
