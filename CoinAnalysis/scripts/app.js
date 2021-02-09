const tl = gsap.timeline({defaults: {ease: "power1.out"} }); 

tl.to(".text", { y: "0%", duration: 2, stagger: 0.25 });
tl.to(".cover", {y: "-100%", duration: 1.5 });
tl.to(".intro", {y: "-100%", duration: 2 }, "-=1");
document.getElementById("intro").style.display = "none";


// function click() {
//     tl.to(".cover", {y: "-100%", duration: 1.5 });
//     tl.to("#intro", {y: "-200%", duration: 1 }, "-=1");
//     document.getElementById("intro").style.display = "none";
// }

// document.getElementById("intro").addEventListener("click", click);

