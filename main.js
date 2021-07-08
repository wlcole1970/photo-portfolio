const year = new Date().getFullYear();

document.getElementById('copy-year').textContent = " " + year;

// portfolio slider

const portfolioSlide = document.querySelector('.portfolio-slide');
const portfolioImages = document.querySelectorAll('.portfolio-slide img');

const prevBtn = document.querySelector('#prevButton');

const nextBtn = document.querySelector('#nextButton');

let counter = 1;
const size = portfolioImages[0].clientWidth;

portfolioSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listen

nextButton.addEventListener('click', () => {
    if (counter >= portfolioImages.length -1) return;
    portfolioSlide.style.transition = 'transform 0.6s ease-in-out';
    counter++; 
    portfolioSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    portfolioSlide.style.transition = 'transform 0.6s ease-in-out';
    counter--; 
    portfolioSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

portfolioSlide.addEventListener('transitionend', () => {
    if (portfolioImages[counter].id === 'lastClone') {
        portfolioSlide.style.transition = 'none';
        counter = portfolioImages.length -2;
        portfolioSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        console.log('none');
    }

    if (portfolioImages[counter].id === 'firstClone') {
        portfolioSlide.style.transition = 'none';
        counter = portfolioImages.length - counter;
        portfolioSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        console.log('none');
    }
});