import React from 'react';

import { About, Achievement, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Achievement/>
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
