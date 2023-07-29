import logo from './logo.svg';
import './App.css';

import { Route,Routes } from 'react-router-dom';

import {Home} from './pages/Home Page/Home'
import { Categories } from './pages/Category Page/Category';
import { Video } from './pages/Single Video Page/Video';
import { Navbar } from './components/Navbar/Navbar';
import { Explore } from './pages/Explore Page/Explore';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/category/:id' element={<Categories/>} />
          <Route path='/video/:id' element={<Video/>} />
          <Route path='/explore' element={<Explore/>} />
        </Routes>
    </div>
  );
}

export default App;
