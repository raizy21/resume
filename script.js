//profile toggle button
document.getElementById("toggle-button-profile").onclick = function () {
  let content = document.getElementById("work-content-profile");
  const icon = this.querySelector(".icon-toggle-button");

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }

  if (icon.classList.contains("fa-toggle-on")) {
    icon.classList.remove("fa-toggle-on");

    icon.classList.add("fa-toggle-off");
  } else {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
  }
};

//employment toggle button
document.getElementById("toggle-btn-employment").onclick = function () {
  let content = document.getElementById("work-content-employment-1");
  let content2 = document.getElementById("work-content-employment-2");
  const icon = this.querySelector(".icon-toggle-button");

  if (content.style.display === "none") {
    content.style.display = "flex";
    content2.style.display = "flex";
  } else {
    content.style.display = "none";
    content2.style.display = "none";
  }

  if (icon.classList.contains("fa-toggle-on")) {
    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
  } else {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
  }
};

//internships toggle button
document.getElementById("toggle-btn-internship").onclick = function () {
  let content = document.getElementById("work-content-internship");
  const icon = this.querySelector(".icon-toggle-button");

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }

  if (icon.classList.contains("fa-toggle-on")) {
    icon.classList.remove("fa-toggle-on");

    icon.classList.add("fa-toggle-off");
  } else {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
  }
};

//education toggle button
document.getElementById("toggle-btn-education").onclick = function () {
  let content = document.getElementById("work-content-education-1");
  let content2 = document.getElementById("work-content-education-2");
  const icon = this.querySelector(".icon-toggle-button");

  if (content.style.display === "none") {
    content.style.display = "flex";
    content2.style.display = "flex";
  } else {
    content.style.display = "none";
    content2.style.display = "none";
  }

  if (icon.classList.contains("fa-toggle-on")) {
    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
  } else {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
  }
};

//course toggle button
document.getElementById("toggle-btn-course").onclick = function () {
  let content = document.getElementById("work-content-course");

  const icon = this.querySelector(".icon-toggle-button");

  if (content.style.display === "none") {
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }

  if (icon.classList.contains("fa-toggle-on")) {
    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
  } else {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
  }
};

//extra toggle button
document.getElementById("toggle-btn-extra").onclick = function () {
  let content = document.getElementById("work-content-extra");
  const icon = this.querySelector(".icon-toggle-button");
  if (content.style.display === "none") {
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }

  if (icon.classList.contains("fa-toggle-on")) {
    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
  } else {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
  }
};
