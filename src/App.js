import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Ticker from './components/Ticker';
import Footer from './components/Footer';
import BioSection from './components/BioSection';
import './App.css';

const App = () => {
  const tickerItems = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'jQuery', 'Express', 'Mongoose', 'MongoDB', 'Heroku', 'EJS', 'Netlify', 'Django', 'Python', 'Bootstrap', 'API/AJAX', 'Firebase', 'SQL'];

  return (
    <div>
      <Header />
      <div className="container">
        <Projects />
        <BioSection />
        <Ticker items={tickerItems} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
