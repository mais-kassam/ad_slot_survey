var adTag = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&correlator=__timestamp__&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear";

$( document ).ready(function() {

    var duration = jwplayer("myElement").getDuration();
    var firstQuartile = Math.floor(duration/4);
    var adFirstQuartile;
    var quartilesElapsed = [];
    var adQuartilesElapsed = [];

    jwplayer("myElement").on('play', function(){
        window.permutive.track('VideoPlay', {
            "video": {
                "duration": 20, // in seconds
                "name": "TITLE",
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
                "video_id": "VIDEO_ID",
                "description": "VIDEO_DESCRIPTION",
                "tags": [],
                "watch_count": 1, //will increase as the same user watched the video multiple times
                "created_at": new Date(), //Datetime in ISO format
                "published_at": new Date()
            },
            "play_id": "c5144917-6777-4fd6-9155-fb9a931374be", //this will stay constant for all of the events emitted during the same video play
            "auto_start": false
        })
    } )
    
    jwplayer("myElement").on('ready', function(){
        window.permutive.track('VideoLoad', {
            "video": {
                "duration": 20, // in seconds
                "name": "TITLE",
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
                "video_id": "VIDEO_ID",
                "description": "VIDEO_DESCRIPTION",
                "tags": [],
                "created_at": new Date(), //Datetime in ISO format
                "published_at": new Date()
            },
            "play_id": "c5144917-6777-4fd6-9155-fb9a931374be", //this will stay constant for all of the events emitted during the same video play
            "auto_start": false
        })
    } )

    jwplayer("myElement").on("time", function(timeObject){
        // console.log(timeObject)
        var positionPercentage = (timeObject.position/timeObject.duration)*100
        console.log(Math.round(positionPercentage))
        if (Math.round(positionPercentage) === 25 || Math.round(positionPercentage) === 50 || Math.round(positionPercentage) === 75 || Math.round(positionPercentage) === 100){
            console.log(Math.round(positionPercentage))
            window.permutive.track("VideoProgress", {
                "progress": timeObject.position,
            });
        }
    });  
})

