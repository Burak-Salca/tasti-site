import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './layouts/NavBar';
import MainPage from './layouts/MainPage';
import Footer from './layouts/Footer';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  </Router>
);

export default App;