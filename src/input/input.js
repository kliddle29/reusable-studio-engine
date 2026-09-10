const input = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  keys: {},
};

function initInput() {
  window.addEventListener('mousemove', (event) => {
    input.x = event.clientX;
    input.y = event.clientY;
  });

  window.addEventListener('keydown', (event) => {
    input.keys[event.key] = true;
  });

  window.addEventListener('keyup', (event) => {
    input.keys[event.key] = false;
  });
}
