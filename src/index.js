import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Nav';
import { PostsPage, SavedPage, TaggedPage } from './Profile/Profile';
import { HomePage } from './Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>

      <Navbar/> {/* Render navbar on all pages */}

      <Routes>
          <Route path='/' element={ <HomePage/> }/>
          <Route path=':username' element={ <PostsPage /> }/>
          <Route path=':username/saved' element={ <SavedPage /> } />
          <Route path=':username/tagged' element={ <TaggedPage /> } />
      </Routes>

    </HashRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
