class Zombie extends Sprite {
   constructor() {
    super(width -10, height * Math.random(), "red")
     this.SPEED = 2
    this.vx = -this.SPEED
  }
}