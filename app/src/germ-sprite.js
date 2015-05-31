function Germ() {
  var germ = pickGermSprite();
  germ.setSpeed(4);
  germ.setPosition(Math.random() * 800, 50);
  germ.setAngle(180);
  germ.setBoundAction(WRAP);
  
  germ.maybeChangeDirection = function() {
    var randomNum = Math.random() * 100;
    
    if (randomNum <= 10) {
      var newDir = (Math.random() * 90) - 45;
      this.changeAngleBy(newDir);
    }    
  };
  
  return germ;
}

function pickGermSprite() {
  var spriteList = {
    0 : new Sprite(game, './assets/germ1.png', 59, 78),
    1 : new Sprite(game, './assets/germ2.png', 61, 80),
    2 : new Sprite(game, './assets/germ3.png', 71, 57)
  };
  
  return spriteList[Math.floor(Math.random()* 3)];
}
