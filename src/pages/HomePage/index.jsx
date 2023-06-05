import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedLetters from "../../components/AnimatedLetters";
import logoTitle from "../../images/logoB.png";
import "./home.scss";
import Logo from "./Logo";

export default function HomePage() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["o", "e"];
  const helloArray = ["h", "e", "l", "l", "o", ","];
  const introductionArray = ["T", "h", "i", "s", "", "i", "s"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Portfolio 2 | Home</title>
        <link
          rel="icon"
          type="image/png"
          href="../../images/logoB.png"
          sizes="16x16"
        />
      </Helmet>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray}
              idx={11}
            />{" "}
            <br />{" "}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={introductionArray}
              idx={14}
            />
            <img src={logoTitle} alt="developer logo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />{" "}
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / Animator / Designer</h2>
        </div>
        <Logo />
      </div>
    </HelmetProvider>
  );
}
