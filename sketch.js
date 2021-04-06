var canvas,bg;
var together;
var cat,catimg1,catimg2;
var mouse,mouseimg1,mouseimg2;

function preload() {
    //load the images here
  bg=loadImage("garden.png");
  catimg1=loadAnimation("cat1.png");
  catimg2=loadAnimation("cat2.png","cat3.png");
  catimg3=loadAnimation("cat4.png");
  mouseimg1=loadAnimation("mouse1.png");
  mouseimg2=loadAnimation("mouse2.png","mouse3.png");
  mouseimg3=loadAnimation("mouse4.png")


}

function setup(){
    createCanvas(1000,800);


    cat=createSprite(870,600);
    cat.addAnimation("catSleeping",catimg1);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseimg2);
    mouse.scale=0.15;


}

function draw() {

    background(bg);

      if(cat.x-mouse.x<(cat.width-mouse.width)/2);

      cat.velocityX=0;
      cat.addAnimation(catimg3);
      cat.x=300;
      cat.scale=0.2;
      cat.changeAnimation(catimg4);
      mouse.addAnimation(mouseimg3);
      mouse.scale=0.15;
      mouse.changeAnimation(mouseimg4);

    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
    cat.velocity=-5;
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing");
}
}
