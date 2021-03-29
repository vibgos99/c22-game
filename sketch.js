const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,ground);

    var bounce={
        restitution: 2
    }
    var bounce2={
     restitution:2
    }

   ball= Bodies.circle(120,50,14,bounce2);
   World.add(world,ball);


   ball1= Bodies.circle(180,75,60,bounce);
   World.add(world,ball1);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("pink")
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
     fill("blue")
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,35,35);
    fill("purple")

    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,35,35);
   
}
