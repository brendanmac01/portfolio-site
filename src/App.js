import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Ticker from './components/Ticker';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const tickerItems = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'jQuery', 'Express', 'Mongoose', 'MongoDB', 'Heroku', 'EJS', 'Netlify', 'Django', 'Python', 'Bootstrap', 'API/AJAX', 'Firebase', 'SQL'];

  return (
    <div>
      <Navbar />
      <Projects />
      <Ticker items={tickerItems} />
      <Footer />
    </div>
  );
};

export default App;