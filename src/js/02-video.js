import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let videoCurrentTime = 0;
const savedCurrentTime = Number(localStorage.getItem("videoplayer-current-time"));

player.on('timeupdate',throttle(onTimeUpdate, 1000));

player.setCurrentTime(savedCurrentTime).catch(function(error){
    switch (error.name) {
        case 'RangeError':
           console.log('the time was less than 0 or greater than the video’s duration');
            break;

        default:
            console.log('some other error occurred');
            break;
    }
});


function onTimeUpdate(data){
    videoCurrentTime = data.seconds;
    updateLocalStorageVideoCurrentTime(videoCurrentTime);
}

function updateLocalStorageVideoCurrentTime(videoCurrentTime){
localStorage.setItem("videoplayer-current-time", JSON.stringify(videoCurrentTime));
}