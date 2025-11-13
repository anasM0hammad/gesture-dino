document.addEventListener("DOMContentLoaded", () => {
    const runner = new window.Runner('.runner-container');
  
    setTimeout(() => {
      window.startHandTracking((hand) => {
        // console.log(hand);
        const indexTipX = hand[8].x;
        const indexTipY = hand[8].y;
        const thumbTipX = hand[4].x;
        const thumbTipY = hand[4].y;

        const tipX = Math.abs(indexTipX - thumbTipX);
        const tipY = Math.abs(indexTipY - thumbTipY);

        const distance = Math.sqrt(tipX*tipX, tipY*tipY);

        const pinch =  distance < 0.01;
        if (pinch) {
          runner.tRex.startJump(0);
        }
      });
    }, 1000);
  });
  