import { Entity } from "./Entity.js";

export class Block extends Entity {
  constructor({ x, y, blockThatGotHit, removeBlock, blockId }) {
    super({ tag: "div", className: "block" });
    this.setX(x);
    this.setY(y);
    document.body.append(this.el);
    this.BLOCK_IMAGE_WIDTH = 100;
    this.blockThatGotHit = blockThatGotHit;
    this.removeBlock = removeBlock;
    this.blockId = blockId;
  }
  update() {
    const block = this.blockThatGotHit();
    // console.log(block);
    if (block) {
      console.log("blockId: ", this.blockId);
      this.removeBlock(block);

      // this.removeBall(ball);
    }
    // this.removeBullet(this);
  }
}
