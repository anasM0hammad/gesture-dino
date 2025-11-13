document.addEventListener("DOMContentLoaded", () => {
    const runner = new window.Runner('.runner-container');
  
    setTimeout(() => {
      window.startHandTracking((hand) => {
        const palmOpen = hand[9].y < hand[0].y;
        if (palmOpen) {
          runner.tRex.startJump(0);
        }
      });
    }, 1000);
  });
  