window.addEventListener('load', init);

var game,
    spaceShip,
    germs;

function init() {
  game = new Scene();
  
  background = new Background();
  spaceShip = new SpaceShip();
  
  germs = setUpGerms();
  
  game.start();
}

function update() {
  game.clear();
  
  background.update();
  
  changeGermPosition();
  
  spaceShip.checkKeys();
  spaceShip.update();
  updateLasers();
  
  updateGerms();
}

function updateLasers() {
  var lasers = spaceShip.lasers;
  for( var i = 0; i < lasers.length; i++) {
    lasers[i].update();
  }
}

function setUpGerms() {
  germArray = [];

  for(var i = 0; i < 5; i++) {
    germArray.push(new Germ());
  }

  return germArray;
}

function updateGerms() {
  for(var i = 0; i < germArray.length; i++) {
    germArray[i].update();
  }
}

function changeGermPosition() {
  for(var i = 0; i < germArray.length; i++) {
    germArray[i].maybeChangeDirection();
  }  
}

