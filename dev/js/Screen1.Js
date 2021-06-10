import { gsap } from "gsap";
export let Screen1TL = gsap.timeline();

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);


gsap.set("#MPHWhite", { scaleX: -1, transformOrigin: "center center"});
gsap.set("#MPHFill", { scaleX: -1, transformOrigin: "center center"});
gsap.set("#GasCircleWhite", { scaleX: -1, scaleY: -1, transformOrigin: "center center"});
gsap.set("#GasCircleFill", { scaleX: -1, scaleY: -1, transformOrigin: "center center"});



Screen1TL.from("#MPHWhite",{drawSVG:0, duration:1}, "white")
    .from("#GasCircleWhite",{drawSVG:0, duration:1}, "white")

    .from("#GasInfo",{alpha:0, duration:1}, "info")
    .from("#TickMarks",{alpha:0, duration:1}, "info")
    .from("#SpeedText",{alpha:0, duration:1}, "info")
    .from("#SpeedNumbers",{alpha:0, duration:1}, "info")

    .from("#MPHFill",{drawSVG:0, duration:1, ease: "power4.out"}, "info")
    .from("#GasCircleFill",{drawSVG:0, duration:2, ease: "power4.out"}, "info")

    .to("#MPHFill",{drawSVG:0, duration:1, ease: "power4.out"}, "=-1")
    .to("#GasCircleWhite",{alpha:0, duration:0})
    .from("#FullyCharged",{alpha:0, duration:.5, yoyo:true, repeat:5}, "-=1")
