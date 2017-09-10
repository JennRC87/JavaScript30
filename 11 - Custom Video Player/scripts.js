//get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

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

function handleRangeUpdate(){
  video[this.name] = this.value
  console.log(this.value);
  console.log(this.name);
} //this is for the slider controls volume and speed

function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}


//hook up the event listeners
video.addEventListener('click', togglePlay); //this is so the video plays and pauses when you click the video screen
video.addEventListener('play', updateButton); //this is for changing the play/pause icon
video.addEventListener('pause', updateButton); //this is for changing the play/pause icon
video.addEventListener('timeupdate', handleProgress); //this is for prgress bar to update
toggle.addEventListener('click', togglePlay); //this is so the video plays and pauses when you click the play button
skipButtons.forEach(button => button.addEventListener('click',skip)); //this is to be able to skip ahead 25 seconds
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate)); //this is so the sliders can work volume and speed
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)); //this is so the sliders can work volume and speed


