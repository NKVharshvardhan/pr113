function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function take_snapshot(){
    save("kedar.png");
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    fill(335,0,0);
    circle(25,25,50);
    fill(0,1255,0);
    rect(10,50,25,375);
    fill(335,0,0);
    circle(25,450,50);
    fill(0,255,0);
    rect(50,440,525,25);
    fill(335,0,0);
    circle(600,450,50);
    fill(0,255,0);
    rect(50,0,525,25);
    fill(335,0,0);
    circle(600,10,50);
    fill(0,335,0);
    rect(590,35,25,390);
    

}

