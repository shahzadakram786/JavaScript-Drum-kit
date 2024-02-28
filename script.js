window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`)
    console.log(audio)
    // console.log(e)

    if(!audio)return ;
audio.currentTime = 0;
    audio.play()


})