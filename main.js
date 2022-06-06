noseX = 0;
noseY = 0;
leftWrist = 0;
rightWrist= 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400,500);
    video.position(100,500)

    canvas = createCanvas(700,700);
    canvas.position(560,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}
function gotPoses(results){
   
    if(results.length > 0)

    {
    
    console.log(results);
   noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +"noseY =" +noseY);
    leftWrist = results[0].pose.leftWrist.x;
    rightWrist = results[0].pose.rightWrist.x;
    console.log(leftWrist, rightWrist);
    difference = floor(leftWrist-rightWrist);
    }
}

function draw(){
    background('#808080');
    document.getElementById("square_side").innerHTML = "Width and Height of the Square will be " + difference +"px";
    fill('#000000');
    stroke('#000000');
    textSize(difference);
    text("Vinay",noseX,noseY);
    
   
}