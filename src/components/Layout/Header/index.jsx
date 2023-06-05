import { faCode, faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import LogoB from "../../../images/logoB.png";
import LogoSub from "../../../images/LogoSub.png";

import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoB} alt="Logo" />
          <img className="logo-sub" src={LogoSub} alt="Boe" />
        </Link>
      </div>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#a3a3a3" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="my-work-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faCode} color="#a3a3a3" />
        </NavLink>
      </nav>
      <p className="tags">
        <span>&lt;body&gt;</span>
      </p>
    </header>
  );
}
