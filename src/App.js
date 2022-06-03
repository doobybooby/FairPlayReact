import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Rooms from './Components/pages/Rooms';
import LogIn from './Components/pages/LogIn';

function App() {
  return (
    <div className='mainAppComponent'>
      <h1>Play Fair With Fair Play</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
