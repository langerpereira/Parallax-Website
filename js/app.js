const parallaxElements = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;
let requestId;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    if (!requestId) {
        requestId = requestAnimationFrame(updateParallax);
    }
});

function updateParallax() {
    parallaxElements.forEach((el) => {
        let speedx = parseFloat(el.dataset.speedx);
        let speedy = parseFloat(el.dataset.speedy);
        el.style.transform = `translate(${(-xValue * speedx)}px, ${(-yValue * speedy)}px)`;
    });
    requestId = null;  
}
