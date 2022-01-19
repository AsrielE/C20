
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var bouncy;
var floor;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var bouncy_options = {
    restitution: 1.25,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var floor_options ={
    isStatic: true
  };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  floor = Bodies.rectangle(390,200,250,20,floor_options);
  World.add(world,floor);

  bouncy = Bodies.circle(350,160,20,bouncy_options);
  World.add(world,bouncy);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
  ellipse(bouncy.position.x,bouncy.position.y,20);
  rect(floor.position.x,floor.position.y,250,20);
}

