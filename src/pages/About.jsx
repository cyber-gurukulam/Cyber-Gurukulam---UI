import React, { useState, useEffect } from 'react';

const About = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  
  // eslint-disable-next-line 
  const words = ['Learn', 'Grow', 'Secure'];

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (typingIndex < words.length) {
        if (typedText.length < words[typingIndex].length) {
          setTypedText(prevTypedText => prevTypedText + words[typingIndex].charAt(prevTypedText.length));
        } else {
          setTimeout(() => {
            setTypingIndex(prevTypingIndex => (prevTypingIndex + 1) % words.length); // Reset typingIndex to 0 when reaching the end
            setTypedText(''); 
          }, 2000); // Delay before resetting typingIndex and typedText
        }
      }
    }, 150);

    return () => clearTimeout(typingTimer);
  }, [typingIndex, typedText, words]);

  return (
    <div className='container d-flex about-container page-wrapper'>
      <h2 className='mb-4'>About Cyber Gurukulam</h2>
      <div className=" flex-column">
        <p className="fs-4 mt-4 about-text text-light">
        <span className='text-light bg-warning p-2  '> Cyber Gurukulam</span> Uniting Cyber Enthusiasts </p>
          <div className='code-text text-warning'><span className='fw-bold typewriter thick'> {typedText} </span></div> 
        <p className="fs-5 mt-4 about-text">
        Join us in mastering cybersecurity essentials. Empower yourself with expert-led workshops and resources. Together, let's defend the digital realm with knowledge and skill. Join the Cyber Gurukulam community today!
        </p>
      </div>
    </div>
  );
};

export default About;
