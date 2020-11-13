const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1, ground2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21, block22, block23, block24, block25;
var backgroundImg;
var polygon, polygonImg;

function preload(){
  backgroundImg = loadImage("SKY.png");
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new slingshot(this.polygon,{x:100,y:200});

  ground1 = new ground(390,285,200,10);
  ground2 = new ground(500,185,150,10);

  //level one
  block1 = new block(300,275,30,40);
  block2 = new block(330,275,30,40);
  block3 = new block(360,275,30,40);
  block4 = new block(390,275,30,40);
  block5 = new block(420,275,30,40);
  block6 = new block(450,275,30,40);
  block7 = new block(480,275,30,40);
  //level two
  block8 = new block(330,235,30,40);
  block9 = new block(360,235,30,40);
  block10 = new block(390,235,30,40);
  block11 = new block(420,235,30,40);
  block12 = new block(450,235,30,40);
  //level three
  block13 = new block(360,195,30,40);
  block14 = new block(390,195,30,40);
  block15 = new block(420,195,30,40);
  //top
  block16 = new block(390,155,30,40);

  //level one statue #2
  block17 = new block(440,175,30,40);
  block18 = new block(470,175,30,40);
  block19 = new block(500,175,30,40);
  block20 = new block(530,175,30,40);
  block21 = new block(560,175,30,40);

  //level 2 statue #2
  block22 = new block(470,135,30,40);
  block23 = new block(500,135,30,40);
  block24 = new block(530,135,30,40);

  //top statue #2
  block25 = new block(500,95,30,40);

}

function draw() {
  background(backgroundImg); 
  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

imageMode(CENTER);
image(polygonImg, polygon.position.x,polygon.position.y,40,40);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  polygon.fly();
}