// x and y for my character
var playerX =100;
var playerY=100;
//define the key codes for each letter
var w=87;
var s=83;
var a=65;
var d=68;

var mycircleXs = [];
var mycircleYs = [];
var myDiameters = [];
var circleXSpeed = [];
var circleYSpeed = [];

var mysquareXs = [];
var mysquareYs = [];
var squareXSpeed = [];
var squareYSpeed = [];

var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas (500, 600);

    //obstacles
    var x = 50;
    var y = 50;
    var diameter = 5;
    for(var i = 0; i < 7; i++)
    {
        mycircleXs[i] = x;
        mycircleYs[i] = y;
        myDiameters[i] = diameter;
        x += 50;
        y += 50;
        diameter += 5;
    }

    for(var i = 0; i < 7; i++)
    {
        mysquareXs[i] = x;
        mysquareYs[i] = y;
        myDiameters[i] = diameter;
        x += 50;
        y += 50;
        diameter += 5;
    }
    for (var i = 0; i < 7; i++)
{
    circleXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    circleYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    squareXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    squareYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    mycircleXs[i] = getRandomNumber(500);
    mycircleYs[i] = getRandomNumber(600);
    myDiameters[i] = getRandomNumber(30);

    mysquareXs[i] = getRandomNumber(500);
    mysquareYs[i] = getRandomNumber(600);
    myDiameters[i] = getRandomNumber(30);
}
  createCharacter(200,350);
  
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function draw()
{
background(175,238,238);

//this actually draws the borders
createBorders(10);

//exit message
textSize(16);
fill (0,0,0);
text("EXIT", width-50,height-50);

//creates player
drawCharacter();
characterMovement();

 //mouse clicked draws shape on canvas
    fill (0,255,0);
    circle(mouseShapeX, mouseShapeY, 60); 

//2 obstacles different sizes and colors
    fill(0,139,139);
    for(var i = 0; i < mycircleXs.length; i++)
    {
        circle(mycircleXs[i],mycircleYs[i],myDiameters[i]);
    circleXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    circleYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
 //move the shape
     mycircleXs[i] += circleXSpeed[i];
     mycircleYs[i] += circleYSpeed[i];
//brings obstacles back to the canvas to start over again
        if(mycircleXs[i] > width)
    {
        mycircleXs[i] = 0;
    }
        if(mycircleXs[i] < 0)
    {
        mycircleXs[i] = width;
    }
    if(mycircleYs[i] > height)
    {
        mycircleYs[i] = 0;
    }
    if(mycircleYs[i] < 0)
    {
        mycircleYs[i] = height;
    }
    }
    
    fill(255,255,0);
    for(var i = 0; i < mysquareXs.length; i++)
    {
        square(mysquareXs[i],mysquareYs[i],myDiameters[i]);

    squareXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    squareYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
 //move the shape    
    mysquareXs[i] += squareXSpeed[i];
    mysquareYs[i] += squareYSpeed[i];
//brings obstacles back to the canvas to start over again
    if(mysquareXs[i] > width)
    {
        mysquareXs[i] = 0;
    }
    if(mysquareXs[i] < 0)
    {
        mysquareXs[i] = width;
    }
    if(mysquareYs[i] > height)
    {
        mysquareYs[i] = 0;
    }
    if(mysquareYs[i] < 0)
    {
        mysquareYs[i] = height;
    }
    }

      //check to see if the player has left the exit
    if(playerX > width && playerY > width-50)

    {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Win!", width/2-50, height/2-50);
    }
}

function characterMovement()
{
    if(keyIsDown(w))
    {   
    playerY -= 5; 
    }
    else if(keyIsDown(s))
    {
   playerY += 5;   
    }
    else if(keyIsDown(a))
    {
    playerX -= 5;   
    }
    else if(keyIsDown(d))
    {
    playerX += 5;   
    } 
  }
//player
function createCharacter(x,y)
{
    playerX = x;
    playerY = y;
    console.log(playerX); 
}

function drawCharacter()
{
    fill(23,40,123);
    circle(playerX,playerY,35);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

//this sets the details of the borders
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}



