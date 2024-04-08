var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

var observer = new IntersectionObserver(onIntersection, options);
var divs = document.querySelectorAll(".myDiv");

divs.forEach(function (div) {
  observer.observe(div);
  div.style.opacity = 0;
});

function onIntersection(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.className = "animate__animated animate__backInUp";
      observer.unobserve(entry.target);
    }
  });
}

var optionsb = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

var observerB = new IntersectionObserver(onIntersectionB, optionsb);
var card = document.querySelectorAll(".card");

card.forEach(function (divb) {
  observerB.observe(divb);
  divb.style.opacity = 1;
});

function onIntersectionB(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      tod();

      observerB.unobserve(entry.target);
    }
  });
}

function tod() {
  Splitting();
  setTimeout(() => {
    document.querySelector(".card").focus();
  }, 0);
}
function smoothScroll(targetId) {
  var target = document.getElementById(targetId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  }
}
