const BACKGROUND = '#0a0e27';
const RING_COLOR = '#64ffda';
const MIN_RADIUS = 20;
const MAX_RADIUS = 150;
const RING_WIDTH = 3;

function draw() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, width, height);

  const radius = mapRange(input.x, 0, width, MIN_RADIUS, MAX_RADIUS);

  ctx.beginPath();
  ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
  ctx.strokeStyle = RING_COLOR;
  ctx.lineWidth = RING_WIDTH;
  ctx.stroke();
}

function startLoop() {
  function frame() {
    draw();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
