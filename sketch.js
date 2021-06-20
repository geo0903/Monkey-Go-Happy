var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300)
  monkey=createSprite(100,280,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
 ground=createSprite(300,300,1500,20)
 monkey.collide(ground)
  monkey.debug = true;
  
  
  
  score = 0;
}


function draw() {
background("white")
   ground.velocityX = -4 
   
  if (ground.x < 0){
      ground.x = ground.width/2;
    
    }
  if(gameState===PLAY){
  if(frameCount % 60 ===0) {
    obstacle=createSprite(600,275,20,20);
    obstacle.x = Math.round(random(550,600));
  obstacle.addImage(obstaceImage)
  obstacle.scale=0.1
   obstacle.velocityX = -6 
    obstacle.lifetime = 300;
    if(monkey.isTouching(obstacle)){
      gameState=END;
    }
  }
  
 spawnbanana();
    text("Score: "+ score,500,40)
  
   if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
    }
    
  
    monkey.velocityY = monkey.velocityY + 0.8
  }else if(gameState===END){
    reset();
    monkey.setVelocity(0,0)
  }
  monkey.collide(ground)
  
 
  drawSprites();
}
function reset(){
  gameState=PLAY;
  score=0;
  
}

function spawnbanana (){
    if(frameCount % 60 ===0) {
    banana=createSprite(600,150,20,20);
       banana.y = Math.round(random(170,130));
        banana.x = Math.round(random(570,640));
  banana.addImage(bananaImage)
  banana.scale=0.1
   banana.velocityX = -6 
    banana.lifetime = 300;
      if(monkey.isTouching(banana)){
        score = score + 1
         bananaGroup[0].destroyEach();
        bananaGroup.add(banana)
      }
}
}
function spawnobstacle(){
    if(frameCount % 60 ===0) {
    obstacle=createSprite(600,275,20,20);
    obstacle.x = Math.round(random(550,600));
  obstacle.addImage(obstaceImage)
  obstacle.scale=0.1
   obstacle.velocityX = -6 
    obstacle.lifetime = 300;
    if(monkey.isTouching(obstacle)){
      gameState=END;
    }
  }
}




