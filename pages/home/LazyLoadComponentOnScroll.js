import React, { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MyDynamicComponent = dynamic(() => import('./testimonials'));

function LazyLoadComponentOnScroll(props) {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(componentRef.current);

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={componentRef}>
        {isVisible && <MyDynamicComponent {...props} />}
    </div>
  );
}

export default LazyLoadComponentOnScroll;
