const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

/*
function gotoTarkovhome() {
    window.open('/Tarkovhomepage/Tarkovhomepagev2.html', '_blank');
    //window.location()
}
*/

function gotoTarkovhome() {
    window.open('Tarkovhomepagev2.html', '_blank');
    //window.location()
}

function gotoKF2home() {
    window.open('KF2homepage.html', '_blank');
    //window.location()
}

