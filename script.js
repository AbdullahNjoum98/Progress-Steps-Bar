const progressLine = document.getElementsByClassName('progress-line')[0];
const prev =  document.getElementById('prev');
const next =  document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive ++;
    if (currentActive > circles.length)
        currentActive = circles.length;
    update();
});

prev.addEventListener('click', () => {
    currentActive --;
    if (currentActive < 1)
        currentActive = 1;
    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive)
            circle.classList.add('active');
        else 
            circle.classList.remove('active');
    });

    const activeCircles = document.querySelectorAll('.active');
    const progressWidth = ((activeCircles.length - 1) / (circles.length - 1)) * 100;
    progressLine.style.width = progressWidth + '%';

    if (currentActive === circles.length)
        next.disabled = true;
    else if (currentActive === 1)
        prev.disabled = true;
    else {
        next.disabled = false; prev.disabled = false;
    }
}