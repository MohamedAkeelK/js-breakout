import Ship from "./Ship.js";
import Bullet from "./Bullet.js";
const keys = {
  a: false,
  d: false,
  [" "]: false,
};

document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
  console.log(keys.a);
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

const ship = new Ship();

const update = () => {
  if (keys.a && ship.x > 0) {
    ship.moveLeft();
  }
  if (keys.d && ship.x < window.innerWidth - ship.SHIP_IMAGE_WIDTH) {
    ship.moveRight();
  }
  if (keys[" "]) {
    // create a bullet
  }
};

setInterval(update, 20);
