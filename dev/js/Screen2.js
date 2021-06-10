import { gsap } from "gsap";
export let Screen2TL = gsap.timeline();

gsap.set("#BatteryGauge",{transformOrigin:"center"});
gsap.set("#CallScreen",{transformOrigin:"center"});
// gsap.set("#Map", { scaleX: -1, scaleY: -1, transformOrigin: "center center"});

Screen2TL.to("#BatteryGauge",{scaleX:"-=.65", scaleY:"-=.65", duration: 1}, "ScaleMove")
        .to("#SpeedGage",{scaleX:"-=.5", scaleY:"-=.5", duration: 1}, "ScaleMove")
        .to("#SpeedGage",{x: 130, y: -50, duration: 1}, "ScaleMove")
        .to("#BatteryGauge",{x: 620, y: -100, duration: 1}, "ScaleMove")

        .from("#Time",{alpha:0, duration:1}, "TopInfo")
        .from("#Date",{alpha:0, duration:1}, "TopInfo")
        .from("#Miles",{alpha:0, duration:1}, "TopInfo")
        .from("#_7",{alpha:0, duration:1}, "TopInfo")
        .from("#_5",{alpha:0, duration:1}, "TopInfo")
        .from("#DegreeSign",{alpha:0, duration:1}, "TopInfo")
        .from("#Clouds",{alpha:0, duration:1}, "TopInfo")
        .from("#Sun",{alpha:0, duration:1}, "TopInfo")
        .from("#DialsGrey",{alpha:0, duration:1}, "TopInfo")
        // .from("#DialsWhite",{alpha:0, duration:1}, "TopInfo")
        .from("#SunDash1",{alpha:0, duration:.2})
        .from("#SunDash2",{alpha:0, duration:.2})
        .from("#SunDash3",{alpha:0, duration:.2})
        .from("#SunDash4",{alpha:0, duration:.2})
        .from("#SunDash5",{alpha:0, duration:.2})


        .from("#MusicBar",{y:100, duration:1}, "-=1")
        .from("#SourAlbumCoverSmall",{alpha: 0, duration:1}, "-=1")
        .from("#SourAlbumCoverSmall",{y:100, duration:1}, "-=1")
        .to("#Pause",{alpha: 0, duration:0}, "-=1")
        // .to("#TimeFill",{alpha: 0, duration:0}, "-=1")
        .from("#MusicLine",{drawSVG:0, duration:1}, "-=.5")
        .from("#Pause",{alpha: 0, duration:1}, "play")
        .to("#Play",{alpha: 0, duration:0}, "play")
        .from("#TimeFill",{drawSVG: 0, duration: 30}, "play")

        .from("#Arrows",{alpha:0, duration:1}, "-=29")
        .from("#MapWhite",{alpha:0, duration:1}, "-=29")
        .from("#Map",{drawSVG:0, duration:1}, "-=29")
        .from("#MapPoints",{alpha:0, duration:1}, "-=29")
        .from("#TripText",{alpha:0, duration:1}, "-=29")

        .to("#MapWhite",{alpha:0, duration:1}, "-=27")
        .from("#MusicWhite",{alpha:0, duration:1}, "-=27")
        .to("#TripOverview",{alpha:0, duration:1}, "-=27")
        .from("#MusicScreen",{alpha:0, duration:1}, "-=27")
        .from("#SourAlbumCoverBig",{alpha:0, duration:1}, "-=27")

        .to("#MusicWhite",{alpha:0, duration:1}, "-=25")
        .from("#PhoneWhite",{alpha:0, duration:1}, "-=25")
        .to("#MusicScreen",{alpha:0, duration:1}, "-=25")
        .to("#SourAlbumCoverBig",{alpha:0, duration:1}, "-=25")
        .from("#CallScreen",{alpha:0, duration:1}, "-=25")
        .to("#CallScreen",{scaleX: 1.02, scaleY: 1.02, yoyo:true, repeat:3}, "-=24")

        .to("#PhoneWhite",{alpha:0, duration:1}, "-=22")
        .from("#ArrowWhite",{alpha:0, duration:1}, "-=22")
        .to("#CallScreen",{alpha:0, duration:1}, "-=22")
        .from("#PathOutLines",{drawSVG:0, duration:1}, "-=22")
        .from("#PathFilled",{alpha:0, duration:1}, "-=21")
        .from("#Directons",{alpha:0, duration:1}, "-=21")

