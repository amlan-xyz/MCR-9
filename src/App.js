import './App.css';

import {Routes,Route,useNavigate} from 'react-router-dom'

import { Categories } from './pages/Categories/Category';
import { Videos } from './pages/VideoListings/Videos';
import { WatchLater } from './pages/WatchLater/WatchLater';
import { Playlist } from './pages/Playlist/Playlist';
import { Explore } from './pages/Explore/Explore';
import { SingleVideo } from './pages/SingleVideo/SingleVideo';
import { SinglePlaylist } from './pages/SinglePlaylist/SinglePlaylist';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Categories/>}/>
        <Route path='/videos/:category' element={<Videos/>} />
        <Route path='/watch-later' element={<WatchLater/>} />
        <Route path='/playlist' element={<Playlist/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/video/:id' element={<SingleVideo/>} />
        <Route path='/playlist/:id' element={<SinglePlaylist/>} />
      </Routes>
    </div>
  );
}

export default App;
