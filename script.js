// ================= MOBILE MENU =================

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// ================= PROGRAM BUTTON =================

function showProgram(programName) {

    alert(
        "🎓 Vidhya Sagar English Boarding School & College\n\n" +
        "You selected: " + programName +
        "\n\nMore information about this program will be available soon."
    );

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name + "! 🎓\n\n" +
        "Your message has been received by Vidhya Sagar."
    );

    contactForm.reset();

});


// ================= NAVBAR =================

window.addEventListener("scroll", function() {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.12)";

    } else {

        nav.style.boxShadow =
            "0 3px 20px rgba(0,0,0,0.08)";

    }

});


// ================= CONSOLE =================

console.log(
    "Welcome to Vidhya Sagar English Boarding School & College 🎓"
);
