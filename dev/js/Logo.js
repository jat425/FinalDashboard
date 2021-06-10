import { gsap } from "gsap";

export let LogoTL = gsap.timeline();

LogoTL.to("#CX5",{alpha:0, duration:0}, "draw")
    .from("#MazdaLines",{drawSVG:0, duration:2}, "draw")
    .from("#LogoLines",{drawSVG:0, duration:2}, "draw")
    .from("#LogoFill",{alpha:0, duration:2}, "-=1")
    .from("#MazdaFill",{alpha:0, duration:2}, "-=2")
    .to("#MazdaLines",{alpha:0, duration:.001}, "hide")
    .to("#LogoLines",{alpha:0, duration:.001}, "hide")
    .to("#MazdaFill",{alpha:0, duration:1}, "merge")
    .to("#LogoFill", {duration: 1, morphSVG:"#CX5"}, "merge")



