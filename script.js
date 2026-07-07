// Mobile Menu

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
    menu.classList.toggle("show");
};

// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {
    link.onclick = () => {
        menu.classList.remove("show");
    };
});

// Scroll Reveal Animation

const reveals = document.querySelectorAll(".section");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120){
            section.classList.add("active");
            section.classList.add("reveal");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

// Contact Form

document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("🌷 Thank you for your message!");

    this.reset();

});
