window.addEventListener('load', init);

var game,
    spaceShip;

function init() {
  game = new Scene();
  
  background = new Background();
  spaceShip = new SpaceShip();
  
  game.start();
}

function update() {
  game.clear();
  
  background.update();
  
  spaceShip.checkKeys();
  spaceShip.update();
}
