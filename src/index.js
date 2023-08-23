import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'

import { CategoryContext,CategoryContextProvider } from './context/CategoryContext';
import { VideosContext,VideosContextProvider } from './context/VideosContext';
import { WatchlaterContext,WatchlaterContextProvider } from './context/WatchLaterContext';
import { PlaylistContext,PlaylistContextProvider } from './context/PlaylistContext';
import { ExploreContext,ExploreContextProvider } from './context/ExploreContext';
import { SingleVideoContext,SingleVideoContextProvider } from './context/SingleVideoContext';
import { NotesContext,NotesContextProvider } from './context/NotesContext';

export {CategoryContext,VideosContext,WatchlaterContext,PlaylistContext,ExploreContext,SingleVideoContext,NotesContext};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryContextProvider>
        <VideosContextProvider>
          <WatchlaterContextProvider>
            <PlaylistContextProvider>
              <ExploreContextProvider>
                <SingleVideoContextProvider>
                  <NotesContextProvider>
                    <App />
                  </NotesContextProvider>
                </SingleVideoContextProvider>
              </ExploreContextProvider>
            </PlaylistContextProvider>
          </WatchlaterContextProvider>
        </VideosContextProvider>
      </CategoryContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
