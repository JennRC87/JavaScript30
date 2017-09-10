//get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('player__slider');

//build our functions

function togglePlay(){ //function to play the video
  /*const method = video.paused ? 'play' : 'pause';
  video[method](); */  //This is works the same. It's a ternary operator.
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚'; //you can put in whatever symbol you choose
  toggle.textContent = icon;
  console.log('update the button');
  console.log(icon);
}

function skip(){
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
} //now the skip and back button work



//hook up the event listeners
video.addEventListener('click', togglePlay); //this is so the video plays and pauses when you click the video screen
video.addEventListener('play', updateButton); //this is for changing the play/pause icon
video.addEventListener('pause', updateButton); //this is for changing the play/pause icon
toggle.addEventListener('click', togglePlay); //this is so the video plays and pauses when you click the play button
skipButtons.forEach(button => button.addEventListener('click',skip)) //this is to be able to skip ahead 25 seconds
