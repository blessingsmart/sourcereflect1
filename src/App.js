import { NavBar } from "./components/NavBar";
import Trainings from "./components/Trainings";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { AboutMain } from "./Pages/AboutMain";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
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
        <Trainings />
        <Testimonials />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
