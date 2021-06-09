import { gsap } from "gsap";
import { LogoTL } from "./Logo"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Screen1TL } from "./Screen1"

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);




let mainTL = gsap.timeline();

mainTL.add(LogoTL)
        .add(Screen1TL);
        // .add(zoomTL, "-=7")
        // .add(RocketTL, "-=2") 
        // .add(liftOffTL, "-=1") 
        // .add(flightTL, "zoomFlight") 
        // .add(marsZoomTL, "zoomFlight") 




// DEVTOOLS:
// import { GSDevTools } from "gsap/GSDevTools";
// gsap.registerPlugin(GSDevTools);
//  GSDevTools.create();




