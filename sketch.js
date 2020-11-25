var bullet,speed,weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(200,200,40,10);
  bullet.shapeColor = color(255,255,255);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}
function draw() {
  background(0,0,0);
  if(hasCollided){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage < 10){
      wall.shapecolor = color(0,255,255);
    }
  } 
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wall.LeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}