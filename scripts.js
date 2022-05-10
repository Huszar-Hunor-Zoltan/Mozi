var oldalnav = document.getElementById("oldalnav");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    oldalnav.style.display = "block";
  } else {
    oldalnav.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}