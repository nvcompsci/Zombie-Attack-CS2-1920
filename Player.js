class Player extends Sprite {
  constructor() {
    super(10, height / 2, "black")
  }
  keyPressed(keyCode) {
    if (keyCode === UP_ARROW) {
      this.move(0, -1)
    }
    else if (keyCode === DOWN_ARROW) {
      this.move(0, 1)
    }
    else if (keyCode === LEFT_ARROW) {
      this.move(-1, 0)
    }
    else if (keyCode === RIGHT_ARROW) {
      this.move(1, 0)
    }
  }
}