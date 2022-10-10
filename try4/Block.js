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
      console.log(this.ball.direction, "HERE");
      // bottom of block
      if (
        this.ball.direction === "up" ||
        this.ball.direction === "up_left" ||
        this.ball.direction === "up_right"
      ) {
        console.log("bottom of block");
        if (this.ball.y < block.y + 20 && this.ball.direction === "up_left") {
          this.removeBlock(block);
          this.ball.setDirectionDownLeft();
        }
        if (this.ball.y < block.y + 20 && this.ball.direction === "up_right") {
          this.removeBlock(block);
          this.ball.setDirectionDownRight();
        }
        if (this.ball.y < block.y + 20 && this.ball.direction === "up") {
          this.removeBlock(block);
          this.ball.setDirectionDown();
        }
      } else if (
        this.ball.direction === "down" ||
        this.ball.direction === "down_left" ||
        this.ball.direction === "down_right"
      ) {
        // console.log("down");

        // top of block
        console.log("Top of block");

        if (this.ball.y + 30 > block.y && this.ball.direction === "down_left") {
          this.removeBlock(block);
          this.ball.setDirectionUpLeft();
        }
        if (
          this.ball.y + 30 > block.y &&
          this.ball.direction === "down_right"
        ) {
          this.removeBlock(block);
          this.ball.setDirectionUpRight();
        }
        if (this.ball.y + 30 > block.y && this.ball.direction === "down") {
          this.removeBlock(block);
          this.ball.setDirectionUp();
        }
      } else {
        return;
      }
    }
  }
}
