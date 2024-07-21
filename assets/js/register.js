const passEyeIcon = document.getElementById("passEyeIcon");
const confirmEyeIcon = document.getElementById("confirmEyeIcon");
const passInput = document.getElementById("pass");
const confirmInput = document.getElementById("confirm-pass");
const settings = document.querySelector(".settings");
const settingsIcon = document.querySelector(".settings .icon");
const settingsBlueColor = document.querySelector(".settings .colors .blue");
const settingsOrangeColor = document.querySelector(".settings .colors .orange");
const html = document.querySelector(":root");
const robotoFont = document.querySelector(".roboto");
const openSansFont = document.querySelector(".open-sans");
const rubikFont = document.querySelector(".rubik");
const form = document.querySelector("form");
const validOne = document.getElementById("validOne");
const validTwo = document.getElementById("validTwo");
const validThree = document.getElementById("validThree");
const validStateOne = document.getElementById("validStateOne");
const validStateTwo = document.getElementById("validStateTwo");
const validStateThree = document.getElementById("validStateThree");
const errorConfirmMassage = document.querySelector(".error-confirm-massage");
const errorPhoneMassage = document.querySelector(".error-massage-phone");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const nav = document.querySelector(".register nav");

nav.style.backgroundColor = "#3081eb51";
nav.style.boxShadow = "0 0 20px -10px";

// test localStorage
if (window.localStorage.getItem("current-color")) {
  html.style.setProperty(
    "--main-color",
    window.localStorage.getItem("current-color")
  );
  if (getComputedStyle(html).getPropertyValue("--main-color") == "#ff8a00") {
    form.style.backgroundColor = "#ff88005b";
    nav.style.backgroundColor = "#ff88005b";
  } else {
    form.style.backgroundColor = "#3081eb51";
    nav.style.backgroundColor = "#3081eb51";
  }
}

if (window.localStorage.getItem("current-font")) {
  document.body.style.setProperty(
    "font-family",
    window.localStorage.getItem("current-font")
  );
}
// end test localStorage

// settings
settingsIcon.onclick = () => settings.classList.toggle("open-settings");

settingsBlueColor.addEventListener("click", () => {
  html.style.setProperty("--main-color", "#3082EB");
  window.localStorage.setItem(
    "current-color",
    getComputedStyle(html).getPropertyValue("--main-color")
  );
  form.style.backgroundColor = "#3081eb51";
  nav.style.backgroundColor = "#3081eb51";
});
settingsOrangeColor.addEventListener("click", () => {
  html.style.setProperty("--main-color", "#ff8a00");
  window.localStorage.setItem(
    "current-color",
    getComputedStyle(html).getPropertyValue("--main-color")
  );
  form.style.backgroundColor = "#ff88005b";
  nav.style.backgroundColor = "#ff88005b";
});

robotoFont.addEventListener("click", () => {
  document.body.style.setProperty("font-family", `"Roboto", sans-serif`);
  window.localStorage.setItem(
    "current-font",
    getComputedStyle(document.body).getPropertyValue("font-family")
  );
});
rubikFont.addEventListener("click", () => {
  document.body.style.setProperty("font-family", `"Rubik", sans-serif`);
  window.localStorage.setItem(
    "current-font",
    getComputedStyle(document.body).getPropertyValue("font-family")
  );
});
openSansFont.addEventListener("click", () => {
  document.body.style.setProperty("font-family", `"Open Sans", sans-serif`);
  window.localStorage.setItem(
    "current-font",
    getComputedStyle(document.body).getPropertyValue("font-family")
  );
});
// end settings

