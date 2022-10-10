export class Entity {
  constructor({ tag = "div", className = "" } = {}) {
    this.el = document.createElement(tag);
    document.body.append(this.el);
    this.el.className = className;
    this.el.style.position = "fixed";
    this.x;
    this.y;
  }
  setX(x) {
    this.x = x;
    this.el.style.left = `${this.x}px`;
  }
  setY(y) {
    this.y = y;
    this.el.style.top = `${this.y}px`;
  }
  remove() {
    if (this.el) {
      this.el.remove();
      this.el = null;
    }
  }
}
