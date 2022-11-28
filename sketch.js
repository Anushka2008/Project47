var bg
var blueBalloonImg
var redBalloonImg
var greenBalloonImg
var blueBalloon, redBalloon, greenBalloon
var dart1, dartImg, dart2
var burstImg
var balloonGroup
var scorePlr1=0
var scorePlr2=0
var play, gameOver
var gameState="play";

function preload(){
  bg=loadImage("background.jpg")
  blueBalloonImg= loadAnimation("BlueBalloon.png")
  redBalloonImg= loadAnimation("RedBalloon.png")
  greenBalloonImg= loadAnimation("GreenBalloon.png")
  dartImg= loadImage("Dart.png")
  burstImg= loadAnimation("burst.png")

}
function setup() {
  createCanvas(700,900);
  
  dart1=createSprite(620,750);
  dart1.addImage(dartImg);
  dart1.scale=0.15;
  
  dart2= createSprite(620,100);
  dart2.addImage(dartImg);
  dart2.scale=0.15;
 
  balloonGroup=createGroup();
}

function draw() 
{
  background(bg);
  fill("white");
  textSize(20);
  text("player1", dart1.x, dart1.y-50);
  text ("player2", dart2.x, dart2.y-50);
  text("Player 1 Score:"+scorePlr1, 450, 35)
  text("Player 2 Score:"+scorePlr2, 200, 35)


  play();

  drawSprites();
}

function spawnBalloons(){
  
  if(frameCount%50==0){
    var newBalloon= createSprite(100,random(100,600))
    newBalloon.velocityX=4
    newBalloon.scale=0.7
    newBalloon.lifetime=90;
    var rand=Math.round(random(1,3))
    switch(rand){
      case 1: newBalloon.addAnimation("blue",blueBalloonImg)
      break;  
      case 2: newBalloon.addAnimation("red",redBalloonImg)
      break;
      case 3: newBalloon.addAnimation("green",greenBalloonImg)
      break;
      default: break;
    }

    balloonGroup.add(newBalloon); 
    
  }
}

function play(){
  if(keyDown(UP_ARROW)){
    
    dart1.y=dart1.y-5
  }
  if (keyDown(DOWN_ARROW)){
    
    dart1.y=dart1.y+5
  }

  if(keyDown("w")){
    
    dart2.y=dart2.y-5
  }
  if (keyDown("s")){
    
    dart2.y=dart2.y+5
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    dart1.velocityX=-35
  }

  if(keyDown("d")){
    dart2.velocityX=-35
  }

  if(dart1.x<0){
    dart1.x=620;
    dart1.y= random(50,850);
    dart1.velocityX=0

  }

  if(dart2.x<0){
    dart2.x=620;
    dart2.y= random(50,850);
    dart2.velocityX=0
  }
  
  for(var i=0; i<balloonGroup.length;i++){
    
    if(dart1.isTouching(balloonGroup[i])){
      dart1.x=620;
      dart1.velocityX=0;
      scorePlr1=scorePlr1+3
      balloonGroup[i].addAnimation("blast",burstImg);
      balloonGroup[i].changeAnimation("blast");
      balloonGroup[i].scale=0.1;
      balloonGroup[i].velocityX=0;

     
    }
    if(dart2.isTouching(balloonGroup[i])){
      dart2.x=620;
      scorePlr2=scorePlr2+3
      dart2.velocityX=0;
      balloonGroup[i].addAnimation("blast",burstImg);
      balloonGroup[i].changeAnimation("blast");
      balloonGroup[i].scale=0.1;
      balloonGroup[i].velocityX=0;
      
     
    }
  }
  
  spawnBalloons();
}

function gameOver(){
  
  
}
