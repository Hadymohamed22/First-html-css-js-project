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
const infoNums = document.querySelectorAll(
  ".information .container .row .col-lg-3 .box h1"
);
const firstInfoBox = document.querySelector(
  ".information .row > div:first-child .box"
);
const secondInfoBox = document.querySelector(
  ".information .row > div:nth-child(2) .box"
);
const thirdInfoBox = document.querySelector(
  ".information .row > div:nth-child(3) .box"
);
const fourInfoBox = document.querySelector(
  ".information .row > div:last-child .box"
);
const firstTitleBoxInfo = document.getElementById("title-1");
const secondTitleBoxInfo = document.getElementById("title-2");
const thirdTitleBoxInfo = document.getElementById("title-3");
const fourTitleBoxInfo = document.getElementById("title-4");
const firstDesBoxInfo = document.getElementById("des-1");
const secondDesBoxInfo = document.getElementById("des-2");
const thirdDesBoxInfo = document.getElementById("des-3");
const fourDesBoxInfo = document.getElementById("des-4");
const firstHideInfo = document.getElementById("hide-info-1");
const secondHideInfo = document.getElementById("hide-info-2");
const thirdHideInfo = document.getElementById("hide-info-3");
const fourHideInfo = document.getElementById("hide-info-4");
const infoSection = document.getElementById("information");
const boxInfoOne = document.getElementById("box-info-1");
const boxInfoTwo = document.getElementById("box-info-2");
const boxInfoThree = document.getElementById("box-info-3");
const boxInfoFour = document.getElementById("box-info-4");
const coursesSec = document.getElementById("Courses");
const courseThree = document.getElementById("courseOne");
const courseTwo = document.getElementById("courseTwo");
const courseOne = document.getElementById("courseThree");
const filterBtn = document.getElementById("filterBtn");
const scrollBarThump = document.querySelector("html::-webkit-scrollbar-thump");

// test local storage

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
  firstInfoBox.style.backgroundColor = "hsla(214, 82%, 55%, 0.451)";
  secondInfoBox.style.backgroundColor = "hsla(214, 82%, 55%, 0.451)";
  thirdInfoBox.style.backgroundColor = "hsla(214, 82%, 55%, 0.451)";
  fourInfoBox.style.backgroundColor = "hsla(214, 82%, 55%, 0.451)";
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
  firstInfoBox.style.backgroundColor = "hsla(32, 100%, 50%, 0.451)";
  secondInfoBox.style.backgroundColor = "hsla(32, 100%, 50%, 0.451)";
  thirdInfoBox.style.backgroundColor = "hsla(32, 100%, 50%, 0.451)";
  fourInfoBox.style.backgroundColor = "hsla(32, 100%, 50%, 0.451)";
}

// end test local storage

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

// des info

firstTitleBoxInfo.addEventListener("click", () => {
  firstDesBoxInfo.classList.toggle("open");
  firstDesBoxInfo.classList.contains("open")
    ? (firstHideInfo.style.transform = "rotate(0)")
    : (firstHideInfo.style.transform = "rotate(90deg)");
});
secondTitleBoxInfo.addEventListener("click", () => {
  secondDesBoxInfo.classList.toggle("open");
  secondDesBoxInfo.classList.contains("open")
    ? (secondHideInfo.style.transform = "rotate(0)")
    : (secondHideInfo.style.transform = "rotate(90deg)");
});
thirdTitleBoxInfo.addEventListener("click", () => {
  thirdDesBoxInfo.classList.toggle("open");
  thirdDesBoxInfo.classList.contains("open")
    ? (thirdHideInfo.style.transform = "rotate(0)")
    : (thirdHideInfo.style.transform = "rotate(90deg)");
});
fourTitleBoxInfo.addEventListener("click", () => {
  fourDesBoxInfo.classList.toggle("open");
  fourDesBoxInfo.classList.contains("open")
    ? (fourHideInfo.style.transform = "rotate(0)")
    : (fourHideInfo.style.transform = "rotate(90deg)");
});

// end des info

// animation

function comeLeft(el) {
  el.style.left = "0";
}
function comeDown(el) {
  el.style.bottom = "0";
}
function comeRight(el) {
  el.style.right = "0";
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= infoSection.offsetTop - 300) {
    comeLeft(boxInfoOne);
    comeDown(boxInfoTwo);
    comeDown(boxInfoThree);
    comeRight(boxInfoFour);
  }
  startCount == true;
  if (window.scrollY >= coursesSec.offsetTop - 500) {
    comeLeft(courseOne);
    comeDown(courseTwo);
    comeRight(courseThree);
  } else {
    goLeft(courseOne);
    goDown(courseTwo);
    goRight(courseThree);
  }
  if (window.scrollY >= filterBtn.offsetTop - 600) {
    comeLeft(filterBtn);
  } else {
    goLeft(filterBtn);
  }
});

let startCount = false;
window.onscroll = function () {
  if (window.scrollY >= infoSection.offsetTop - 300) {
    if (!startCount) {
      infoNums.forEach((n) => goGoal(n));
    }
    startCount = true;
  }
};
function goGoal(e) {
  let goal = e.dataset.goal;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(counter);
    }
  }, 3000 / goal);
}

// end animation
