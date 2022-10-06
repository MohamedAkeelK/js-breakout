const SHIP_IMAGE = "./spaceship.png";

export default class Ship {
  constructor() {
    this.el = document.createElement("img");
    this.el.src = SHIP_IMAGE;
    document.body.append(this.el);

    this.el.className = "ship";

    this.setX(window.innerWidth / 2);
    this.setY(window.innerHeight - 80);
    this.SPEED = 4;
    this.SHIP_IMAGE_WIDTH = 50;
  }
  setX(x) {
    this.x = x;
    this.el.style.left = `${this.x}px`;
  }
  setY(y) {
    this.y = y;
    this.el.style.top = `${this.y}px`;
  }
  moveRight() {
    console.log("right");
    this.setX(this.x + this.SPEED);
  }
  moveLeft() {
    console.log("left");
    this.setX(this.x - this.SPEED);
  }
}
