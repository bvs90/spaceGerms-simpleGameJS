window.addEventListener('load', init);

var game,
    spaceShip,
    germs,
    timer;

function init() {
  game = new Scene();
  
  background = new Background();
  spaceShip = new SpaceShip();
  
  germs = setUpGerms();
  
  timer = new Timer();
  
  game.start();
}

function update() {
  game.clear();
  
  background.update();
  
  changeGermPosition();
  
  spaceShip.checkKeys();
  spaceShip.update();
  updateLasers();
  
  addGerms();
  
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
    checkForCollisions(i);
    germArray[i].update();
  }
}

function changeGermPosition() {
  for(var i = 0; i < germArray.length; i++) {
    germArray[i].maybeChangeDirection();
  }  
}

function checkForCollisions(germ) {
  var lasers = spaceShip.lasers;
  for( var i = 0; i < lasers.length; i++) {
    if (lasers[i].collidesWith(germs[germ])) {
      germs[germ].hide();
      lasers[i].hide();
    }
  }
}

function addGerms() {
  
  var currentTime = timer.getElapsedTime();
  
  if (currentTime > 5) {
    for(var i = 0; i < 5; i++) {
      germs.push(new Germ());
    }
    
    timer.reset() ;
  } 
  
}
