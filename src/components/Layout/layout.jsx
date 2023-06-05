import { Outlet } from "react-router-dom";
import Footer from "./Footer/";
import Header from "./Header/";
import "../../index.css";
import "./layout.scss";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
