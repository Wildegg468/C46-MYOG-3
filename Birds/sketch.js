
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var flappyBird_img;
var racerBird_img;
var background_img;
var bird;

function preload()
{
flappyBird_img = loadImage("images/flappy_bird.png");
racerBird_img = loadImage("images/racer_bird.png");
background_img = loadImage("images/background.png")

}


function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
bird = new Bird(200,200,10,10);


}


function draw() {
  rectMode(CENTER);
  background(background_img);

  bird.display();
  
  drawSprites();
 
}



