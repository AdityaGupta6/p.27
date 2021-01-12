
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ball1, ball2, ball3,ball4,ball5

var roof;
var rope1,rope2,rope3,rope4,rope5;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800,550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new Ball(350,450,30)
	ball2=new Ball(380,450,30)
	ball3=new Ball(410,450,30)
	ball4=new Ball(440,450,30)
	ball5=new Ball(470,450,30)

	ground=new Ground(400,540,800,10)
roof=new Roof(370,100,400,30)

rope1=new Rope(ball1.body,roof.body,-120,0)
rope2=new Rope(ball2.body,roof.body,-60,0)
rope3=new Rope(ball3.body,roof.body,0,0)
rope4=new Rope(ball4.body,roof.body,60,0)
rope5=new Rope(ball5.body,roof.body,120,0)
console.log(ball2.body.position.x)
console.log(ball3.body.position.x)
console.log(ball1.body.position.x)
console.log(ball4.body.position.x)
console.log(ball5.body.position.x)
keyPressed()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ball1.display()
ball2.display()
ball3.display()
ball4.display()
ball5.display()

ground.display()
roof.display()

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()


  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Body.applyForce(ball1.body,ball1.body.position,{x:11,y:-12})
	}
	
	
	
	
	}


