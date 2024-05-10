import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import './App.css';
 import NavBar from "./Components/NavBar";
 import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="container max-w-screen-2xl mx-auto px-16">
        <NavBar/> 
        <Home/>
        <Projects/>
    
      </div>
    </div>

  );
}

export default App;
