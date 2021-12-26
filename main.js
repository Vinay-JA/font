function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(500,150);
    poseNet=ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log("PoseNet is Initialized.")
}
function gotPoses(results);
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        differewnce = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('#000000')
     textSize(difference);
     fill('#FFFFFF')
     text('Vinay', 50, 400);
}