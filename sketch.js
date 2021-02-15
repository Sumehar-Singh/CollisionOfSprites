
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(900,400,100,100);
	hammer = new Hammers(100, 400);
	rubber = new Rubber(200, 500, 20);
	sand1 = new Sand(400, 500, 10);
	sand2 = new Sand(490, 500, 10);
	sand3 = new Sand(480, 500, 10);
	sand4 = new Sand(410, 500, 10);
	sand5 = new Sand(420, 500, 10);
	sand6 = new Sand(405, 500, 10);
	sand7 = new Sand(495, 500, 10);
	sand8 = new Sand(485, 500, 10);
	sand9 = new Sand(415, 500, 10);
	iron = new Iron(500, 400, 100, 50)
	ground = new Ground(600,height,1200,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  iron.display();
  ground.display();
  drawSprites();
 
}



