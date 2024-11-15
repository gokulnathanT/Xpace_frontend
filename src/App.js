import logo from './logo.svg';
import { BrowserRouter as Router, Routes,Route, } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Journeys from './components/Journeys';
import Home from './components/Home';


function App() {
  return (
   <Router>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='/Journeys' element={<Journeys/>}/>
   </Routes>
   </Router>
  );
}

export default App;
