// $(document).on('click', '#videoPlayer', function (e) {
//     var video = $(this).get(0);
//     if (video.paused === false) {
//         video.pause();
//     } else {
//         video.play();
//     }
//
//     return false;
// });
$(document).on('click', '#videoPlayer', function (e) {
    var video = $(this).get(0);
    if (video.paused === false) {
        video.pause();
        document.getElementById('btnTrailer').innerHTML = 'Watch Trailer';
        return true;
    } else {
        video.play();
        document.getElementById('btnTrailer').innerHTML = 'Reset';
        return false;
    }
});
function playVideo(){
    var video = $('#videoPlayer').get(0);
    if (video.paused === false) {
        video.pause();
        video.load();
        return true;
    } else {
        video.play();
        return false;
    }
}
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}