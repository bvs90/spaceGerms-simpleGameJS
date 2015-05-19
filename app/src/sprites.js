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
  
  spaceShip.checkKeys = function() {
    if (keysDown[K_LEFT]) {
      this.changeXby(-10);
    }
    if (keysDown[K_RIGHT]) {
      this.changeXby(10);
    }
    if (keysDown[K_UP]) {
      this.changeYby(-10);
    }
    if (keysDown[K_DOWN]) {
      this.changeYby(10);
    }
    if (keysDown[K_SPACE]) {
      this.lasers.push(new LaserBeam());
    }   
  };
  
  return spaceShip;
}

function LaserBeam() {
  var laserBeam = new Sprite(game, './assets/laser-beam.png', 94, 14);
  laserBeam.hide();
  laserBeam.show();
  laserBeam.setBoundAction(DIE);
  laserBeam.setPosition(spaceShip.x, (spaceShip.y)-65);
  laserBeam.setAngle(spaceShip.getImgAngle()-90);
  laserBeam.setSpeed(15);
  
  return laserBeam;
}
