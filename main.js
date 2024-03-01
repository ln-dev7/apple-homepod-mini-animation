import "./style.scss";
import gsap from "gsap";

const homepodwhite = document.querySelector(".homepod-white");
const discover = document.querySelector(".discover");

discover.addEventListener("click", () => {
  gsap.to(homepodwhite, { y: -500, width: 600, height: 600, duration: 0.5 });
  gsap.to(discover, { opacity: 0, duration: 0.5 });
  gsap.to(".nsoa", { y: 200, scale: 0.7, opacity: 0, duration: 0.5 });
  gsap.to(".sdeltnti", { opacity: 1, duration: 1 });
  gsap.to(".white-gradiant", { opacity: 0, duration: 0.5 });
  gsap.to(".circle", { opacity: 1, duration: 1 });
});
