import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap-trial";
import LogoB from "../../../images/logoB.png";
import "./logo.scss";

export default function Logo() {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 5,
      },
    },
  };

  useEffect(() => {
    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1,
    });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoB}
        alt="JavaScript,  Developer"
      />

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="711.000000pt"
        height="734.000000pt"
        viewBox="0 0 711.000000 734.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,734.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <motion.path
            d="M610 3535 l0 -2976 1783 4 c1923 4 1876 2 2217 57 672 109 1162 367
1417 747 60 88 60 89 -3 37 -253 -206 -648 -367 -1084 -443 -383 -66 -541 -71
-2427 -71 l-1633 0 0 2810 0 2810 -135 0 -135 0 0 -2975z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M2540 5466 l0 -164 543 -5 c458 -3 557 -7 637 -21 392 -72 573 -262
557 -588 l-5 -107 40 22 c21 12 65 47 96 78 96 94 142 216 142 374 -1 332
-227 523 -671 564 -66 6 -370 11 -726 11 l-613 0 0 -164z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M5730 4174 c-63 -50 -177 -127 -227 -153 -24 -12 -43 -25 -43 -29 0
-4 25 -17 55 -28 l54 -22 49 52 c62 65 174 216 160 216 -2 0 -23 -16 -48 -36z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M2540 3145 l0 -165 644 0 c518 0 668 -3 760 -15 348 -46 554 -194
612 -441 12 -52 15 -98 11 -186 l-5 -118 29 15 c16 9 58 43 94 77 107 100 155
223 155 396 -1 342 -216 538 -650 592 -52 6 -385 10 -867 10 l-783 0 0 -165z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
      </svg>
    </div>
  );
}
