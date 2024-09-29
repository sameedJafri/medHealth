import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Medicine from './Pages/Medicine';
import Emotions from './Pages/Emotions';
import Restrictions from './Pages/Restrictions';
import Exercise from './Pages/Exercise';
import Home from './Pages/Home';



function App() {
  return (
    
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Medicine" element={<Medicine />} />
        <Route path="/Emotions" element={<Emotions />} />
        <Route path="/Restrictions" element={<Restrictions />} />
        <Route path="/Exercise" element={<Exercise />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;