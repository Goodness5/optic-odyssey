import { useEffect } from 'react';

function DisableDrag() {
  useEffect(() => {
    const handleDragStart = (event) => {
      event.preventDefault();
    };
    document.addEventListener('dragstart', handleDragStart);
    return () => {
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return null;
}

export default DisableDrag;
