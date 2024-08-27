// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Report from './Report';
import Sanyo from './Sanyo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/report" element={<Report />} />
      <Route path='/sanyo' element={<Sanyo />}/>
    </Routes>
  </Router>
  );
}

export default App;
