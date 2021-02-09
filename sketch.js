var one,two,test1,rest2,test3,test4;

function setup() {
  createCanvas(400,400);
  
  one = createSprite(200,200,40,15);
  one.shapeColor = "black";
 
  two = createSprite(300,100,40,15);
  two.shapeColor = "black";

  test1= createSprite(20,20,20,20);
  test1.shapeColor = "black";

  test2 = createSprite(20,370,20,20);
  test2.shapeColor= "black";

  test3 = createSprite(350,20,20,20);
  test3.shapeColor = "black";

  test4 = createSprite(350,370,20,20);
  test4.shapeColor = "black";

}

function draw() {
  background("lightblue");  

  one.x = World.mouseX;
  one.y = World.mouseY;

  console.log(one.x- two.x)

if (isTouching(one,test4)){
  one.shapeColor = "green";
  test4.shapeColor = "green";
}else{one.shapeColor= "black";
     test4.shapeColor= "black";}

  drawSprites();
}