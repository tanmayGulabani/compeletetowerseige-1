const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {

  engine = Engine.create();
  world = engine.world;
  

  createCanvas(1200,400);
  

  ground1 = new Ground(700,250,300,30);
  ground2 = new Ground(200,250,300,30);
  

  ball = new Ball(450,100,30);

  sling = new SlingShot(ball.body,{x:450,y:100});

  ground = new Ground(500,395,1000,20);

     //level one 
     block1=new Box(190,55,30,40);
      //level three 
     block2=new Box(130,135,30,40); 
     block3=new Box(160,135,30,40); 
     block4=new Box(190,135,30,40); 
     block5=new Box(220,135,30,40); 
     block6=new Box(250,135,30,40); 
     //level two 
     block7= new Box(160,95,30,40);
      block8= new Box(190,95,30,40); 
      block9= new Box(220,95,30,40);
}

    

function draw() {
  background(255,255,255);  
  Engine.update(engine); 

  ground.display();
  
  stroke(15);
  fill("gray")
  block1.display();

  stroke(15);
  fill("red")
  block3.display();
  block4.display();
  block2.display();
  block5.display();
  block6.display();

  stroke(15);
  fill("yellow")
  block9.display();
  block8.display();
  block7.display();






  ball.display();
  
  ground.display();
 
  sling.display();
  ground1.display();
  ground2.display();

  

}
 
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}


