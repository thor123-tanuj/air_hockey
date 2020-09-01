var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal1 = createSprite(200, 28, 100,20);
goal1.shapeColor="yellow";

var goal2 = createSprite(200, 372, 100, 20);
goal2.shapeColor="yellow";

var striker = createSprite(200, 200, 10, 10);
striker.shapeColor="white";

var playerMallet = createSprite(200, 50, 50, 10);
playerMallet.shapeColor="black";

var computerMallet = createSprite(200, 350, 50, 10);
computerMallet.shapeColor="black";

var line1 = createSprite(4,200,9,400);
line1.shapeColor="white";

var line2 = createSprite(200,4,400,9);
line2.shapeColor="white";

var line3 = createSprite(396,200,9,400);
line3.shapeColor="white";

var line4 = createSprite(200,396,400,9);
line4.shapeColor="white";

var line5 = createSprite(20,200,5,400);
line5.shapeColor="white";

var line6 = createSprite(200,20,400,5);
line6.shapeColor="white";

var line7 = createSprite(380,200,5,400);
line7.shapeColor="white";

var line8 = createSprite(200,380,400,5);
line8.shapeColor="white";

var line9 = createSprite(200,140,400,5);
line9.shapeColor="white";

var line10 = createSprite(200,260,400,5);
line10.shapeColor="white";

var gameState="serve";
var computerScore=0;

var playerScore=0;

function draw() {
  
 background("lightgreen");

 for (var i = 0; i < 400; i=i+20) {
  line(i,200,i+10,200);
 }
  
 createEdgeSprites();
 striker.bounceOff(edges);
 playerMallet.bounceOff(edges);
  
  textSize(23)
  
 if (gameState==="serve") {
  text("Press Space to serve",140,160);
  }
 
  if (keyDown("space")&& gameState==="serve") {
   serve();
   gameState="play";
  }
  
  if (keyDown("left")) {
   playerMallet.x=playerMallet.x-10;  
  }
  
  if (keyDown("right")) {
   playerMallet.x=playerMallet.x+10;  
  }
  
  if (keyDown("up")) {
   if (playerMallet.y>25)
   {
    playerMallet.y=playerMallet.y-10;
   }
  }
  
 if (keyDown("down")) {
  if (playerMallet.y<120)
  {
   playerMallet.y=playerMallet.y+10;
  }
 }
  
  computerMallet.x=striker.x;
  
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  
  if (striker.isTouching(goal1||goal2)) {
    
   if (striker.isTouching(goal1)) {
    computerScore=computerScore+1;
   }
      
   if (striker.isTouching(goal2)) {
    playerScore=playerScore+1;
   }
  
   reset();
   gameState="serve";
  }
  
  textSize(15);
  
  text("Computer:"+computerScore,30,170);
  text("Player:"+playerScore,30,230);
  
  if (playerScore===5||computerScore===5) {
   gameState="end";
   text("Game Over",200,180);
   text("Press 'R' to restart",130,230);
  }
  
  if (keyDown("R")&& gameState==="end") {
   gameState==="serve";
   computerScore=0;
   playerScore=0;
  }
  
  
  
drawSprites();
}

function serve(){
striker.velocityX=4;
striker.velocityY=6;
}

function reset(){
striker.x=200;
striker.y=200;
striker.velocityX=0;
striker.velocityY=0;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
