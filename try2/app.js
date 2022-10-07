import Ship from "./Ship.js";
import Bullet from "./Bullet.js";

// CONTROLS
const keys = {
  a: false,
  d: false,
  [" "]: false,
};

// EVENTS
document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// NEW SHIP INSTANCE
const ship = new Ship();
const bullets = [];

const createBullet = ({ x, y }) => {
  bullets.push(
    new Bullet({
      x,
      y,
    })
  );
};

// UPDATE FUNCTION
const update = () => {
  if (keys.a && ship.x > 0) {
    ship.moveLeft();
  }
  if (keys.d && ship.x < window.innerWidth - ship.SHIP_IMAGE_WIDTH) {
    ship.moveRight();
  }
  if (keys[" "]) {
    ship.fire({
      createBullet,
    });
  }

  bullets.forEach((bullet) => {
    bullet.update();

    if (bullet.y < 0) {
      bullet.remove();
      bullets.splice(bullets.indexOf(bullet), 1);
    }
    console.log(bullets);
  });
};

// UPDATES EVERY 20 MILISECONDS
setInterval(update, 20);
