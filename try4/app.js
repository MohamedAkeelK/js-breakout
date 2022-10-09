// CONTROLS
const keys = {
  a: false,
  d: false,
};

// EVENTS
document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

class Entity {
  constructor({ tag = "div", className = "" } = {}) {
    this.el = document.createElement(tag);
    document.body.append(this.el);
    this.el.className = className;
  }
  setX(x) {
    this.x = x;
    this.el.style.left = `${this.x}px`;
  }
  setY(y) {
    this.y = y;
    this.el.style.top = `${this.y}px`;
  }
}

class Player extends Entity {
  constructor() {
    super({ tag: "div", className: "player" });
    this.setX(window.innerWidth / 2 - 50);
    this.setY(window.innerHeight - 80);
    document.body.append(this.el);
    this.SPEED = 8;
    this.PLAYER_IMAGE_WIDTH = 100;
  }
  moveRight() {
    this.setX(this.x + this.SPEED);
  }
  moveLeft() {
    this.setX(this.x - this.SPEED);
  }
  moveUp() {
    this.setY(this.y - this.SPEED);
  }
  moveDown() {
    this.setY(this.y + this.SPEED);
  }
}

class Ball extends Entity {
  constructor({ x, y }) {
    super({ className: "ball" });
    this.SPEED = 4;
    this.setX(x + 23);
    this.setY(y - 5);
  }
  update() {
    this.setY(this.y - this.SPEED);
  }
}

const player = new Player();

const update = () => {
  // move ship controls
  if (keys.a && player.x > 0) {
    player.moveLeft();
  }
  if (keys.d && player.x < window.innerWidth - player.PLAYER_IMAGE_WIDTH) {
    player.moveRight();
  }
};

// UPDATES EVERY 20 MILISECONDS
setInterval(update, 20);
