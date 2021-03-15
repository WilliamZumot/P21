var bullet, wall;
var speed, weight;
var deformation;
var thickness;

function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(50, 200, 100, 30);
  bullet.shapeColor = color(225, 225, 225);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);


  speed = random(223, 321);
  weight = random(30, 52);

  thickness = random(22, 83);
  
}

function draw() {
  background(130,130,130);
  
  bullet.velocityX = speed;

  bullet.collide(wall)

  if(wall.x-bullet.x <= (bullet.width+wall.width)/2){

    bullet.velocityX = 0

    deformation = (0.5 * weight * speed * speed) /
     (thickness * thickness * thickness);

    if(deformation < 10){
      bullet.shapeColor = color(0, 255, 0);
    }

    if(deformation > 10){
      bullet.shapeColor = color(255, 0, 0);
    }
  }

  drawSprites();
}