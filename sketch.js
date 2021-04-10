const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    hammer2 = new Hammer(200,100);
  
    rubber = new Rubber(100,50,30);
    rubber2 = new Rubber(120,70,30); 
    rubber3 = new Rubber(140,90,30);
    rubber4 = new Rubber(160,30,30); 

    
    sqare = new square(180,30);
    sqare2 = new square(200,20);
    sqare3 = new square(90,10);
    sqare4 = new square(210,30);
    sqare5 = new square(10,30);

    glass1 = new iron(40,50);
    glass2 = new iron(80,90);
    glass3 = new iron(100,120);
    glass4 = new iron(120,60);
    glass5 = new iron(88,90);

    
}  





function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    hammer2.display(); 
 
    rubber.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();

    sqare.display();
    sqare2.display();
    sqare3.display();
    sqare4.display();
    sqare5.display();

   
    glass1.display();
    glass2.display();
    glass3.display();
    glass4.display();
    glass5.display();
}