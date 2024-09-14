document.querySelector("#toggler").addEventListener("click", function () {
  document.querySelector(".sidebar-container").classList.toggle("activated");
  let img = document.getElementById("toggler__img");
  img.src = img.src.includes("/image/hamburger.png")
    ? "/image/cross.png"
    : "/image/hamburger.png";
});
