let points = 0;

let pointsEl = document.createElement("div");
pointsEl.className = "points";
pointsEl.innerText = `POINTS: ${points}`;
document.body.append(pointsEl);

// prevent scrolling when pressing spacebar
window.addEventListener("keydown", (e) => {
  if (e.key === " " && e.target === document.body) {
    e.preventDefault();
  }
});

// CLASSES
import Ship from "./Ship.js";
import Bullet from "./Bullet.js";
import Alien from "./Alien.js";

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

const isOverlapping = (entity1, entity2) => {
  const rect1 = entity1.el.getBoundingClientRect();
  const rect2 = entity2.el.getBoundingClientRect();
  console.log(rect1, rect2);
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
};

const getOverlappingBullet = (entity) => {
  for (let bullet of bullets) {
    if (isOverlapping(entity, bullet)) {
      return bullet;
    }
  }
  return null;
};

// GAME STUFF ...
const ship = new Ship();
const bullets = [];
const aliens = [];
// const aliensGrid = []

const removeAlien = (alien) => {
  aliens.splice(aliens.indexOf(alien), 1);
  alien.remove();
  pointsEl.innerText = `POINTS: ${(points += 20)}`;
};

const removeBullet = (bullet) => {
  bullets.splice(bullets.indexOf(bullet), 1);
  bullet.remove();
};

for (let row = 0; row < 2; row++) {
  for (let col = 0; col < 10; col++) {
    let alien = new Alien({
      x: col * 100 + 200,
      y: row * 100 + 40,
      getOverlappingBullet,
      removeAlien,
      removeBullet,
    });
    aliens.push(alien);
  }
}

// DETERMINE RIGHT AND LEFT MOST ALIENS
const getLeftMostAlien = () => {
  if (aliens.length > 0) {
    return aliens.reduce((minimumAlien, currentAlien) => {
      return currentAlien.x < minimumAlien.x ? currentAlien : minimumAlien;
    });
  }
};

const getRightMostAlien = () => {
  if (aliens.length > 0) {
    return aliens.reduce((maximumAlien, currentAlien) => {
      return currentAlien.x > maximumAlien.x ? currentAlien : maximumAlien;
    });
  }
};

// CREATE A BULLET FUCNTION
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
  // DETERMINES WINNER
  if (points >= 400) {
    pointsEl.innerText = "YOU WIN";
    return;
  }
  // move ship controls
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

  // update bullets, remove if out of bounds.
  bullets.forEach((bullet) => {
    bullet.update();

    if (bullet.y < 0) {
      bullet.remove();
      bullets.splice(bullets.indexOf(bullet), 1);
    }
  });

  // update aliens
  aliens.forEach((alien) => {
    alien.update();
  });
  if (aliens.length > 0) {
    // aliens move down and change direction
    if (getLeftMostAlien().x < 100) {
      aliens.forEach((alien) => {
        alien.setDirectionRight();
        alien.moveDown();
      });
    }
    if (getRightMostAlien().x > window.innerWidth - 100) {
      aliens.forEach((alien) => {
        alien.moveDown();
        alien.setDirectionLeft();
      });
    }
  }
};

// UPDATES EVERY 20 MILISECONDS
setInterval(update, 20);
