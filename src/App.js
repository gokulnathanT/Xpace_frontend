import logo from './logo.svg';
import { BrowserRouter as Router, Routes,Route, } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Journeys from './components/Journeys';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import { useState } from 'react';
import AddJourney from './components/AddJourney/AddJourney';

function App() {
  const[isAuthenticated,setIsAutheticated]=useState(false);
  function login(){
    setIsAutheticated(true);
  }
  function logout(){
    setIsAutheticated(false);
  }
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <main>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/AddJourney" element={<AddJourney />} />
          <Route path="/Journeys" element={<Journeys />} />
          <Route path="/Login" element={<Login login={login} />} />
          <Route path="/" element={<Login login={logout} />}></Route>
        </Routes>
      </main>
    </Router>
  );
}
export default App;
