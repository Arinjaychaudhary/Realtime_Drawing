noseX=0;
noseY=0;

rightWristX=0;
leftWristX=0;
difference=0;
function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.position(100, 150);
    canvas = createCanvas(610, 490);
    canvas.position(800, 150)


    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose", gotPoses);


}

function draw() {
    background('#D3D3D3');
    document.getElementById("height_and_width").innerHTML="Height and Width of the square = " + difference + "px";
fill("#FFA500");
stroke("#00FF00");
square(noseX,noseY,difference);

}

function modelLoaded() {
    console.log("Model loaded successfully");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
    noseX=result[0].pose.nose.x;
    noseY=result[0].pose.nose.y;
    console.log("Nose X = " + noseX + "  Nose Y = " + noseY);
    rightWristX=result[0].pose.rightWrist.x;
    leftWristX=result[0].pose.leftWrist.x;
    console.log("Left Wrist X = " + leftWristX + "  Right Wrist X = " + rightWristX);
    difference=floor(leftWristX-rightWristX);
    console.log("Difference = " + difference);
    }
}