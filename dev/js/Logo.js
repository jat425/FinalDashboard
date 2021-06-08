import { gsap } from "gsap";

export let LogoTL = gsap.timeline();

LogoTL.from("#MazdaLines",{drawSVG:0, duration:2}, "draw")
    .from("#LogoLines",{drawSVG:0, duration:2}, "draw")
    .from("#LogoFill",{alpha:0, duration:2}, "-=1")
    .from("#MazdaFill",{alpha:0, duration:2}, "-=2")
    .to("#MazdaLines",{alpha:0, duration:0}, "hide")
    .to("#LogoFill",{alpha:0, duration:1}, "hide")
    .to("#LogoLines",{alpha:0, duration:1}, "hide")
    .to("#MazdaFill",{y:"-=200", duration:1}, "hide")
    .to("#MazdaFill", {duration: 1, morphSVG:"#CX5"})


