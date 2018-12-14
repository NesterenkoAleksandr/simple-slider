const mySlide = document.querySelector("#mySlide");
const two = document.querySelector("#two");

mySlide.addEventListener("mousemove", (e) => {
    e = e || window.event;

    two.style.borderRight = "2px solid black";
    two.style.transition = "0s";
    two.style.cursor = "col-resize";
    two.style.width = e.offsetX + "px";
});

mySlide.addEventListener("mouseleave", (e) => {
    e = e || window.event;
    two.style.transition = "0.5s";
    two.style.width = 0;
});


// Simple carousel

let slideIndex = 1;

document.querySelector(".prev").addEventListener("click", (e) => {
    e.preventDefault();
    plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", (e) => {
    e.preventDefault();
    plusSlides(1);
});


showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";
}