let video =  document.getElementById("video");
let text = document.getElementById("text");
let image = document.getElementById("image");
function pausePlay()
{
    if(video.paused)
    {
    
    video.play();
    text.innerHTML="Pause";
    image.src="images/pause.png";
    }
    else
    {
    video.pause();
    text.innerHTML="Play";
    image.src="images/play.png";
   
    }
    document.getElementById("pausePlayIcon").in
}