
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
const Mouse = Matter.Mouse; 
 
const MouseConstraint = Matter.MouseConstraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	let canvasmouse = Mouse.create(canvas.elt);
	 canvasmouse.pixelRatio = pixelDensity();
	  let options = { mouse: canvasmouse };
	   mConstraint = MouseConstraint.create(engine, options); 
	   World.add(world, mConstraint);
		pendulum1 = new pendulam(340, 450, "#00b0ff");
		 pendulum2 = new pendulam(400, 450, "#e91e63");
		  pendulum3 = new pendulam(460, 450, "#ffc107");
		   pendulum4 = new pendulam(520, 450, "#e91e63");
			pendulum5 = new pendulam(580, 450, "#00b0ff");
			 sling1 = new Rope(pendulum1.body, { x: 340, y: 200 });
			  sling2 = new Rope(pendulum2.body, { x: 400, y: 200 }); 
			  sling3 = new Rope(pendulum3.body, { x: 460, y: 200 });
			   sling4 = new Rope(pendulum4.body, { x: 520, y: 200 }); 
			   sling5 = new Rope(pendulum5.body, { x: 580, y: 200 });
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  pendulum1.display();
   pendulum2.display(); 
   pendulum3.display();
	pendulum4.display();
	 pendulum5.display();
	  sling1.display();
	   sling2.display(); 
	  sling3.display();
	   sling4.display(); 
	  sling5.display();
  Engine.update(engine)
  drawSprites();
 
}


function mouseDragged() {
	 Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
	 }


