let toggleBtn = document.querySelector(".navbar__teggler"); // Correct class name

toggleBtn.addEventListener("click", function () {
  document.querySelectorAll(".sidebar-container").forEach(function (element) {
    if (element.id === "activated") {
      element.id = "";
    } else {
      element.id = "activated";
    } // Use classList.toggle properly
  });
});
document.querySelector("#toggler").addEventListener("click", function () {
  const icon = document.querySelector(".navbar__teggler");
  if (icon.src.includes("image/bars-solid.svg")) {
    icon.src = "image/xmark-solid.svg"; // New icon
  } else {
    icon.src = "image/bars-solid.svg"; // Original icon
  }
});
