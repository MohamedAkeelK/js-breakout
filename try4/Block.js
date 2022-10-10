import { Ball } from "./Ball.js";
import { Entity } from "./Entity.js";

export class Block extends Entity {
  constructor({ x, y, blockThatGotHit, removeBlock, blockId, ball }) {
    super({ tag: "div", className: "block" });
    this.setX(x);
    this.setY(y);
    document.body.append(this.el);
    this.BLOCK_IMAGE_WIDTH = 100;
    this.blockThatGotHit = blockThatGotHit;
    this.removeBlock = removeBlock;
    this.blockId = blockId;
    this.ball = ball;
  }
  // BLOCK UPDATES
  update() {
    const block = this.blockThatGotHit();
    if (block) {
      // console.log(block.y, this.ball.y);
      if (this.ball.y < block.y) {
        console.log("yes");
        this.removeBlock(block);
        this.ball.setDirectionDown();
      }
    }
  }
}
