import "./style.scss";
import gsap from "gsap";

window.addEventListener("load", () => {
  if (window.innerWidth < 1400) {
    alert(
      "This site is best viewed on a screen with a width of 1400px or more."
    );
  }
});

const homepodwhiteContainer = document.querySelector(
  ".homepod-white-container"
);
const discover = document.querySelector(".discover");
const continueBtn = document.querySelector(".continue");

discover.addEventListener("click", () => {
  gsap.to(homepodwhiteContainer, {
    y: -500,
    width: 600,
    height: 600,
    duration: 0.5,
  });
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

    gsap.to(homepodwhiteContainer, { y: -620, duration: 1 });
    gsap.to(".homepod-orange", { y: -48, x: -500, opacity: 1, duration: 1 });
    gsap.to(".homepod-yellow", { y: -10, x: -320, opacity: 1, duration: 1 });
    gsap.to(".homepod-indigo", { y: -10, x: 320, opacity: 1, duration: 1 });
    gsap.to(".homepod-black", { y: -48, x: 500, opacity: 1, duration: 1 });
  }
  if (count === 2) {
    gsap.to(".mini", { y: -700, opacity: 0, duration: 1 });
    gsap.to(".ynhclt", { opacity: 0, duration: 1 });

    gsap.to(homepodwhiteContainer, {
      y: -920,
      opacity: 0,
      duration: 1,
      zIndex: 2,
    });
    gsap.to(".homepod-yellow", {
      y: -310,
      x: -320,
      opacity: 0,
      duration: 1,
      zIndex: 2,
    });
    gsap.to(".homepod-indigo", {
      y: -310,
      x: 320,
      opacity: 0,
      duration: 1,
      zIndex: 2,
    });
    gsap.to(".homepod-orange", {
      y: 400,
      x: -700,
      opacity: 1,
      width: 165,
      duration: 1,
      zIndex: 3,
    });
    gsap.to(".homepod-black", {
      y: 400,
      x: 700,
      opacity: 1,
      width: 165,
      duration: 1,
      zIndex: 3,
    });

    gsap.to(".pc", { y: 0, duration: 1 });
  }
  if (count === 3) {
    gsap.to(".pc", { y: "100%", duration: 1 });
    gsap.to(".homepod-orange", {
      y: -80,
      x: 260,
      width: 300,
      duration: 1,
    });
    gsap.to(".homepod-black", {
      y: 0,
      x: 0,
      width: 400,
      duration: 1,
    });
  }
  if (count === 4) {
    gsap.to(".homepod-yellow", {
      x: 120,
      y: -160,
      width: 200,
      opacity: 1,
      duration: 0.5,
    });
  }
  if (count === 5) {
    gsap.to(".homepod-orange", {
      y: -80,
      x: -240,
      duration: 0.5,
    });
  }
  if (count === 6) {
    gsap.to(".homepod-yellow", {
      y: -80,
      x: 260,
      width: 300,
      duration: 1,
    });
  }
  if (count === 7) {
    gsap.to(".homepod-white", {
      y: -200,
      x: 0,
      width: 300,
      opacity: 1,
      duration: 1,
    });
  }
  if (count === 8) {
    window.location.reload();
  }
});
