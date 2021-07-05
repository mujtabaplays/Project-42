var iss;
var hasDocked = false



function preload() {
  spaceimg=loadImage("Docking-undocking/Docking-undocking/spacebg.jpg")
  issimg=loadImage("Docking-undocking/Docking-undocking/iss.png")
  spacecraftimg1=loadImage("Docking-undocking/Docking-undocking/spacecraft1.png")
  spacecraftimg2=loadImage("Docking-undocking/Docking-undocking/spacecraft2.png")
  spacecraftimg3=loadImage("Docking-undocking/Docking-undocking/spacecraft3.png")
  spacecraftimg4=loadImage("Docking-undocking/Docking-undocking/spacecraft4.png")
}



function setup() {
  createCanvas(800,400);
 iss=createSprite(400, 130, 50, 50);
 iss.addImage(issimg)
 iss.scale=0.5
 spacecraft=createSprite(285,260,50,50)
 spacecraft.addImage(spacecraftimg1)
 spacecraft.scale=0.15
}

function draw() {
  background(spaceimg);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
   
  if(keyDown("LEFT_ARROW")){
   spacecraft.addImage(spacecraftimg3)
   spacecraft.x=spacecraft.x-1
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraftimg4)
    spacecraft.x=spacecraft.x+1
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraftimg2)
  }

  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-2
  }
  
}

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
   hasDocked = true
   textSize(25)
    fill("white");
    text("Docking Successful!",200,300)
  }


  drawSprites();
}