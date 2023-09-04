import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import SongDisplay from './Components/SongDisplay/SongDisplay';
import './fonts/MUSED.ttf';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/songDisplay' element={<SongDisplay />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
