
diffrence=0;
rightwristX=0;
leftwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97');
    document.getElementById("font_size").innerHTML="font size of the text will be: "+diffrence+"px";
    fill('#f90093');
    textSize(diffrence);
    text("Anyou",50,400);
}
function modelLoaded(){
    console.log('poseNet is Initialized!');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        diffrence=floor(leftwristX-rightwristX);
        
    }
}
