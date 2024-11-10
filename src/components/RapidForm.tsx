"use client";

import { useEffect } from 'react';

const RapidFormsEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.rapidforms.co/embed/index.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script to avoid duplicate loads
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      loading="lazy"
      id="rapidforms-iframe"
      src="https://app.rapidforms.co/embed/9cbdbb"
      width="100%"
      height="500px" // Adjust the height as per your design
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
    ></iframe>
  );
};

export default RapidFormsEmbed;
