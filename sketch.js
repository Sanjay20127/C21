
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, trash_right, trash_left;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(500,580,1000,20);
	trash_left= new Ground(600,500,20,150);
	trash_right= new Ground(850,500,20,150);

    var ball_options= {
		isStatic: false,
		restitution:0.3,
		friction: 0,
		density: 1.2
	}
	ball= Matter.Bodies.circle(200,100,20,ball_options);
    World.add(world, ball);

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  keyPressed();
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  trash_right.display();
  trash_left.display();
  Engine.update(engine);

  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:0.5});
	
  }
}


