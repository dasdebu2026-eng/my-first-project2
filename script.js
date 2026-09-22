// Navbar scroll effect

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

new Typed("#typing",{

strings:[

"Full Stack Developer",

"Frontend Developer",

"UI/UX Designer",

"Freelancer",

"Creative Coder"

],

typeSpeed:70,

backSpeed:45,

backDelay:1500,

loop:true

});

/* ================= TYPING ANIMATION ================= */

const typingElement = document.getElementById("aboutTyping");

const words = [
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();


/* ================= COUNTER ANIMATION ================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target =
                    parseInt(counter.dataset.target);

                let count = 0;

                const speed = target / 60;

                const updateCounter = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText =
                            Math.ceil(count);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target;

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    },

    {
        threshold: 0.5
    }

);

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ================= SKILLS TYPING EFFECT ================= */

const skillsTyping = document.getElementById("skillsTyping");

const skillWords = [
    "Master",
    "Use",
    "Work With",
    "Love"
];

let skillWordIndex = 0;
let skillCharIndex = 0;
let skillDeleting = false;

function skillTypingEffect() {

    const currentWord =
        skillWords[skillWordIndex];

    if (!skillDeleting) {

        skillsTyping.textContent =
            currentWord.substring(
                0,
                skillCharIndex + 1
            );

        skillCharIndex++;

        if (
            skillCharIndex ===
            currentWord.length
        ) {

            skillDeleting = true;

            setTimeout(
                skillTypingEffect,
                1200
            );

            return;
        }

    } else {

        skillsTyping.textContent =
            currentWord.substring(
                0,
                skillCharIndex - 1
            );

        skillCharIndex--;

        if (skillCharIndex === 0) {

            skillDeleting = false;

            skillWordIndex++;

            if (
                skillWordIndex ===
                skillWords.length
            ) {

                skillWordIndex = 0;

            }

        }

    }

    setTimeout(
        skillTypingEffect,
        skillDeleting ? 45 : 90
    );
}

skillTypingEffect();


/* ================= SKILL BAR ANIMATION ================= */

const skillsSection =
    document.querySelector(".skills-section");

const progressBars =
    document.querySelectorAll(".progress-bar");

let skillsAnimated = false;

const skillsObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (
                    entry.isIntersecting &&
                    !skillsAnimated
                ) {

                    skillsAnimated = true;

                    progressBars.forEach(function(bar) {

                        const width =
                            bar.getAttribute("data-width");

                        setTimeout(function() {

                            bar.style.width = width;

                        }, 200);

                    });

                }

            });

        },

        {
            threshold: 0.3
        }

    );

skillsObserver.observe(skillsSection);

/* ================= PROJECT TYPING ================= */

const projectTyping =
    document.getElementById("projectTyping");

const projectWords = [

    "modern websites.",
    "interactive apps.",
    "creative interfaces.",
    "real-world projects."

];

let projectWordIndex = 0;

let projectCharIndex = 0;

let projectDeleting = false;


function projectTypeEffect() {

    const currentWord =
        projectWords[projectWordIndex];


    if (!projectDeleting) {

        projectTyping.textContent =
            currentWord.substring(
                0,
                projectCharIndex + 1
            );

        projectCharIndex++;


        if (
            projectCharIndex ===
            currentWord.length
        ) {

            projectDeleting = true;

            setTimeout(
                projectTypeEffect,
                1300
            );

            return;

        }

    } else {

        projectTyping.textContent =
            currentWord.substring(
                0,
                projectCharIndex - 1
            );

        projectCharIndex--;


        if (projectCharIndex === 0) {

            projectDeleting = false;

            projectWordIndex++;


            if (
                projectWordIndex ===
                projectWords.length
            ) {

                projectWordIndex = 0;

            }

        }

    }


    setTimeout(

        projectTypeEffect,

        projectDeleting ? 45 : 85

    );

}

projectTypeEffect();



/* ================= PROJECT FILTER ================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectItems =
    document.querySelectorAll(".project-item");


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            /* Remove active */

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            this.classList.add("active");


            const filter =
                this.getAttribute("data-filter");


            projectItems.forEach(item => {

                const category =
                    item.getAttribute("data-category");


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.style.display = "";

                    setTimeout(() => {

                        item.classList.remove("hide");

                        item.classList.add("show");

                    }, 50);

                } else {

                    item.classList.remove("show");

                    item.classList.add("hide");

                    setTimeout(() => {

                        item.style.display = "none";

                    }, 400);

                }

            });

        }
    );

});

/* ================= CONTACT TYPING EFFECT ================= */

const contactTyping =
    document.getElementById("contactTyping");

const contactWords = [
    "conversation.",
    "new project.",
    "great idea.",
    "collaboration."
];

let contactWordIndex = 0;
let contactCharIndex = 0;
let contactDeleting = false;


function contactTypeEffect() {

    const currentWord =
        contactWords[contactWordIndex];


    if (!contactDeleting) {

        contactTyping.textContent =
            currentWord.substring(
                0,
                contactCharIndex + 1
            );

        contactCharIndex++;


        if (
            contactCharIndex ===
            currentWord.length
        ) {

            contactDeleting = true;

            setTimeout(
                contactTypeEffect,
                1400
            );

            return;

        }

    } else {

        contactTyping.textContent =
            currentWord.substring(
                0,
                contactCharIndex - 1
            );

        contactCharIndex--;


        if (contactCharIndex === 0) {

            contactDeleting = false;

            contactWordIndex++;


            if (
                contactWordIndex ===
                contactWords.length
            ) {

                contactWordIndex = 0;

            }

        }

    }


    setTimeout(

        contactTypeEffect,

        contactDeleting ? 45 : 90

    );

}

contactTypeEffect();



/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        formMessage.innerHTML =
            `Thanks ${name}! Your message has been received.`;

        contactForm.reset();


        setTimeout(function() {

            formMessage.innerHTML = "";

        }, 5000);

    }
);