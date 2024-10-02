import "./App.css";
import Home from "./Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes ,Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/loginuser"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/" element={<Navigate to="/loginuser" />} />
        {/* <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
