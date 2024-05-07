import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import './App.css';
 import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="container max-w-screen-2xl mx-auto px-16">
        <NavBar/> 
      </div>
    </div>

  );
}

export default App;
