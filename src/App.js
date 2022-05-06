
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dasbord from './pages/Dasbord';
import Profile from './pages/Profile';

function App() {
  return (
        <> 
          <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/dasbord" element={<Dasbord/>}/>
          </Routes>
        </>
  );
}

export default App;
