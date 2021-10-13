moustacheX = 0;
moustacheY = 0;

function preload() {
    moustache_moustache = loadImage("https://i.postimg.cc/x1tzQyPY/unnamed.png");
}

function setup() {
    canvas = createCanvas(400,300)
    canvas.position(475,200)
    video = createCapture(VIDEO)
    video.size(400,300)
    video.hide()
    pone = ml5.poseNet(video,modelLoaded)
    pone.on('pose',gotPoses)
}
function modelLoaded() {
    console.log("Model has been Loaded")
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results)
        moustacheX = results[0].pose.nose.x - 15
        moustacheY = results[0].pose.nose.y + 5
    }
}

function draw() {
    image(video,0,0,400,300)
    image(moustache_moustache,moustacheX,moustacheY,30,30)
}
function take_snapshot() {
    save("moustache_img.png")
}