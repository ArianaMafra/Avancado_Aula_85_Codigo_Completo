canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasaMarsImagesArray = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

randomNumber = Math.floor(Math.random() * 4);

roverWidth = 100;
roverHeight = 90;


backgroundImage = nasaMarsImagesArray[randomNumber];
console.log("backgroundImage = "  + backgroundImage);
roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add(){
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;

    roverImageTag = new Image();
    roverImageTag.onload = uploadrover;
    roverImageTag.src= roverImage;

}

function uploadBackground(){
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(roverImageTag, roverX,roverY, roverWidth, roverHeight);
    
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        up();
        console.log("cima");
    }

    if(keyPressed=='40'){
        down();
        console.log("baixo");
    }

    if(keyPressed=='37'){
        left();
        console.log("esquerda");
    }

    if(keyPressed=='39'){
        right();
        console.log("direita");
    }

}

function up(){
    if(roverY >= 0){
        roverY = roverY - 10;
        console.log("Quando a seta para cima é pressionada, x= " + roverX + "| y= " + roverY);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if(roverY <= 500){
        roverY = roverY + 10;
        console.log("Quando a seta para baixo é pressionada, x= " + roverX + "| y= " + roverY);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(roverX >= 0){
        roverX = roverX - 10;
        console.log("Quando a seta para baixo é pressionada, x= " + roverX + "| y= " + roverY);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(roverX <= 700){
        roverX = roverX + 10;
        console.log("Quando a seta para baixo é pressionada, x= " + roverX + "| y= " + roverY);
        uploadBackground();
        uploadrover();
    }
}