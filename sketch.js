const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine,myWorld;
var ground1,ball1;
var box1,box2,box3,box4,box5;
var box10 = [];

function setup() {
  createCanvas(1200,600);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  angleMode(RADIANS);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  
  ground1 = new ground(0,height-100,width+600,10);
  
  ball1 = new ball(400,250,20,20);

  /*box1 = new box(300,400,50,50);
  box2 = new box(330,430,50,50);
  box3 = new box(370,470,50,50);
  box4 = new box(400,370,50,50);
  box5 = new box(430,350,50,50);*/

  for (i = 0; i<14; i++){
    box10.push(new box(random(400,700),random(200,400),50,50));
    
  }
  
}

function draw() {
  background(150);  

  Engine.update(myEngine);
  
  ground1.display();
  ball1.display();

 /* box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();*/

  for (i = 0; i<14; i++){
    box10[i].display();
  }

  line(400,0,400,250);
    
}