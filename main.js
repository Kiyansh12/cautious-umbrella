song = "";

function preload()
{
	song = loadSound("Oops(PagalWorld).mp3");
}

function setup() {
	canvas =  createCanvas(600, 400);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw() {
	image(video, 0, 0, 600, 500);
}

   
function play()
{
	song.play();
}
