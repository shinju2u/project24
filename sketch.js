var ball,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,690,800,20,ground_options);
    World.add(world,ground);  
    
    var boxr_options ={
        isStatic: true
    }
    boxr = Bodies.rectangle(500,640,20,80,boxr_options);
    World.add(world,boxr);   
    
    var boxl_options ={
        isStatic: true
    }

    boxl = Bodies.rectangle(700,640,20,80,boxl_options);
    World.add(world,boxl); 

    

     var ball_options ={
         isStatic : false,
        restitution: 0.3,
		density : 2.5,
		friction : 1.2
    }
    ball = Bodies.circle(50,500,20, ball_options);
    World.add(world,ball);
	  
}


function draw(){
    background(0);

    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);

    rectMode(CENTER);
    rect(boxr.position.x,boxr.position.y,20,80);

    rectMode(CENTER);
    rect(boxl.position.x,boxl.position.y,20,80);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    }

function keyPressed (){
if(keyCode === LEFT_ARROW){


    Body.applyForce(ball,ball.position,{x:100,y:100});
}


    }
