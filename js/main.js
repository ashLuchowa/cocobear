//BACK TO TOP SCROLL
const showOnPx = 100;
const topBtn = document.querySelector('.back-top');

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
    if (scrollContainer().scrollTop > showOnPx) {
        topBtn.style.opacity = '1';
    } else {
        topBtn.style.opacity = '0';
    }
});

//smooth scroll
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: 'smooth',
    });
};

topBtn.addEventListener('click', goToTop);