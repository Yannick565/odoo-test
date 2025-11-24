const navList = document.querySelector('.mobileList');
const hamburger = document.querySelector('.hamburger');

navList.style.height = '0';
navList.style.overflow = 'hidden';
navList.style.visibility = 'hidden';
navList.style.opacity = '0';
navList.style.transition = 'height 0.5s ease, opacity 0.5s ease';

function toggleNav() {
    if (navList.style.height === '0px' || navList.style.height === '0') {
        navList.style.visibility = 'visible';
        navList.style.height = '370px';
        navList.style.opacity = '1';
    } else {
        navList.style.height = '0';
        navList.style.opacity = '0';
        setTimeout(() => {
            navList.style.visibility = 'hidden';
        }, 500);
    }
}

hamburger.addEventListener('click', toggleNav);

window.addEventListener('scroll', () => {
    if (navList.style.visibility === 'visible') {
        navList.style.height = '0';
        navList.style.opacity = '0';
        setTimeout(() => {
            navList.style.visibility = 'hidden';
        }, 500);
    }
});
