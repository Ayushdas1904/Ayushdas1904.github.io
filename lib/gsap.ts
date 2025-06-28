import {gsap} from "gsap"
import {ScrollTrigger, SplitText} from "gsap/all";
import {useGSAP} from "@gsap/react"
gsap.registerPlugin(ScrollTrigger,SplitText);

export {gsap, ScrollTrigger, SplitText, useGSAP};