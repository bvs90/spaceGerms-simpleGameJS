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
  updateLasers();
}

function updateLasers() {
  var lasers = spaceShip.lasers;
  for( var i = 0; i < lasers.length; i++) {
    lasers[i].update();
  }
}
