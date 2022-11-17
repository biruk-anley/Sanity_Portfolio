import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Achievement from './container/Achievement/Achievement';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Achievement/>
    <Testimonial />
    <Footer />
  </div>
);

export default App;
