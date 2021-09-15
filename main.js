//Create a reference for canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width = 100;
greencar_height = 150;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
gx = 5;
gy = 340;

var speed;
var movement = 5;
function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
    
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(greencar_imgTag, gx, gy, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    if (document.getElementById("speed").value != "")
	{
		speed = document.getElementById("speed").value;
		movement = speed*7;
	}

	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			Up();
			console.log("up");
		
		} else if(keyPressed == '40')
		{
			Down();
			console.log("down");
		
		} else if(keyPressed == '37')
		{
			Left();
			console.log("left");
		
		} else if(keyPressed == '39')
		{
			Right();
			console.log("right");
		}
		
		
}

function Left()
{
    if (gx >= 0)
    {
        gx = gx-movement;
        uploadBackground();
        uploadgreencar();
    }
}

function Right()
{
    if (gx <= 700)
    {
        gx = gx+movement;
        uploadBackground();
        uploadgreencar();
    }
}

function Up()
{
    if (gy >= 0)
    {
        gy = gy-movement;
        uploadBackground();
        uploadgreencar();
    }
}

function Down()
{
    if (gy <= 450)
    {
        gy = gy+movement;
        uploadBackground();
        uploadgreencar();
    }
}

function original()
{
	gx = 5;
	gy = 350;
	ctx.clearRect(0, 0,canvas.width, canvas.height);
	
    background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}
