const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint
var box,box2,box3,box4,box5,box6
var engine,world
var hex
var slingshot1

function setup() {
  createCanvas(1600,800);
  engine=Engine.create()
  world=engine.world
  Engine.run(engine)
  box = new Box (350,200,50,50)
  box2 = new Box (325,250,50,50)
  box3 = new Box (375,250,50,50)
  box4 = new Box (700,300,50,50)
  box5 = new Box (675,350,50,50)
  box6= new Box (725,350,50,50)
  hex = new Hexagon (100,350,50,50)
  slingshot1= new Slingshot (hex.body,{x:200,y:200})
}

function draw() {
  background(255,255,255);  
  drawSprites();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  hex.display();
  slingshot1.display();


  fill("black")
  text(mouseX+","+mouseY,mouseX,mouseY)
}