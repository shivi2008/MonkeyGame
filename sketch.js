
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
  
  
monkey=createSprite(80,115,20,20);
monkey.addAnimation("moving",monkey_running) 
monkey.scale=0.1;     
  
ground=createSprite(400,150,900,10);  

ground.velocityX=-4;  
ground.x=ground.width/2;  
console.log(ground.x);  
 

FoodGroup=new Group();
obstacleGroup=new Group();
}


function draw() {
background(255);


if(ground.x<0 ){
ground.x=ground.width/2; 
}  
  
if(keyDown("space")){
monkey.velocityY= -14;
}  
  
monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground);  
  
stroke("black");
textSize(20);
fill("black");  
survivalTime= Math.ceil(frameCount/frameRate());
text("Survival Time: "+ survivalTime,100,50);  
  
   
  
drawSprites();  
  
food();
obstacles();
}

function food(){
if(frameCount%80===0){
banana=createSprite(400,random(120,100));
banana.addImage(bananaImage); 
banana.scale=0.1;  
banana.velocityX=-5;
banana.lifetime= 120; 
FoodGroup.add(banana);  
}
}

function obstacles(){
if(frameCount%300===0){
obstacle=createSprite(195,120,100,70);
obstacle.addImage(obstacleImage);
obstacle.scale=0.2
obstacle.velocityX=ground.velocityX;
obstacle.lifetime=150;
obstacleGroup.add(obstacle);
}
}






