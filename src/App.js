import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Rooms from './Components/pages/Rooms';
import LogIn from './Components/pages/LogIn';
import SingUp from './Components/pages/SingUp';
import Navbar from './Components/Navbar';
import RoomSearchBar from './Components/RoomSearchBar';

function App() {
  return (
    <div className='mainAppComponent'>
      <h1>Play Fair With Fair Play</h1>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default App;