// session storage
if (window.sessionStorage.getItem("email-value")) {
  emailInput.value = window.sessionStorage.getItem("email-value");
}
if (window.sessionStorage.getItem("phone-value")) {
  phoneInput.value = window.sessionStorage.getItem("phone-value");
}
if (window.sessionStorage.getItem("pass-value")) {
  passInput.value = window.sessionStorage.getItem("pass-value");
}
if (window.sessionStorage.getItem("confirm-value")) {
  confirmInput.value = window.sessionStorage.getItem("confirm-value");
}
if (window.sessionStorage.getItem("firstName-value")) {
  firstNameInput.value = window.sessionStorage.getItem("firstName-value");
}
if (window.sessionStorage.getItem("lastName-value")) {
  lastNameInput.value = window.sessionStorage.getItem("lastName-value");
}
firstNameInput.oninput = () =>
  window.sessionStorage.setItem("firstName-value", firstNameInput.value);
phoneInput.oninput = () =>
  window.sessionStorage.setItem("phone-value", phoneInput.value);
confirmInput.oninput = () =>
  window.sessionStorage.setItem("confirm-value", confirmInput.value);
lastNameInput.oninput = () =>
  window.sessionStorage.setItem("lastName-value", lastNameInput.value);
emailInput.oninput = () =>
  window.sessionStorage.setItem("email-value", emailInput.value);

// end session storage

passEyeIcon.onclick = () => {
  if (passInput.type == "password") {
    passEyeIcon.src = "assets/images/open_eye.png";
    passInput.type = "text";
  } else {
    passEyeIcon.src = "assets/images/close-eye.png";
    passInput.type = "password";
  }
};
confirmEyeIcon.onclick = () => {
  if (confirmInput.type == "password") {
    confirmEyeIcon.src = "assets/images/open_eye.png";
    confirmInput.type = "text";
  } else {
    confirmEyeIcon.src = "assets/images/close-eye.png";
    confirmInput.type = "password";
  }
};

// validation
passInput.oninput = () => {
  if (/[a-z]+[A-Z]+/g.test(passInput.value) == true) {
    validOne.style.cssText = "color: black; text-decoration: none";
    validStateOne.src = "assets/images/correct.png";
    validStateOne.width = "15";
  }
  if (/[@#\$&%\*]+/g.test(passInput.value) == true) {
    validTwo.style.cssText = "color: black; text-decoration: none";
    validStateTwo.src = "assets/images/correct.png";
    validStateTwo.width = "15";
  }
  if (/\d+/g.test(passInput.value) == true) {
    validThree.style.cssText = "color: black; text-decoration: none";
    validStateThree.src = "assets/images/correct.png";
    validStateThree.width = "15";
  }
  if (passInput.value == "") {
    validOne.style.cssText = "color: #777; text-decoration: none;";
    validStateOne.src = "assets/images/uncorrect.png";
    validStateOne.width = "10";
    validTwo.style.cssText = "color: #777; text-decoration: none;";
    validStateTwo.src = "assets/images/uncorrect.png";
    validStateTwo.width = "10";
    validThree.style.cssText = "color: #777; text-decoration: none;";
    validStateThree.src = "assets/images/uncorrect.png";
    validStateThree.width = "10";
  }
  window.sessionStorage.setItem("pass-value", passInput.value);
};

// end validation

form.onsubmit = function (e) {
  if (passInput.value !== confirmInput.value) {
    errorConfirmMassage.style.display = "block";
    e.preventDefault();
  } else if (passInput.value == confirmInput.value) {
    errorConfirmMassage.innerHTML = "its the same";
    errorConfirmMassage.style.cssText =
      "display: block !important; color: #35c035 !important;";
  }
  if (/\+\d{2}\s\d{3}\s\d{4}/g.test(phoneInput.value) != true) {
    errorPhoneMassage.style.display = "block";
  }
};

// animation label

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, indx) =>
        `<span style="transition-delay:${indx * 50}ms">${letter}</span>`
    )
    .join("");
});
const spans = document.querySelectorAll("label span");

