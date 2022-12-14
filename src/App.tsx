import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Routes from "./Routes";

/** Renders Sharebnb App
 *
 * Props: none
 * State: none
 *
 * App -> {Routes, Navbar}
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
