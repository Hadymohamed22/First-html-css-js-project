const navbarToggler = document.querySelector(".navbar-toggler");
const menuIcon = document.querySelector(".navbar-toggler-icon .menu");
const fistSpanMenuIcon = document.querySelector(
  ".navbar-toggler-icon .menu span:first-child"
);
const secondSpanMenuIcon = document.querySelector(
  ".navbar-toggler-icon .menu span:nth-child(2)"
);
const lastSpanMenuIcon = document.querySelector(
  ".navbar-toggler-icon .menu span:last-child"
);
const inputSearch = document.querySelector("nav .form-control");
const searchIcon = document.querySelector("nav .search .search-icon");
const searchIconIOpen = document.querySelector("nav .search .search-icon svg");
const searchIconIClose = document.querySelector("nav .search .close-icon svg");
const filter = document.querySelector(".filter");
const filterSections = document.querySelector(".filter-sections");
const filterAll = document.querySelector(".filter-sections .all");
const filterFeatured = document.querySelector(".filter-sections .featured");
const filterSuggest = document.querySelector(".filter-sections .suggest");
const filterNew = document.querySelector(".filter-sections .new");
const courses = document.querySelectorAll(".courses .container .row .col-lg-4");
const settings = document.querySelector(".settings");
const settingsIcon = document.querySelector(".settings .icon");
const settingsBlueColor = document.querySelector(".settings .colors .blue");
const settingsOrangeColor = document.querySelector(".settings .colors .orange");
const html = document.querySelector(":root");
const btnsBuyIt = document.querySelectorAll(".buy-it-btn");
const btnShowMore = document.querySelector(".btn-show-more");
const robotoFont = document.querySelector(".roboto");
const openSansFont = document.querySelector(".open-sans");
const rubikFont = document.querySelector(".rubik");
const coursesSec = document.getElementById("Courses");
const courseThree = document.getElementById("courseOne");
const courseTwo = document.getElementById("courseTwo");
const courseOne = document.getElementById("courseThree");
const filterBtn = document.getElementById("filterBtn");

if (window.localStorage.getItem("current-color")) {
  html.style.setProperty(
    "--main-color",
    window.localStorage.getItem("current-color")
  );
}

if (window.localStorage.getItem("current-font")) {
  document.body.style.setProperty(
    "font-family",
    window.localStorage.getItem("current-font")
  );
}

if (window.localStorage.getItem("current-color") == "#3082EB") {
  for (i = 0; i < btnsBuyIt.length; i++) {
    btnsBuyIt[i].style.setProperty("box-shadow", "0 0 20px inset #2537a6");
  }
  btnShowMore.addEventListener("mouseover", () => {
    btnShowMore.style.setProperty("background-color", "#215ead");
  });
  btnShowMore.addEventListener("mouseout", () => {
    btnShowMore.style.setProperty("background-color", "#3082EB");
  });
}
if (window.localStorage.getItem("current-color") == "#ff8a00") {
  for (i = 0; i < btnsBuyIt.length; i++) {
    btnsBuyIt[i].style.setProperty("box-shadow:", "0 0 20px inset #ed1b1b;");
  }
  btnShowMore.addEventListener("mouseover", () => {
    btnShowMore.style.setProperty("background-color", "#8a4c05");
  });
  btnShowMore.addEventListener("mouseout", () => {
    btnShowMore.style.setProperty("background-color", "#ff8a00");
  });
}
// nav
navbarToggler.addEventListener("click", () => {
  menuIcon.classList.toggle("close-menu");
});
// end nav

// filter

filter.addEventListener("click", () => filterSections.classList.toggle("open"));

filterFeatured.addEventListener("click", () => {
  for (i = 0; i < courses.length; i++) {
    courses[i].style.display = "block";
    if (courses[i].classList[1] !== "newFeatured") {
      courses[i].style.cssText = "display: none";
    }
  }
});
filterAll.addEventListener("click", () => {
  for (i = 0; i < courses.length; i++) {
    courses[i].style.display = "block";
  }
});
filterNew.addEventListener("click", () => {
  for (i = 0; i < courses.length; i++) {
    courses[i].style.display = "block";
    if (courses[i].classList[1] !== "newCourse") {
      courses[i].style.cssText = "display: none";
    }
  }
});
filterSuggest.addEventListener("click", () => {
  for (i = 0; i < courses.length; i++) {
    courses[i].style.display = "block";
    if (courses[i].classList[1] !== "newSuggest") {
      courses[i].style.cssText = "display: none";
    }
  }
});
// end filter

// settings
settingsIcon.onclick = () => settings.classList.toggle("open-settings");

// colors

settingsBlueColor.addEventListener("click", () => {
  html.style.setProperty("--main-color", "#3082EB");
  window.localStorage.setItem(
    "current-color",
    getComputedStyle(html).getPropertyValue("--main-color")
  );
  for (i = 0; i < btnsBuyIt.length; i++) {
    btnsBuyIt[i].style.setProperty("box-shadow", "0 0 20px inset #2537a6");
  }
  btnShowMore.style.setProperty("background-color", "#3082EB");
  btnShowMore.addEventListener("mouseover", () => {
    btnShowMore.style.setProperty("background-color", "#215ead");
  });
  btnShowMore.addEventListener("mouseout", () => {
    btnShowMore.style.setProperty("background-color", "#3082EB");
  });
  firstInfoBox.style.backgroundColor = "hsla(214, 82%, 55%, 0.451)";
  secondInfoBox.style.backgroundColor = "hsla(214, 82%, 55%, 0.451)";
  thirdInfoBox.style.backgroundColor = "hsla(214, 82%, 55%, 0.451)";
  fourInfoBox.style.backgroundColor = "hsla(214, 82%, 55%, 0.451)";
});

settingsOrangeColor.addEventListener("click", () => {
  html.style.setProperty("--main-color", "#ff8a00");
  window.localStorage.setItem(
    "current-color",
    getComputedStyle(html).getPropertyValue("--main-color")
  );
  for (i = 0; i < btnsBuyIt.length; i++) {
    btnsBuyIt[i].style.setProperty("box-shadow", "0 0 20px inset #ed1b1b");
  }
  btnShowMore.style.setProperty("background-color", "#ff8a00");
  btnShowMore.addEventListener("mouseover", () => {
    btnShowMore.style.setProperty("background-color", "#8a4c05");
  });
  btnShowMore.addEventListener("mouseout", () => {
    btnShowMore.style.setProperty("background-color", "#ff8a00");
  });
  firstInfoBox.style.backgroundColor = "hsla(32, 100%, 50%, 0.451)";
  secondInfoBox.style.backgroundColor = "hsla(32, 100%, 50%, 0.451)";
  thirdInfoBox.style.backgroundColor = "hsla(32, 100%, 50%, 0.451)";
  fourInfoBox.style.backgroundColor = "hsla(32, 100%, 50%, 0.451)";
});

// end colors

// fonts

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

// end fonts

// end settings
