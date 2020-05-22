var bg;
var tunnel;
var player;
var player_img;
var corona1
var count;
var button;
var platFormimg;
function preload()
{
  bg=loadImage("images/Background.jpg");
  platFormimg=loadImage("platform.jpeg")
  tree=loadImage("images/Tile_34.png");
  player_img=loadAnimation("images/run1.png","images/run2.png","images/run3.png");
  corona1=loadImage("corona/corona2.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight-250);
  player=createSprite(100,displayHeight-300);
  player.addAnimation("run",player_img);
  player.scale=0.5;
  button=createButton("lifeline");
  button.position(100,100);
  
}

function draw() {
  background(bg);
  spawnCorona();
 button.mousePressed(()=>{
   var platForm=createSprite(displayWidth/2-50,400);
   platForm.addImage(platFormimg);
 })
  drawSprites();
  
}
function mousePressed(){
  spawnBullets();
}

function keyPressed() {
  if(keyCode===32)
  {
    player.velocityY=-12;

  }
  player.velocityY+=0.9;
}
function spawnCorona(){
  if(frameCount%100===0){

  
  var corona=createSprite(displayWidth,displayHeight/2);
  corona.addImage(corona1);
  corona.velocityX=-4;
  corona.y=random(0,800);
  corona.scale=0.7;
  }
}
 function spawnBullets()
 {
   console.log("hellow")
   var bullet =createSprite(player.x,player.y,50,50);
   bullet.shapeColor="red";
   bullet.velocityX=2;
   
 }
 function keyPressed() {
  if (keyCode === 32) 
  { 
    spawnBullets(); 
  }
 }