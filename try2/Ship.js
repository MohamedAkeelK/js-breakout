const SHIP_IMAGE = "./spaceship.png";

export default class Ship {
  constructor() {
    this.el = document.createElement("img");
    this.el.src = SHIP_IMAGE;
    document.body.append(this.el);
    this.el.className = "ship";
    this.setX(window.innerWidth / 2);
    this.setY(window.innerHeight - 80);
  }
  setX(x) {
    this.x = x;
    this.el.style.left = ` ${this.x}px`;
  }
  setY(y) {
    this.y = y;
    this.el.style.top = `${this.y}px`;
  }
}