for (i = 0; i < inputs.length; i++) {
  inputs[0].addEventListener("input", () => {
    if (inputs[0].value != "") {
      for (j = 0; j < labels.length; j++) {
        labels[0].style.cssText = "top: -64px; transition: none;";
        labels[0].innerHTML = "First Name";
      }
    }
  });
  inputs[0].onchange = () => {
    if (inputs[0].value == "") {
      for (j = 0; j < labels.length; j++) {
        labels[0].style.cssText = "top: -32px";
        labels[0].innerHTML = labels[0].innerText
          .split("")
          .map(
            (letter, indx) =>
              `<span style="transition-delay:${indx * 50}ms">${letter}</span>`
          )
          .join("");
      }
    }
  };
  inputs[1].addEventListener("input", () => {
    if (inputs[1].value != "") {
      for (j = 0; j < labels.length; j++) {
        labels[1].style.cssText = "top: -64px; transition: none;";
        labels[1].innerHTML = "Last Name";
      }
    }
  });
  inputs[1].onchange = () => {
    if (inputs[1].value == "") {
      for (j = 0; j < labels.length; j++) {
        labels[1].style.cssText = "top: -32px";
        labels[1].innerHTML = labels[1].innerText
          .split("")
          .map(
            (letter, indx) =>
              `<span style="transition-delay:${indx * 50}ms">${letter}</span>`
          )
          .join("");
      }
    }
  };
  inputs[2].addEventListener("input", () => {
    if (inputs[2].value != "") {
      for (j = 0; j < labels.length; j++) {
        labels[2].style.cssText = "top: -64px; transition: none;";
        labels[2].innerHTML = "Phone";
      }
    }
  });
  inputs[2].onchange = () => {
    if (inputs[2].value == "") {
      for (j = 0; j < labels.length; j++) {
        labels[2].style.cssText = "top: -32px";
        labels[2].innerHTML = labels[2].innerText
          .split("")
          .map(
            (letter, indx) =>
              `<span style="transition-delay:${indx * 50}ms">${letter}</span>`
          )
          .join("");
      }
    }
  };
  inputs[3].addEventListener("input", () => {
    if (inputs[3].value != "") {
      for (j = 0; j < labels.length; j++) {
        labels[3].style.cssText = "top: -64px; transition: none;";
        labels[3].innerHTML = "Email";
      }
    }
  });
  inputs[3].onchange = () => {
    if (inputs[3].value == "") {
      for (j = 0; j < labels.length; j++) {
        labels[3].style.cssText = "top: -32px";
        labels[3].innerHTML = labels[3].innerText
          .split("")
          .map(
            (letter, indx) =>
              `<span style="transition-delay:${indx * 50}ms">${letter}</span>`
          )
          .join("");
      }
    }
  };
  inputs[4].addEventListener("input", () => {
    if (inputs[4].value != "") {
      for (j = 0; j < labels.length; j++) {
        labels[4].style.cssText = "top: -64px; transition: none;";
        labels[4].innerHTML = "Password";
      }
    }
  });
  inputs[4].onchange = () => {
    if (inputs[4].value == "") {
      for (j = 0; j < labels.length; j++) {
        labels[4].style.cssText = "top: -32px";
        labels[4].innerHTML = labels[4].innerText
          .split("")
          .map(
            (letter, indx) =>
              `<span style="transition-delay:${indx * 50}ms">${letter}</span>`
          )
          .join("");
      }
    }
  };
  inputs[5].addEventListener("input", () => {
    if (inputs[5].value != "") {
      for (j = 0; j < labels.length; j++) {
        labels[5].style.cssText = "top: -64px; transition: none;";
        labels[5].innerHTML = "Confirm Password";
      }
    }
  });
  inputs[5].onchange = () => {
    if (inputs[5].value == "") {
      for (j = 0; j < labels.length; j++) {
        labels[5].style.cssText = "top: -32px";
        labels[5].innerHTML = labels[5].innerText
          .split("")
          .map(
            (letter, indx) =>
              `<span style="transition-delay:${indx * 50}ms">${letter}</span>`
          )
          .join("");
      }
    }
  };
}

// end animation label
