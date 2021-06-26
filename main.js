canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1Img = "car1.png";
car2Img = "car2.png";

car1_width = 120;
car1_height = 70;

car2_width = 120;
car2_height = 70;

car1_x = 20;
car1_y = 20;

car2_x = 20;
car2_y = 100;

background_img = "racing_track.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = backgroundChange;
    background_imgTag.src = background_img;

    car1ImgTag = new Image();
    car1ImgTag.onload = car1Change;
    car1ImgTag.src = car1Img;

    car2ImgTag = new Image();
    car2ImgTag.onload = car2Change;
    car2ImgTag.src = car2Img;
}

function backgroundChange(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function car1Change(){
    ctx.drawImage(car1ImgTag, car1_x, car1_y, car1_height, car1_width);
}

function car2Change(){
    ctx.drawImage(car2ImgTag, car2_x, car2_y, car2_height, car2_width);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(car1_x >= 700){
        console.log("Car1 won");
        document.getElementById("game_status").innerHTML = "Car1 won";
    }

    if(car2_x >= 700){
        console.log("Car2 won");
        document.getElementById("game_status").innerHTML = "Car2 won";
    }

    if(keyPressed == '38'){
        car1up();
        console.log("car1 up");
    }

    if(keyPressed == '40'){
        car1down();
        console.log("car1 down");
    }

    if(keyPressed == '37'){
        car1left();
        console.log("car1 left");
    }

    if(keyPressed == '39'){
        car1right();
        console.log("car1 right");
    }
    if(keyPressed == '87'){
        car2up();
        console.log("car2 up W");
    }

    if(keyPressed == '65'){
        car2left();
        console.log("car2 left A");
    }

    if(keyPressed == '83'){
        car2down();
        console.log("car2 down S");
    }

    if(keyPressed == '68'){
        car2right();
        console.log("car2 right D");
    }
}

function car1up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("Car1's X =" + car1_x + "Car1's Y = " + car1_y);
        backgroundChange();
        car1Change();
        car2Change();
    }
}

function car1down(){
    if(car1_y <= 500){
        car1_y = car1_y + 10;
        console.log("Car1's X =" + car1_x + "Car1's Y = " + car1_y);
        backgroundChange();
        car1Change();
        car2Change();
    }
}

function car1left(){
    if(car1_x >= 0){
        car1_x = car1_x - 10;
        console.log("Car1's X =" + car1_x + "Car1's Y = " + car1_y);
        backgroundChange();
        car1Change();
        car2Change();
    }
}

function car1right(){
    if(car1_y <= 650){
        car1_x = car1_x + 10;
        console.log("Car1's X =" + car1_x + "Car1's Y = " + car1_y);
        backgroundChange();
        car1Change();
        car2Change();
    }
}

function car2up(){
    if(car2_y >= 0){
        car2_y = car2_y - 10;
        console.log("Car2's X =" + car2_x + "Car2's Y = " + car2_y);
        backgroundChange();
        car1Change();
        car2Change();
    }
}

function car2down(){
    if(car2_y <= 500){
        car2_y = car2_y + 10;
        console.log("Car2's X =" + car2_x + "Car2's Y = " + car2_y);
        backgroundChange();
        car1Change();
        car2Change();
    }
}


function car2left(){
    if(car2_x >= 0){
        car2_x = car2_x - 10;
        console.log("Car2's X =" + car2_x + "Car2's Y = " + car2_y);
        backgroundChange();
        car1Change();
        car2Change();
    }
}

function car2right(){
    if(car2_y <= 650){
        car2_x = car2_x + 10;
        console.log("Car2's X =" + car2_x + "Car2's Y = " + car2_y);
        backgroundChange();
        car1Change();
        car2Change();
    }
}