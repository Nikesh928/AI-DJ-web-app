Harry_potter_song = "";
Peter_pan_song = "";

function preload() {
    Harry_potter_song = loadSound("music.mp3");
    Peter_pan_song = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(450, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 0, 0, 450, 450);
}