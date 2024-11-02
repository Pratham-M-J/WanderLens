
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Greet = () => {
  useEffect(() => {
    const typed = new Typed('#greet-element', {
      strings: ["What's your dream Destination?"],
      typeSpeed: 30,
      backSpeed: 30,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    
    <span id="greet-element"></span>
    </>
  )
};

export default Greet;
