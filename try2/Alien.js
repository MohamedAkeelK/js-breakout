const AlIEN_IMAGE = "./imgs/ufo.png";
import Entity from "./Entity.js";

export default class Alien extends Entity {
  constructor({ x, y }) {
    super({ tag: "img", className: "alien" });
    this.el.src = AlIEN_IMAGE;
    // document.body.append(this.el);

    // this.SPEED = 8;
    // this.SHIP_IMAGE_WIDTH = 50;
    // this.canFire = true;

    this.setX(x);
    this.setY(y);
  }
  // moveRight() {
  //   console.log("right");
  //   this.setX(this.x + this.SPEED);
  // }
  // moveLeft() {
  //   console.log("left");
  //   this.setX(this.x - this.SPEED);
  // }

  // fire({ createBullet }) {
  //   if (this.canFire) {
  //     this.canFire = false;
  //     createBullet({
  //       x: this.x,
  //       y: this.y,
  //     });
  //     setTimeout(() => {
  //       this.canFire = true;
  //     }, 150);
  //   }
  // }
}
