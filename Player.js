class Player extends Sprite {
  constructor() {
    super(10, height / 2, "black")
  }
  move(dx, dy) {
    this.x += dx
    this.y += dy
  }
  keyPressed(keyCode) {
    if (keyCode === UP_ARROW) {
      this.move(0, -5)
    }
    else if (keyCode === DOWN_ARROW) {
      this.move(0, 5)
    }
    else if (keyCode === LEFT_ARROW) {
      this.move(-5, 0)
    }
    else if (keyCode === RIGHT_ARROW) {
      this.move(5, 0)
    }
  }
}