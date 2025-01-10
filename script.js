document.getElementById("toggle-button").onclick = function () {
  let content = document.getElementById("work-content");
  const icon = this.querySelector(".icon-toggle-button");
  // console.log(content);
  // console.log(icon);

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }

  if (icon.classList.contains("fa-toggle-on")) {
    icon.classList.remove("fa-toggle-on");
    console.log("down");
    icon.classList.add("fa-toggle-off");
  } else {
    icon.classList.remove("fa-toggle-off");
    console.log("up");
    icon.classList.add("fa-toggle-on");
  }
};
