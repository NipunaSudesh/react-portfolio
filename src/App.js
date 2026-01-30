import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import NavBar from "./Components/NavBar";
 import Home from "./Components/Home";
import AboutUs from "./Components/About/AboutUs";
import Projects from "./Components/Projects/Projects";
import Intern from "./Components/Experience/internExperience";
import ContectMe from "./Components/ContectMe";
import Footer from "./Components/Footer";
import  Technolohies  from "./Components/Technolohies";

function App() {
  return (
    
    <div className="w-full h-auto bg-bodyColor  text-lightText">

      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">    </div> */}
      <div className="container max-w-screen-xl mx-auto">
        <NavBar/> 
        <Home/>
        <AboutUs />
        <Intern />
        <Technolohies />
        <Projects/>
        <ContectMe />
        <Footer/>
    </div>
      </div>


  );
}

export default App;
