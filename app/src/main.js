window.addEventListener('load', init);

var game,
    spaceShip,
    germs,
    timer,
    kills,
    explosion;

var score = document.querySelector('.score');

    
function init() {
  game = new Scene();
  
  background = new Background();
  spaceShip = new SpaceShip();
  
  germs = setUpGerms();
  
  timer = new Timer();
  
  kills = 0;
  score.innerHTML = kills;
  
  game.start();
}

function update() {
  game.clear();
  
  background.update();
  
  changeGermPosition();
  
  spaceShip.checkKeys();
  spaceShip.checkForCollisionsWithGerms();
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
  for (var i = 0; i < lasers.length; i++) {
    if (lasers[i].collidesWith(germs[germ])) {
      germs[germ].hide();
      lasers[i].hide();
      updateKills();
    }
  }
}

function updateKills() {
  kills++;
  score.innerHTML = kills;
}

function addGerms() {
  var currentTime = timer.getElapsedTime();
  
  if (currentTime > 3) {
    for(var i = 0; i < 5; i++) {
      germs.push(new Germ());
    }
    timer.reset();
  } 
}

function resetGame() {
  spaceShip.changeImage('./assets/explosion.png');
  spaceShip.width = 68;
  spaceShip.height = 61;
  
  // override the function to stop sprite from moving
  spaceShip.checkKeys = noop;
  
  window.setTimeout(clearCanvas, 2000);
}

function clearCanvas() {
  // game.clear();
  // game.stop();
  
  // var canvas = document.querySelector('canvas');
  // var body = document.body;
  // body.removeChild(canvas);
  
  // init(); 
   
  document.location.href = '';
}

function noop() {
  return;
}

