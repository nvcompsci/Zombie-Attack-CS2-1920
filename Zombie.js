class Zombie extends Sprite {
   constructor() {
    super(width -10, height * Math.random(), "red")
    this.vx = -this.SPEED
  }
}