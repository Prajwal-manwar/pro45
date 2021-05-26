
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, groundImg;

function preload() {
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ground = new Ground(400, 770, 800, 20);


	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
 
}



