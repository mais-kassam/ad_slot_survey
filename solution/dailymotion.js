var positionPercentage = (player.currentTime/player.duration)*100
var x = 0;
var y;

var i;
for(i=0; i<document.querySelectorAll('iframe').length; i++){
    console.log(document.querySelectorAll('iframe')[i].src)
}

player.addEventListener('play', function() {
    const Http = new XMLHttpRequest();
    const url='https://api.dailymotion.com/video/'+player.video.videoId;
    Http.open("GET", url);
    Http.send();
    Http.onload = () => {
        console.log(Http.responseText);
        var video = JSON.parse(Http.responseText);

        window.permutive.track('VideoPlay', {
            "video": {
                "duration": player.currentTime, // in seconds
                "name": video.title,
                "custom_fields": [
                    {
                        "key": "VIDEO_KEY",
                        "value": "VIDEO_VALUE"
                    },
                    {
                        "key": "VIDEO_KEY",
                        "value": "VIDEO_VALUE"
                    }
                ],
                "video_id": video.id,
                "description": "VIDEO_DESCRIPTION",
                "tags": [video.channel],
                "watch_count": 1, 
                "created_at": new Date(), 
                "published_at": new Date()
            },
            "play_id": "c5144917-6777-4fd6-9155-fb9a931374be", 
            "auto_start": false
        })
    }

    player.ontimeupdate = function() {progressTrack()}
    
    var track = [0.25, 0.5, 0.75, 1];
    var pointer = 0;

    function progressTrack(){
        var positionPercentage = player.currentTime/player.duration;
        if(positionPercentage >= track[pointer]){
            pointer++       
            console.log("Permutive")
            window.permutive.track("VideoProgress", {
                "progress": player.currentTime,
            });
        }
    }
})

function handlePlayerEvents(e) {
    if (player) {
        let data = {};
        switch (e.type) {
            case 'timeupdate':
            case 'ad_timeupdate':
            case 'seeking':
            case 'seeked':
                data['time'] = player.currentTime;
                progressEl.value = timeFormated(player.currentTime);
                break;
            case 'progress':
                data['buffer'] = player.bufferedTime;
                break;
            case 'durationchange':
                data['duration'] = player.duration;
                durationEl.value = timeFormated(player.duration);
                break;
            case 'controlschange':
                data['controls'] = player.controls;
                break;
            case 'fullscreenchange':
                data['fullscreen'] = player.fullscreen;
                break;
            case 'volumechange':
                data['volume'] = player.volume;
                data['muted'] = player.muted;
                break;
            case 'qualitiesavailable':
                data['qualities'] = player.qualities;
                break;
            case 'qualitychange':
                data['quality'] = player.quality;
                break;
            case 'subtitlesavailable':
                data['subtitles'] = player.subtitles;
                break;
            case 'subtitlechange':
                data['subtitle'] = player.subtitle;
                break;
            case 'ended':
                data['deprecated'] = "Use 'video_end' instead";
                break;
            case 'error':
                data = player.error;
                break;
            case 'videochange':
                data = player.video;
                break;
            case 'ad_companions':
                data = player.companionAds;
                break;
        }
    }
}
