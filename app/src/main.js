window.addEventListener('load', init);

var game;

function init() {
  game = new Scene();
  
  background = new Background();
  
  game.start();
}

function update() {
  game.clear();
  
  background.update();
}
