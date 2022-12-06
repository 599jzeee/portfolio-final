// Add js here.
// page load
const video =  document.getElementById("videoplayer");
window.addEventListener('load', load);
function load () {
    video.load();
    video.autoplay = false;
    video.loop = false;
    volume.textContent = `${video.volume * 100}%`;
}

// play button
const play = document.getElementById("play");
play.addEventListener('click', playVideo);
function playVideo () {
    video.play();
} 

// pause button
const pause = document.getElementById("pause");
pause.addEventListener('click', pauseVideo);
function pauseVideo () {
    video.pause();
} 

// slow down
const slower = document.getElementById("slower");
slower.addEventListener('click', slowDown);
function slowDown () {
    if (video.playbackRate == 0.5){
        window.alert("Video is at slowest speed!");
       }
       else if (video.playbackRate == 1){
        video.playbackRate = 0.5;
       }
       else if (video.playbackRate == 2){
        video.playbackRate = 1;
       }
} 

// speed up
const faster = document.getElementById("faster");
faster.addEventListener('click', speedUp);
function speedUp () {
    if (video.playbackRate == 2){
        window.alert("Video is at fastest speed!");
        }
    else if (video.playbackRate == 1){
        video.playbackRate = 2;
        }
       else if (video.playbackRate == 0.5){
        video.playbackRate = 1;
        }  
} 

// skip ahead
const skip = document.getElementById("skip");
skip.addEventListener('click', skipAhead);
function skipAhead () {
    if (video.currentTime + 15 > video.duration){
        video.currentTime = 0;
    }
    else {
        video.currentTime += 15;
    }
} 

// mute
const mute = document.getElementById("mute");
mute.addEventListener('click', muteVideo);
function muteVideo () {
    if (video.muted == false) {
        video.muted = true;
        mute.textContent = "Unmute";
    }
    else {
        video.muted = false;
        mute.textContent = "Mute";
    }
}

// volume slider
const slider = document.getElementById("slider");
const volume = document.getElementById("volume");
slider.addEventListener('change', sliderVideo);
function sliderVideo () {
    video.volume = slider.value / 100;
    volume.textContent = `${slider.valueAsNumber}%`;
} 