class Player extends Sprite {
  constructor() {
    super(10, height / 2, "black")
  }

  attack(z) {
    if (checkCC(this.x, this.y, this.width, z.x, z.y, z.width, 20)) {
      console.log("hit")
    } else console.log("no hit")
  }
  
  collect(item) {

  }

  keyPressed() {
    if (keyCode === UP_ARROW) {
      this.move(0, -1)
    } else if (keyCode === DOWN_ARROW) {
      this.move(0, 1)
    } else if (keyCode === LEFT_ARROW) {
      this.move(-1, 0)
    } else if (keyCode === RIGHT_ARROW) {
      this.move(1, 0)
    }
  }
}