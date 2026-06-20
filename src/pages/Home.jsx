import React from 'react';
import Hero from './Hero';
import About from './About';
import Programs from './Programs';
import POCProjects from './POCProjects';
import KeyFocus from './KeyFocus';
import Impact from './Impact';
import Collaborators from './Collaborators';
import Events from './Events';
import Testimonials from './Testimonials';
import Register from './Register';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Programs />
      <POCProjects />
      <KeyFocus />
      <Impact />
      <Collaborators />
      <Events />
      <Testimonials />
      <Register />
    </div>
  );
}
