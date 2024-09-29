import './App.css'
import './Pages/Components/Styles/background.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Medicine from './Pages/Medicine';
import Emotions from './Pages/Emotions';
import Restrictions from './Pages/Restrictions';
import Home from './Pages/Home';
import Welcome from './Pages/Welcome';



function App() {
  return (
    
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Medicine" element={<Medicine />} />
        <Route path="/Emotions" element={<Emotions />} />
        <Route path="/Restrictions" element={<Restrictions />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;