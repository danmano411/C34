const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(350, 400, 50)
    crane1 = new Crane(150, 400, 20, 420)
    crane2 = new Crane(260, 200, 200, 20)
    
    chain = new Chain(ball.body, {x: 350, y: 200})

    block1 = new Block(500, 520)
    block2 = new Block(500, 470)
    block3 = new Block(500, 420)
    block4 = new Block(500, 370)
    block5 = new Block(500, 320)
    block6 = new Block(500, 270)
    block7 = new Block(500, 220)

    ground = new Crane(400, 590, 800, 20)
}

function draw(){
    background("black")
    Engine.update(engine);
    rectMode(CENTER)
    ball.display();
    crane1.display();
    crane2.display();
    chain.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    ground.display();
     
}


function mouseDragged(){
    Body.setPosition(ball.body, {x: mouseX, y:mouseY})
}