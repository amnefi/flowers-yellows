onload = () => {
    document.body.classList.remove("container");
  };

  $(document).ready(function () {
    $('#play_pause').click(function () {
        console.log("Se hizo clic en el botón de reproducción/pausa");
        var audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
