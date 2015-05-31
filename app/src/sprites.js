function Background() {
  var background = new Sprite(game, './assets/space-background.gif', 800, 1200);
  background.setDX(0);
  background.setDY(1.5);
  background.setPosition(400,300);
  
  background.checkBounds = function(){
    if (this.y > 600){
      this.setPosition(400, 0);
    }      
  };
  
  return background;
}

function LaserBeam() {
  var laserBeam = new Sprite(game, './assets/laser-beam.png', 54, 7);
  laserBeam.setBoundAction(DIE);
  laserBeam.setPosition(spaceShip.x, (spaceShip.y)-65);
  laserBeam.setAngle(spaceShip.getImgAngle()-90);
  laserBeam.setSpeed(15);
  
  return laserBeam;
}



