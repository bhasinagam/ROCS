import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Schedule } from './components/Schedule';
import { Speakers } from './components/Speakers';
import { Organizers } from './components/Organizers';
import { EventDetails } from './components/EventDetails';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Speakers />
      <EventDetails />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;