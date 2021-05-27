//algorithms: set of instructions to do a particular jobob
function setup() {
  createCanvas(800,400);
 fr= createSprite(400, 200, 50, 50);  //fixed rectangle  width=50/2=25
 fr.shapeColor="green"
 mr=createSprite(100,200,30,30)   //width=30/2=15 ,15+25=40
 mr.shapeColor="green"
}

function draw() {
  background("blue"); 
  mr.x=mouseX
  mr.y=mouseY 
  console.log(mr.x-fr.x)
  if(mr.x-fr.x < mr.width/2+fr.width/2 && fr.x-mr.x < mr.width/2+fr.width/2 &&mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<mr.height/2+fr.height/2 )
  {
    mr.shapeColor="pink"
    fr.shapeColor="pink"
  }
  else
  {
    mr.shapeColor="green"
    fr.shapeColor="green"
  }
  
  drawSprites();
}