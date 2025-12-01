           function setup() {
  createCanvas(500, 600);
}

function draw() 
{
  background(120);

  //title
  textSize(32);
  text("Self Portrait",10,30);
  
    textSize(24);
  text("Amanda",385,350);
  text("Hall",390,370);
  
  //hair
  fill(238,200,143);
  rect(127,155,248,350);
   fill(238,200,143);
  circle(250,190,285);
  
  //face
  fill(220,175,165);
  rect(210,335,75,100);
   fill(220,175,155);
  ellipse(250,195,265,300);
  //eyes
  fill(82,139,139);
  circle(200,150,40);
  fill(82,139,139);
  circle(300,150,40);
  
  fill(10,10,10);
  circle(200,150,15);
  fill(10,10,10);
  circle(300,150,15);
  fill(220,175,165);
  triangle(250,175,230,215,270,215);
  fill(275,45,95);
  //lips
  ellipse(250,255,140,35);
  line(180,255,320,255);
  fill(220,175,165);
  //ears
  ellipse(115,185,20,55);
  ellipse(385,185,20,55);
  fill(10,10,10);
  circle(115,202,5);
  circle(385,202,5);
  noFill();
  //eyebrows
  arc(200, 125, 60, 60, PI + QUARTER_PI, TWO_PI);
  arc(300, 125, 60, 60, PI + QUARTER_PI, TWO_PI);
  fill(235,200,143);
  ellipse(250,65,165,45);
   fill(123,112,255);
   //shirt
  rect(75,375,335,250);
  line(150,475,150,575);
 line(330,475,330,575);

  }
