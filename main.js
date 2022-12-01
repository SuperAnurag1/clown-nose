nosex=0
nosey=0
    function preload(){
        clown_nose=loadImage('https://i.postimg.cc/Qd5hM2pJ/istockphoto-1192834521-612x612-removebg-preview.png');

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
   
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;
        
        
    }
}
function draw(){
    image(video,0,0,300,300);
image(clown_nose,nosex,nosey,50,50);

}
function takeSnapshot(){
    save('my_filter_image.png');
}




