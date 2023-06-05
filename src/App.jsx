import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/layout";
import HomePage from "./pages/HomePage/";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<PortfolioPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
