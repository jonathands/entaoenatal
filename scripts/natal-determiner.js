document.addEventListener('DOMContentLoaded', function () {
  fetch("https://proud-darkness-3903.fly.dev/")
    .then((res) => res.json())
    .then((isXmas) => {
      if (isXmas) {
        document.getElementById("xmas-boolean").innerHTML = "Feliz Natal! 🎅";
      }
    })
});