import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import './App.css';
 import NavBar from "./Components/NavBar";
 import Home from "./Components/Home";
import AboutUs from "./Components/About/AboutUs";
import Projects from "./Components/Projects/Projects";
import MyServices from "./Components/Services/MyServices";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="container max-w-screen-2xl mx-auto px-16">
        <NavBar/> 
        <Home/>
        <AboutUs />
        <MyServices />
        <Projects/>
        
    
      </div>
    </div>

  );
}

export default App;
