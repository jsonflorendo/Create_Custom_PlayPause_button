// Adding functionality to video play and pause button
const video=document.getElementsByClassName("custom-video_video");
let i;
for (i = 0; i < video.length; i++) {

    video[i].addEventListener("click", function() {
        const controls = this.nextElementSibling;
        if (controls.innerHTML == "▶") {
            controls.innerHTML = "| |";
            this.play();
        }
        else {
            controls.innerHTML = "▶";
            this.pause();
        }
    });

    video[i].addEventListener("play", function() {
        const controls = this.nextElementSibling;
        if (!this.paused) {
            controls.style.display = "none";
        }
    });

    video[i].addEventListener("pause", function() {
        const controls = this.nextElementSibling;
        if (!this.paused) {
            controls.style.display = "flex";
        }
    });

    video[i].addEventListener("mouseout", function() {
        const controls = this.nextElementSibling;
        if (!this.paused) {
            controls.style.display = "none";
        }
    });

    video[i].addEventListener("mouseover", function() {
        const controls = this.nextElementSibling;
        controls.style.display = "flex";
    });

}