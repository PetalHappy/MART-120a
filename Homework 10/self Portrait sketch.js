           
var arcY = 145
var browDirection =5

 var eyesX = 200
 var eyesDirection = 1     
    
 var earsY = 185
 var earsDirection = 2

 var neckX = 210
 var neckDirection = 2
 var size = 32
 var count = 0
 var sizeDirection = 2
 
 var noseX = 250
 var noseY =175
 var noseDirection =2
 var pupilX = 200

 var movement;
           
function setup() 
{
  createCanvas(500, 600);
  movement = floor(random() *10)+1;
 }

function draw() 
{
  background(120);
 
  //hair
  fill(238,200,143);
  rect(127,155,248,350);
   fill(238,200,143);
  circle(250,190,285);
  
  //neck
  fill(220,175,165);
  rect(neckX,335,75,100);

    neckX += neckDirection;
    if(neckX <=0 || neckX >= 400)
    {
    neckDirection *= -1;
    }
    neckX += movement;
       
  //face
  fill(220,175,155);
  ellipse(250,195,265,300);
   
  //eyes
  fill(82,139,139);
  circle(eyesX,150,40);
  fill(82,139,139);
  circle(eyesX+100,150,40);

  eyesX += eyesDirection;
     
if(eyesX <=150 || eyesX >= 300)
    {
    eyesDirection *= -1;
    }
    eyesX += movement;

  //pupil
  fill(10,10,10);
  circle(pupilX,150,15);
  fill(10,10,10);
  circle(pupilX+100,150,15);

  if(pupilX >= 0 || pupilX <= 500 )
  {
    movement *=-1;
    }

    pupilX += movement;
  
  //nose
  fill(220,175,165);
  triangle(noseX,noseY,noseX-20,noseY+40,noseX+20,noseY+40);

  noseX += noseDirection;
  noseY += noseDirection;
  if(noseX <=125 || noseX >=350)
  {
    noseDirection *= -1;
  }


  //lips
  fill(275,45,95);
  ellipse(250,255,140,35);
  line(180,255,320,255);

   //ears
  fill(220,175,165);
  ellipse(115,earsY,20,55);
  ellipse(385,earsY,20,55);

    earsY += earsDirection;
    if(earsY <=150 || earsY >= 225)
   {
    earsDirection *= -1;
   }

   earsY += movement;
   

  //earrings
  fill(10,10,10);
  circle(115,202,5);
  circle(385,202,5);

   //eyebrows
  noFill();
  arc(200, arcY, 60, 60, PI + QUARTER_PI, TWO_PI);
  arc(300, arcY, 60, 60, PI + QUARTER_PI, TWO_PI);

arcY += browDirection;
if(arcY <=165 || arcY >= 105)
{
    browDirection *= -1;
}

//bangs
  fill(235,200,143);
  ellipse(250,65,165,45);

   //shirt
  fill(123,112,255);
  rect(75,375,335,250);

  //arms
  line(150,475,150,575);
 line(330,475,330,575);
 
 //title
  textSize(size);
  size += sizeDirection;
  count ++;
  if(count > 5)
  {
    sizeDirection *=-1;
    count = 0;
  }
  text("Self Portrait",10,30);

  textSize(24);
  text("Amanda",385,350);
  text("Hall",390,370);

  }
