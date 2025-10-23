import { useEffect } from 'react';

function BackgroundVideoControl() {
  useEffect(() => {
    const video = document.getElementById('backgroundVideo');
    let inactivityTimeout;

    const pauseVideo = () => {
      if (video && !video.paused) {
        video.pause();
      }

      // Reset the timer
      clearTimeout(inactivityTimeout);

      // Resume video after 1 minute (60000 ms) of no interaction
      inactivityTimeout = setTimeout(() => {
        if (video && video.paused) {
          video.play();
        }
      }, 60000); // 1 minute
    };

    const events = ['scroll', 'keydown', 'mousemove', 'touchstart', 'click'];

    events.forEach(event =>
      window.addEventListener(event, pauseVideo)
    );

    return () => {
      events.forEach(event =>
        window.removeEventListener(event, pauseVideo)
      );
      clearTimeout(inactivityTimeout);
    };
  }, []);

  return null;
}

export default BackgroundVideoControl;
