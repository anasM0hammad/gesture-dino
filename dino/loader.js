function synthKeyEvent(type) {
  const e = new KeyboardEvent(type, {
    key: "ArrowDown",
    code: "ArrowDown",
    keyCode: 40,
    which: 40,
    location: 0,
    repeat: type === "keydown",
    bubbles: true,
    cancelable: true,
  });

  Object.defineProperty(e, "keyCode", { get: () => 40 });
  Object.defineProperty(e, "which", { get: () => 40 });

  return e;
}

function sendDuckKey(type) {
  const ev = synthKeyEvent(type);

  document.dispatchEvent(ev);
  document.body.dispatchEvent(ev);

  const container = document.querySelector('.runner-container');
  if (container) container.dispatchEvent(ev);

  if (typeof runner !== "undefined" && runner.canvas) {
    runner.canvas.dispatchEvent(ev);
  }
}

document.addEventListener("DOMContentLoaded", () => {
    const runner = new window.Runner('.runner-container');
    let duckActive = false;
    let duckHoldUntil = 0;
    let lastPinch = 0;  

  
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
        const now = performance.now();

        const pinch =  distance < 0.005;
        if(indexTipY > thumbTipY){
          if(!duckActive){
            duckActive = true;
            sendDuckKey('keydown'); 
          }
          duckHoldUntil = now + 150;
        }
        else if (pinch && now - lastPinch > 10 && !runner.tRex.jumping) {
          lastPinch = now;  
          if (duckActive) {
            duckActive = false;
            sendDuckKey('keyup');
          }
          runner.playSound(runner.soundFx.BUTTON_PRESS);
          runner.tRex.startJump(0);
        }
        else{
          if (duckActive && now > duckHoldUntil) {
            duckActive = false;
            sendDuckKey('keyup');
          }
        }
      });
    }, 1000);
  });
  