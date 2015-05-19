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
  spaceShip.setSpeed(1);
  spaceShip.setPosition(400, 550);
  
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
  };
  
  return spaceShip;
}
