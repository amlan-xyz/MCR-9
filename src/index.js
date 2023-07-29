import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {CategoryContext,CategoryContextProvider} from './context/categoryContext'
import { VideosContext,VideosContextProvider } from './context/videoContext';
import { PlaylistContext,PlaylistContextProvider } from './context/playlistContext';

import {BrowserRouter as Router} from 'react-router-dom'

export {CategoryContext,VideosContext,PlaylistContext};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryContextProvider>
        <VideosContextProvider>
          <PlaylistContextProvider>
            <App />
          </PlaylistContextProvider>

        </VideosContextProvider>
      </CategoryContextProvider>

    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
