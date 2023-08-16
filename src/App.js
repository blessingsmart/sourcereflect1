import { NavBar } from "./components/NavBar";
import  Trainings  from "./components/Trainings";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";




function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <Trainings/>
      <About/>
      <Contact/>
      <Testimonials/>
    </div>   
  );
}

export default App;
