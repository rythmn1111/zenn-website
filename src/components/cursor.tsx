// components/CustomCursor.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This function updates the cursor position when mouse moves
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // This shows/hides cursor when mouse enters/leaves window
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners when component mounts
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Hide the default cursor
    document.body.style.cursor = 'none';

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, [isVisible]);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        // transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 150ms ease'
      }}
    >
      <Image
        src="/cursor.png" // Path to your cursor image
        alt=""
        width={150}
        height={150}
        priority
      />
    </div>
  );
};

export default CustomCursor;