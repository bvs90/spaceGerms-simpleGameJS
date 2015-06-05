function SpaceShip() {
  var spaceShip = new Sprite(game, './assets/test-ship.png', 41, 78);
  spaceShip.setSpeed(0);
  spaceShip.setPosition(400, 550);
  spaceShip.lasers = [];
  
  spaceShip.checkKeys = checkKeys;
  
  spaceShip.checkForCollisionsWithGerms = checkForCollisionsWithGerms;
  
  return spaceShip;
}

function checkKeys() {
    if (keysDown[K_LEFT]) {
      if (this.x > 40) {
        this.changeXby(-10);
      }
    }
    if (keysDown[K_RIGHT]) {
      if (this.x < 760) {
        this.changeXby(10);
      }
    }
    if (keysDown[K_UP]) {
      if (this.y > 50) {
        this.changeYby(-10);
      }
    }
    if (keysDown[K_DOWN]) {
      if (this.y < 550) {
        this.changeYby(10);
      }
    }
    if (keysDown[K_SPACE]) {
      this.lasers.push(new LaserBeam());
    }     
}

function checkForCollisionsWithGerms() {
  for (var i = 0; i < germs.length; i++) {
    if (this.collidesWith(germs[i])) {
      resetGame();
    }
  }
}
