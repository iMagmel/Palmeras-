import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourtsSection from './components/CourtsSection';
import ReservationForm from './components/ReservationForm';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CourtsSection />
      <ReservationForm />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
