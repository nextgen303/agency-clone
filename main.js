var menu = document.querySelector(".nav .nav1 i");
var close = document.querySelector(".nav .sidebar i");

function loader() {
  var h5timer = document.querySelector(".counter h5");
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    opacity:0,
    stagger: 0.25,
    duration: 1,
    delay: 0.3,
  });

  tl.from(".counter, .line h2", {
    opacity: 0,
    onStart: function () {
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 1);
    },
  });

  tl.to(".loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2.6,
  });

  tl.from(".page1", {
    y: 1200,
    opacity: 0,
    delay: 0.2,
    duration: 1,
    ease: "slow(0.7,0.7,false)",
  });

  tl.to(".loader", {
    display: "none",
  });

  tl.from(".hero_text h1" , {
    y:100,
    stagger: 0.2
  })
}
Shery.makeMagnet(".nav2 a, .nav1 i, .sidebar h4, .sidebar i",  {});

function sidebar() {
  var tl = gsap.timeline();

  tl.to(".sidebar", {
    left: 0,
    duration: 0.5,
    ease: "expo.out",
  });

  tl.from(".sidebar h4", {
    x: 100,
    duration: 0.6,
    stagger: 0.3,
    opacity: 0,
    ease: "expo.out",
  });

  tl.pause();

  menu.addEventListener("click", function () {
    tl.play();
  });

  close.addEventListener("click", function () {
    tl.reverse();
  });
}

loader();
sidebar();