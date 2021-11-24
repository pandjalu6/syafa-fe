import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nabvar from "./components/Navbar";
import Home from "./components/Home";
import "./index.css"
function App() {
  return (
    <Router>
      <div>
        <Nabvar color="black" />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
