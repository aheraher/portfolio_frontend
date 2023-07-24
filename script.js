const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

const hireShow = () => {
  let display = document.getElementById("hire");

  display = display.querySelector("img")

  display.style.display = "initial";
  display.style.scale = "1.2";



}

const hireHide = () => {
  let display = document.getElementById("hire");

  display = display.querySelector("img")

  display.style.display = "none";
}

function hideImageInLandscapeMode() {
  const image = document.querySelector("#computerImg");
  if (window.innerWidth <= 767 && window.innerWidth > window.innerHeight) {
    image.style.display = "none";
  } else {
    image.style.display = "block";
  }
}

// Call the function on page load and whenever the screen is resized
window.addEventListener("load", hideImageInLandscapeMode);
window.addEventListener("resize", hideImageInLandscapeMode);


let skillLevel = (no) => {
  let skill = document.body.getElementsByClassName("skillLevel")

  console.log(skill[no].style.display = "block")
}



const raceSkill=()=> {
      
var tl =gsap.timeline()

gsap.to("#car1 img", {
  x: 950, duration: 4, onComplete: function () {

    skillLevel(0)

  }
})

gsap.to("#car2 img", {
  x: 985, duration: 4, onComplete: function () {

    skillLevel(1)

  }
})

gsap.to("#car3 img", {
  x: 983, duration: 4, onComplete: function () {

    skillLevel(2)

  }
})

gsap.to("#car4 img", {
  x: 982, duration: 4,  onComplete: function () {

    skillLevel(3)

  }
})

gsap.to("#car5 img", {
  x: 955, duration: 4, onComplete: function () {

    skillLevel(4)

  }
})

}



// JavaScript code for parallax effect on #page5
window.addEventListener("scroll", function() {
  const page5 = document.getElementById("page5");
  const box = document.getElementById("box");
  const scrollPosition = window.pageYOffset;

  // Update the background position based on the scroll position
  page5.style.backgroundPositionY = -(scrollPosition * 0.5) + "px";
});







// let mm = gsap.matchMedia();

// // add a media query. When it matches, the associated function will run
// mm.add("(min-width: 1024px)", () => {
  

// gsap.to("#car1 img", {
//   x: 350, duration: 4, onComplete: function () {

//     skillLevel(0)

//   }
// })

// gsap.to("#car2 img", {
//   x: 360, duration: 4, onComplete: function () {

//     skillLevel(1)

//   }
// })

// gsap.to("#car3 img", {
//   x: 360, duration: 4, onComplete: function () {

//     skillLevel(2)

//   }
// })

// gsap.to("#car4 img", {
//   x: 360, duration: 4,  onComplete: function () {

//     skillLevel(3)

//   }
// })

// gsap.to("#car5 img", {
//   x: 30, duration: 4, onComplete: function () {

//     skillLevel(4)

//   }
// })
  

  
// }

//   // this setup code only runs when viewport is at least 800px wide



// );





















// //car race 1 by 1 


      
// // var tl =gsap.timeline()
// // tl.to("#car1 img", {
// //   x: 950, duration: 5, delay: 1, onComplete: function () {

// //     skillLevel(0)

// //   }
// // })

// // tl.to("#car2 img", {
// //   x: 950, duration: 5, delay: 1, onComplete: function () {

// //     skillLevel(1)

// //   }
// // })

// // tl.to("#car3 img", {
// //   x: 950, duration: 5, delay: 1, onComplete: function () {

// //     skillLevel(2)

// //   }
// // })

// // tl.to("#car4 img", {
// //   x: 950, duration: 5, delay: 1, onComplete: function () {

// //     skillLevel(3)

// //   }
// // })

// // tl.to("#car5 img", {
// //   x: 950, duration: 5, delay: 1, onComplete: function () {

// //     skillLevel(4)

// //   }
// // })
  
// // }












