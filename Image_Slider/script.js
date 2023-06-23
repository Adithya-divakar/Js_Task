let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

// Show the first slide initially
showSlide(slideIndex);
