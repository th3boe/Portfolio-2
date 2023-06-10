import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedLetters from "../../components/AnimatedLetters";
import YardSaleAuction from "../../images/YardSaleAuctions.png";
import Ecom from "../../images/ecom-preview-image.png";
import Holidaze from "../../images/Holidaze-preview-image.png";
import "./portfolio.scss";

export default function PortfolioPage() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const titleArray = ["M", "y", "", "P", "r", "o", "j", "e", "c", "t", "s"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Portfolio 2 | Projects</title>
        <link
          rel="icon"
          type="image/png"
          href="../../images/logoB.png"
          sizes="16x16"
        />
      </Helmet>
      <div className="container-p portfolio-page">
        <div className="text-zone-p">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleArray}
              idx={11}
            />
          </h1>
        </div>
        <div className="card-container">
          <div className="card">
            <h2>Yard Sale Auction</h2>
            <img
              src={YardSaleAuction}
              alt="yard sale auction"
              className="image"
            />
            <p>
              The Yard Sale Auction site was built as part of the second
              semester project. The brief was to make an online auction site,
              which I then used as a base for a online yard sale theme set to
              autumn, when people have done their cleaning during summer.
            </p>
            <a
              target="blank"
              href="https://github.com/th3boe/Semester-Project-2-YSA"
            >
              GitHub Repo
            </a>
            <a target="blank" href="https://yard-sale-auctions.netlify.app/">
              Live Site
            </a>
          </div>
          <div className="card">
            <h2>E-com</h2>
            <img src={Ecom} alt="e-commerce page" className="image" />
            <p>
              The E-com page was built during my first project using react. The
              brief was the create an online e-com store, using the given API
              information. I played around with colors and design and created a
              page that was something a bit out of the ordinary.
            </p>
            <a
              target="blank"
              href="https://github.com/th3boe/benedicte-overbo-react-ca"
            >
              GitHub Repo
            </a>
            <a target="blank" href="https://boe-com.netlify.app/">
              Live Site
            </a>
          </div>
          <div className="card">
            <h2>Holidaze</h2>
            <img src={Holidaze} alt="holidaze" className="image" />
            <p>
              The Holidaze site was built as part of my second and last project
              exam. We were given a brief and a API, with instruction to make a
              online booking site. I created a theme representing summer, travel
              and adventure, that would give a good feeling about booking.
            </p>
            <a
              target="blank"
              href="https://github.com/th3boe/project-exam-2-holidaze"
            >
              GitHub Repo
            </a>
            <a target="blank" href="https://holidaze-by-boe.netlify.app/">
              Live Site
            </a>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
