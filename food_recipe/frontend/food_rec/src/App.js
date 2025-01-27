import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/Login';
import RecipeFinder from './Component/RecipeFinder';  

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipefinder" element={<RecipeFinder />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
