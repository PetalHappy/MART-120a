// x and y for my character
var characterX =100;
var characterY=100;
//define the key codes for each letter
var w=87;
var s=83;
var a=65;
var d=68;

//x and y for a shape
var circleX = 50;
var circleY = 75;
var circleXSpeed;
var circleYSpeed;

var squareX = 50;
var squareY = 60;
var squareXSpeed;
var squareYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas (500, 600);
    // get a random speed when it first starts
    circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    squareXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    squareYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    createCharacter(200,350);
}

function draw()
{
    background(175,238,238);
    stroke (0);
    fill(0);

    //call createBorders function
    createBorders(10);

    //exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //createCharacter(200,350)
    drawCharacter();
    
    characterMovement();

    //potential enemy
    fill(0,139,139);
    circle(circleX, circleY, 35);

    fill(255,255,0)
    square(squareX, squareY, 50);

    //get a random speed when it first starts
    circleXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    circleYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    squareXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    squareYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);

    //move the shape
    circleX += circleXSpeed;
    circleY += circleYSpeed;

    squareX += squareXSpeed;
    squareY += squareYSpeed;

    //check to see if the shape has gone out of bounds
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

    //check to see if the character has left the exit
    if(characterX > width && characterY > width-50)

    {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Win!", width/2-50, height/2-50)
    }

    

    //create the shape based on the mouse click
    fill (0,255,0);
    circle(mouseShapeX, mouseShapeY, 40);
}

function characterMovement()

{
    if(keyIsDown(w))
    {
       
       characterY -= 5; 
       }
    
    else if(keyIsDown(s))
    {
        characterY += 5;   
    }
    else if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    else if(keyIsDown(d))
    {
        characterX += 5;   
    } 
     
  }


function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    //character
    
   // circle(characterX,characterY, 35);
}

function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,35);

}

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

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}


    



