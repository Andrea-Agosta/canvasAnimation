const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDT = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = './images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;

function animate() {
  // clear canvas
  ctx.clearRect(0, 0, CANVAS_WIDT, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame / staggerFrames) % 6;
  frameX = spriteWidth * position;

  // draw on canvas
  ctx.drawImage(
    playerImage,
    frameX,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
