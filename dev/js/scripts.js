import { gsap } from "gsap";
import { LogoTL } from "./Logo"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Screen1TL } from "./Screen1"
import { Screen2TL } from "./Screen2"

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);




let mainTL = gsap.timeline();

mainTL.add(LogoTL)
        .add(Screen1TL)
        .add(Screen2TL);


// // DEVTOOLS:
// import { GSDevTools } from "gsap/GSDevTools";
// gsap.registerPlugin(GSDevTools);
//  GSDevTools.create();




