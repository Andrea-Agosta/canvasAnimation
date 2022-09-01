const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDT = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = './images/shadow_dog.png';
const spriteWidth = 575;
const spriteheight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;

function animate() {
  // clear canvas
  ctx.clearRect(0, 0, CANVAS_WIDT, CANVAS_HEIGHT);

  // draw on canvas
  // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); info parameter draw image on canvas
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteheight,
    spriteWidth,
    spriteheight,
    0,
    0,
    spriteWidth,
    spriteheight
  );
  if (gameFrame % staggerFrames == 0) {
    frameX < 6 ? frameX++ : (frameX = 0);
  }
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
