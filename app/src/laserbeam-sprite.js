function LaserBeam() {
  var laserBeam = new Sprite(game, './assets/laser-beam.png', 54, 7);
  laserBeam.setBoundAction(DIE);
  laserBeam.setPosition(spaceShip.x, (spaceShip.y)-65);
  laserBeam.setAngle(spaceShip.getImgAngle()-90);
  laserBeam.setSpeed(15);
  
  return laserBeam;
}
