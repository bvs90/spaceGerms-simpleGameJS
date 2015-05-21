function Background() {
  var background = new Sprite(game, './assets/space-background.gif', 800, 1200);
  background.setDX(0);
  background.setDY(0.5);
  background.setPosition(400,300);
  
  background.checkBounds = function(){
    if (this.y > 600){
      this.setPosition(400, 0);
    }      
  };
  
  return background;
}

function SpaceShip() {
  var spaceShip = new Sprite(game, './assets/test-ship.png', 41, 78);
  spaceShip.setSpeed(0);
  spaceShip.setPosition(400, 550);
  spaceShip.lasers = [];
  
  spaceShip.setBoundAction(STOP);
  
  spaceShip.checkKeys = function() {
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
  };
  
  return spaceShip;
}

function LaserBeam() {
  var laserBeam = new Sprite(game, './assets/laser-beam.png', 94, 14);
  laserBeam.setBoundAction(DIE);
  laserBeam.setPosition(spaceShip.x, (spaceShip.y)-65);
  laserBeam.setAngle(spaceShip.getImgAngle()-90);
  laserBeam.setSpeed(15);
  
  return laserBeam;
}
