//show content or not show content -display block
function displayContentBlock(content) {
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

//show content or not show content -display flex
function displayContentFlex(content) {
  if (content.style.display === "none") {
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }
}
//show content or not show content -display flex2
function displayContentFlex2(content, content2) {
  if (content.style.display === "none") {
    content.style.display = "flex";
    content2.style.display = "flex";
  } else {
    content.style.display = "none";
    content2.style.display = "none";
  }
}

//change displayed icon
function changeIconToggle(icon) {
  if (icon.classList.contains("fa-toggle-on")) {
    icon.classList.remove("fa-toggle-on");

    icon.classList.add("fa-toggle-off");
  } else {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
  }
}

//profile toggle button
document.getElementById("toggle-button-profile").onclick = function () {
  let content = document.getElementById("work-content-profile");
  const icon = this.querySelector(".icon-toggle-button");
  displayContentBlock(content);
  changeIconToggle(icon);
};

//employment toggle button
document.getElementById("toggle-btn-employment").onclick = function () {
  let content = document.getElementById("work-content-employment-1");
  let content2 = document.getElementById("work-content-employment-2");
  const icon = this.querySelector(".icon-toggle-button");
  displayContentFlex2(content, content2);
  changeIconToggle(icon);
};

//internships toggle button
document.getElementById("toggle-btn-internship").onclick = function () {
  let content = document.getElementById("work-content-internship");
  const icon = this.querySelector(".icon-toggle-button");
  displayContentBlock(content);
  changeIconToggle(icon);
};

//education toggle button
document.getElementById("toggle-btn-education").onclick = function () {
  let content = document.getElementById("work-content-education-1");
  let content2 = document.getElementById("work-content-education-2");
  const icon = this.querySelector(".icon-toggle-button");
  displayContentFlex2(content, content2);
  changeIconToggle(icon);
};

//course toggle button
document.getElementById("toggle-btn-course").onclick = function () {
  let content = document.getElementById("work-content-course");
  const icon = this.querySelector(".icon-toggle-button");
  displayContentFlex(content);
  changeIconToggle(icon);
};

//extra toggle button
document.getElementById("toggle-btn-extra").onclick = function () {
  let content = document.getElementById("work-content-extra");
  const icon = this.querySelector(".icon-toggle-button");
  displayContentFlex(content);
  changeIconToggle(icon);
};
