var sea,seaimg
var e 
var ship ,shipan
var s2

function preload(){
  shipan = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png");
 seaimg = loadImage("sea.png")
}

function setup(){
  
  sea = createSprite(300,191,600,10)
  sea.addImage(seaimg)
  s2 = createSprite(300,200,600,10)
  createCanvas(800,600)
  e = createEdgeSprites()

 ship = createSprite(50,100,20,50);
  ship.addAnimation("moveing",shipan);
  ship.scale = 0.7
  sea.velocityX = -3
  s2.visible = false
}

function draw(){
  drawSprites()

  if(sea.x<0){
    sea.x = width/2
  }
 
ship.collide(s2)


}