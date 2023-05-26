import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
