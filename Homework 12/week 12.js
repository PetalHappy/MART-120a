// x and y for my character
var playerX =100;
var playerY=100;
//define the key codes for each letter
var w=87;
var s=83;
var a=65;
var d=68;

var circleX = 50;
var circleY = 75;
var circleXSpeed;
var circleYSpeed;

var squareX = 50;
var squareY = 60;
var squareXSpeed;
var squareYSpeed;

function setup()
{
    createCanvas (500, 600);

    //obtacles movement

    circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    squareXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    squareYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    createCharacter(200,350);
}

function draw()
{
background(175,238,238);

//this actually draws the borders
createBorders(10);

//exit message
createExit(); 

//creates player
drawCharacter();

drawCharacter1();

characterMovement();

characterMovementcircle();

characterMovementsquare();

characterMovement1();

mouseClicked();
}

function createExit()
{
textSize(16);
fill (0,0,0);
text("EXIT", width-50,height-50);
}

function mouseClicked()
{  
    fill(154,154,154)
    circle(mouseX, mouseY, 25);
} 

function characterMovementsquare()
{
    squareXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    squareYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    squareX += squareXSpeed;
    squareY += squareYSpeed;

    if(squareX > width)
    {
        squareX = 0;
    }
    if(squareX < 0)
    {
        squareX = width;
    }
    if(squareY > height)
    {
        squareY = 0;
    }
    if(squareY < 0)
    {
        squareY = height;
    }
}

function characterMovementcircle()
{ 
    circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);  

    circleX += circleXSpeed;
    circleY += circleYSpeed;  

    if(circleX > width)
    {
        circleX = 0;
    }
        if(circleX < 0)
    {
        circleX = width;
    }
    if(circleY > height)
    {
        circleY = 0;
    }
    if(circleY < 0)
    {
        circleY = height;
    }
}


function characterMovement1()
{
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

//obstacles 
function drawCharacter1()
{
    fill(0,139,139);
    circle(circleX, circleY, 55);

    fill(255,255,0);
    square(squareX, squareY, 35);
}

//player
function createCharacter(x,y)
{
    playerX = x;
    playerY = y;
    console.log(playerX); 
}

//player
function drawCharacter()
{
    fill(23,40,123);
    circle(playerX,playerY,35);
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


