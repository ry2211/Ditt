onload = () =>{
        document.body.classList.remove("container");
};


document.addEventListener("DOMContentLoaded", function () {
        const audio = new Audio("musik.mp3");
        audio.loop = true;
        audio.play();
      

        document.addEventListener("visibilitychange", function () {
          if (document.visibilityState === "hidden") {
            audio.pause();
          } else {
            audio.play();
          }
        });
      });
