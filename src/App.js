import { NavBar } from "./components/NavBar";
import {About} from "./components/About"
import Product from "./components/Shop"
import { Home } from "./components/Home";
import { AboutMain } from "./Pages/AboutMain";
import { Contact } from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/AboutMain" element={<AboutMain />} />
        </Routes>
        <About />
        <Product />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
