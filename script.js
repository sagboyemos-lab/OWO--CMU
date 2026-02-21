//READ MORE
document.querySelector('.readmore').addEventListener('click',(e) =>{
    document.querySelector('.more-text').style.display = 'inline';
    e.target.style.display = 'none';
});

// HERO SLIDER
let slides = document.querySelectorAll(".slide"); 
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 5000);

// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.addEventListener("click", function (){
    box.classList.toggle("show");
})