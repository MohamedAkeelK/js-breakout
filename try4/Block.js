import { Entity } from "./Entity.js";

export class Block extends Entity {
  constructor({ x, y }) {
    super({ tag: "div", className: "block" });
    this.setX(x);
    this.setY(y);
    document.body.append(this.el);
    this.BLOCK_IMAGE_WIDTH = 100;
  }
}
