import "./style.scss";
import gsap from "gsap";

window.addEventListener("load", () => {
  if (window.innerWidth < 1400) {
    alert(
      "This site is best viewed on a screen with a width of 1400px or less"
    );
  }
});

const homepodwhite = document.querySelector(".homepod-white");
const discover = document.querySelector(".discover");
const continueBtn = document.querySelector(".continue");

discover.addEventListener("click", () => {
  gsap.to(homepodwhite, { y: -500, width: 600, height: 600, duration: 0.5 });
  gsap.to(discover, { opacity: 0, duration: 0.5 });
  gsap.to(continueBtn, { opacity: 1, duration: 0.5 });
  gsap.to(".nsoa", { y: 200, scale: 0.7, opacity: 0, duration: 0.5 });
  gsap.to(".sdeltnti", { opacity: 1, duration: 1 });
  gsap.to(".white-gradiant", { opacity: 0, duration: 0.5 });
  gsap.to(".circle", { opacity: 1, duration: 1 });
});

let count = 0;

continueBtn.addEventListener("click", () => {
  count++;
  if (count === 1) {
    gsap.to(".sdeltnti", { opacity: 0, duration: 0.5 });
    gsap.to(".mini", { y: -500, opacity: 1, duration: 1 });
    gsap.to(".ynhclt", { y: -10, duration: 1 });
    gsap.to(".circle", {
      opacity: 0,
      scale: 0,
      animation: "none",
      duration: 0.5,
    });

    gsap.to(homepodwhite, { y: -620, duration: 1 });
    gsap.to(".homepod-red", { y: -48, x: -500, opacity: 1, duration: 1 });
    gsap.to(".homepod-orange", { y: -10, x: -320, opacity: 1, duration: 1 });
    gsap.to(".homepod-indigo", { y: -10, x: 320, opacity: 1, duration: 1 });
    gsap.to(".homepod-black", { y: -48, x: 500, opacity: 1, duration: 1 });
  }
  if (count === 2) {
    gsap.to(".mini", { y: -700, opacity: 0, duration: 1 });
    gsap.to(".ynhclt", { opacity: 0, duration: 1 });

    gsap.to(homepodwhite, { y: -920, opacity: 0, duration: 1 });
    gsap.to(".homepod-orange", { y: -310, x: -320, opacity: 0, duration: 1 });
    gsap.to(".homepod-indigo", { y: -310, x: 320, opacity: 0, duration: 1 });
    gsap.to(".homepod-red", {
      y: 400,
      x: -700,
      opacity: 1,
      width: 165,
      duration: 1,
    });
    gsap.to(".homepod-black", {
      y: 400,
      x: 700,
      opacity: 1,
      width: 165,
      duration: 1,
    });

    gsap.to(".pc", { y: 0, duration: 1 });
  }
});
