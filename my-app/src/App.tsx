import React from 'react';
import HomePage from './Page/HomePage/HomePage';
import BookPage from './Page/BookPage/BookPage';
import CollectionPage from './Page/CollectionPage/CollectionPage';
import CollectionPageDetail from './Page/CollectionPage/CollectionPageDetail';
import WishPage from './Page/WishPage/WishPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './app.css';


function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/book" Component={BookPage} />
          <Route path="/collection" Component={CollectionPage} />
          <Route path="/collection/collection/:id" Component={CollectionPageDetail} />
          <Route path="/wish" Component={WishPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
