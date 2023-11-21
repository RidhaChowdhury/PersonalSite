import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { About, Contact, Experience, ExperienceHeader, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Skills, GridCanvas, Box } from "./components";
import { Grid } from "@react-three/drei";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <div className="relative z-0">
          <About/>
          <Skills/>
          <Tech/>
          <GridCanvas/>
        </div>
        <div className="relative z-0">
          <ExperienceHeader/>
          <Experience/>
          <Box/>
        </div>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
        <ToastContainer/>
      </div>
    </BrowserRouter>
  )
};

export default App;