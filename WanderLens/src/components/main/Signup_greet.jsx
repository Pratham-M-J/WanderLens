import React, { useEffect } from 'react';
import Typed from 'typed.js';
// Ensure you import your CSS file

const SignupGreet = () => {
  useEffect(() => {
    const typed = new Typed('#greet-element', {
      strings: ["Welcome back"],
      typeSpeed: 30,
      backSpeed: 30,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span>
      <span id="greet-element"></span>
      <span className="custom-cursor"></span> {/* This is your custom cursor */}
    </span>
  );
};

export default SignupGreet;
