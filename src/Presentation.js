// Presentation.js
import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/dracula.css';

const Presentation = () => {
  useEffect(() => {
    Reveal.initialize({
      // Your configuration options
    });
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        <section>
            <h1>Hellow world!</h1>
        </section>
        <section>Slide 2 Content</section>
        {/* ... */}
      </div>
    </div>
  );
};

export default Presentation;
