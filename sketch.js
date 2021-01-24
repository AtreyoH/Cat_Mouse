var canvas,bg;
var tom, tom1,tom2,tom3
var jerry, jerry1,jerry2,jerry3;

function preload() {
    bg = loadImage("garden.png");
    tom1= loadAnimation("tomOne.png");
    tom2=loadAnimation("tomTwo.png","tomThree.png");
    tom3= loadAnimation("tomFour.png");
    jerry1=loadAnimation("jerryOne.png");
    jerry2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadAnimation("jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleep", tom1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerrySleep", jerry1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomStand", tom3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomStand");
        jerry.addAnimation("feather", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("feather");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tom2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryRunning", jerry2);
        jerry.changeAnimation("jerryRunning");
    }
}