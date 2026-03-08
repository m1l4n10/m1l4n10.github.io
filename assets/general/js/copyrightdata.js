document.addEventListener("DOMContentLoaded", function() {
  const year = new Date().getFullYear();
  document.getElementById("copyright").innerText = year;
});