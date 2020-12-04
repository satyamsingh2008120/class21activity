var rect1, rect2;
var gameObject1,gameObject2;
var bounce1,bounce2

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100, 200, 50, 50);
  //rect1.velocityX = 3
  rect2 = createSprite(700, 200, 30, 30)
  //rect2.velocityX = -3
  gameObject1 = createSprite(200, 70, 50, 50);
  gameObject2 = createSprite(400, 100, 30, 30)
  bounce1 = createSprite(200, 300, 50, 50);
  bounce1.velocityX = 3 
  bounce2 = createSprite(700, 300, 30, 30)
  bounce2.velocityX = -3 
}

function draw() {
  background("green");  
  drawSprites();

   bounce(bounce1,bounce2)

   rect1.x=World.mouseX
   rect1.y=World.mouseY
  
   if(isTouching(rect1,gameObject1))
   {
     rect1.shapeColor = "purple"
     gameObject1.shapeColor="purple"
 
   }else{

    gameObject1.shapeColor = "yellow"
   }
   if(isTouching(rect1,gameObject2))
   {
     rect1.shapeColor = "red"
     gameObject2.shapeColor="red"
 
   }else{

    gameObject2.shapeColor = "yellow"
   }
  }

