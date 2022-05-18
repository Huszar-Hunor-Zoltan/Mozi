var oldalnav = document.getElementById("laptetejeregomb");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    oldalnav.style.display = "block";
  } else {
    oldalnav.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}