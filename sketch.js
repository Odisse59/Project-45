var player, playerImg, blueghost, blueghostImg,bg;
var redghost, reghostImg, yellowghost, yellowghostImg

function preload(){
bg = loadImage("spacebg.png")
blueghostImg = loadImage("blueghost.png")
playerImg = loadImage("pacman.png")
redghostImg = loadImage("redghost.png")
yellowghostImg = loadImage("yellowghost.png")
}

function setup() {
  createCanvas(1000,650);
  player = createSprite(370, 200, 50, 50);
  player.addImage(playerImg)
  player.scale = 0.09
  blueghost = createSprite(600, 200, 50, 50);
  blueghost.addImage(blueghostImg)
  blueghost.scale = 0.04
  redghost = createSprite(700, 200, 50, 50);
  redghost.addImage(redghostImg)
  redghost.scale = 0.10
  yellowghost = createSprite(500, 200, 50, 50);
  yellowghost.addImage(yellowghostImg)
  yellowghost.scale = 0.10
  wall1 = createSprite(500,150,30,100)
  wall2 = createSprite(300,150,30,100)
  wall3 = createSprite(400,110,300,30)
  wall4 = createSprite(500,190,200,30)
  wall5 = createSprite(300,300,30,200)
  wall6 = createSprite(425,400,300,30)
  wall7 = createSprite(500,150,30,100)
  wall8 = createSprite(560,360,30,100)
  wall9 = createSprite(595,310,100,30)
  wall10 = createSprite(630,400,30,160) 
  wall11 = createSprite(495,490,300,30)
  wall12 = createSprite(640,190,270,30)
  wall13 = createSprite(760,390,30,370)
  wall14 = createSprite(675,590,200,30)
  wall15 = createSprite(465,590,620,30)  
  wall16 = createSprite(150,455,30,300)
  wall17 = createSprite(150,160,30,300) 
  wall18 = createSprite(400,27,500,30)
  wall19 = createSprite(470,27,670,30)
}

function draw() {
  background(bg);  

  drawSprites();
}