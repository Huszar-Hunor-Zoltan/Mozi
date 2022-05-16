var oldalnav = document.getElementById("laptetejeregomb");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    oldalnav.style.display = "block";
  } else {
    oldalnav.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}