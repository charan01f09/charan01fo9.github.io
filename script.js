const glow = document.querySelector(".glow");

document.addEventListener("mousemove", function(event) {

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

});
const typing = document.querySelector("#typing");

const words = [
    "CSE (AIML) Student",
    "Aspiring AI Engineer",
    "Developer",
    "Builder",
    "Explorer"
];

let wordIndex = 0;
let letterIndex = 0;

function typeWord() {

    if (letterIndex < words[wordIndex].length) {

        typing.textContent += words[wordIndex][letterIndex];

        letterIndex++;

        setTimeout(typeWord, 100);

    } else {

        setTimeout(deleteWord, 1500);

    }
}


function deleteWord() {

    if (letterIndex > 0) {

        typing.textContent =
            words[wordIndex].substring(0, letterIndex - 1);

        letterIndex--;

        setTimeout(deleteWord, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeWord, 500);
    }
}

typeWord();
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("mousemove", function(event) {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform =
            `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "perspective(600px) rotateX(0) rotateY(0) scale(1)";

    });

});
const timelineItems =
    document.querySelectorAll(".timeline-item");


const timelineObserver =
    new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });


timelineItems.forEach(function(item) {

    timelineObserver.observe(item);

});
/* SCROLL PROGRESS */

const progressBar =
    document.querySelector(".scroll-progress");

window.addEventListener("scroll", function() {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});
/* SECTION REVEAL */

const sections =
    document.querySelectorAll(".section");

const sectionObserver =
    new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });


sections.forEach(function(section) {

    sectionObserver.observe(section);

});
/* ACTIVE NAVIGATION */

const navLinks = document.querySelectorAll(".nav-links a");

const navSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {

    let currentSection = "";

    navSections.forEach(function(section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
/* LOADING SCREEN */

/* VISITOR MEMORY */

window.addEventListener("load", function() {

    const loader = document.querySelector("#loader");

    const hasVisited =
        localStorage.getItem("hasVisited");

    if (hasVisited) {

        // Returning visitor
        loader.classList.add("hidden");

    } else {

        // First-time visitor
        setTimeout(function() {

            loader.classList.add("hidden");

            localStorage.setItem(
                "hasVisited",
                "true"
            );

        }, 1200);

    }

});
/* MOBILE MENU */

const menuButton =
    document.querySelector("#menuButton");

const navLinksContainer =
    document.querySelector(".nav-links");

menuButton.addEventListener("click", function() {

    navLinksContainer.classList.toggle("open");

});
const mobileLinks =
    document.querySelectorAll(".nav-links a");

mobileLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinksContainer.classList.remove("open");

    });

});
/* BACK TO TOP */

const backToTop =
    document.querySelector("#backToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/* CUSTOM CURSOR */

const cursor =
    document.querySelector(".cursor");

document.addEventListener("mousemove", function(event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});

const interactiveElements =
    document.querySelectorAll("a, button, .card, .project-card, .skill-card, .social-card, .current-item");

interactiveElements.forEach(function(element) {

    element.addEventListener("mouseenter", function() {
        cursor.classList.add("hover");
    });

    element.addEventListener("mouseleave", function() {
        cursor.classList.remove("hover");
    });

});
/* FAVOURITES */

const favouriteCards =
    document.querySelectorAll(".favourite-card");

favouriteCards.forEach(function(card) {

    card.addEventListener("click", function() {

        card.classList.toggle("open");

    });

});
/* RIGHT NOW */

const activities = [
    {
        title: "💻 Coding something new",
        description: "Learning programming and building small projects."
    },
    {
        title: "📚 Learning AI / ML",
        description: "Exploring artificial intelligence and machine learning."
    },
    {
        title: "🌐 Building my website",
        description: "Adding new features and improving my personal website."
    },
    {
        title: "🎵 Listening to music",
        description: "Taking a break and enjoying some music."
    },
    {
        title: "💡 Exploring ideas",
        description: "Thinking about things I could build and experiment with."
    }
];

let activityIndex = 0;

const currentActivity =
    document.querySelector("#currentActivity");

const currentDescription =
    document.querySelector("#currentDescription");

function changeActivity() {

    currentActivity.style.opacity = "0";
    currentDescription.style.opacity = "0";

    setTimeout(function() {

        currentActivity.textContent =
            activities[activityIndex].title;

        currentDescription.textContent =
            activities[activityIndex].description;

        currentActivity.style.opacity = "1";
        currentDescription.style.opacity = "1";

        activityIndex++;

        if (activityIndex >= activities.length) {
            activityIndex = 0;
        }

    }, 400);
}

changeActivity();

setInterval(changeActivity, 4000);
/* THEME SWITCHER */

const themeButton =
    document.querySelector("#themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        themeButton.textContent = "☾";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "☀";

        localStorage.setItem("theme", "dark");

    }

});
const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");
    themeButton.textContent = "☾";

}
/* CARD SCROLL ANIMATION */

const animatedCards = document.querySelectorAll(
    ".project-card, .skill-card, .social-card, .favourite-card, .current-item"
);

const cardObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-card");

            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedCards.forEach(function(card) {

    cardObserver.observe(card);

});
/* PROJECT MODAL */

const projectCards =
    document.querySelectorAll(".project-card");

const projectModal =
    document.querySelector("#projectModal");

const modalClose =
    document.querySelector("#modalClose");

const modalTitle =
    document.querySelector("#modalTitle");

const modalDescription =
    document.querySelector("#modalDescription");

const modalTags =
    document.querySelector("#modalTags");


const projectData = {

    twosum: {
        title: "Two Sum",
        description:
            "A beginner programming project that helped me understand arrays, loops and problem solving.",
        tags: ["C", "Python", "LeetCode"]
    },

    website: {
        title: "My Personal Website",
        description:
            "A personal website built from scratch while learning HTML, CSS and JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"]
    },

    aiml: {
        title: "AI / ML Project",
        description:
            "A future project where I experiment with artificial intelligence and machine learning.",
        tags: ["Python", "AI", "ML"]
    },

    future: {
        title: "Future Idea",
        description:
            "A project idea that I will build as I continue learning and developing my skills.",
        tags: ["Building", "Learning"]
    }

};


projectCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const projectName =
            card.getAttribute("data-project");

        const project =
            projectData[projectName];

        modalTitle.textContent =
            project.title;

        modalDescription.textContent =
            project.description;

        modalTags.innerHTML = "";

        project.tags.forEach(function(tag) {

            const tagElement =
                document.createElement("span");

            tagElement.textContent = tag;

            modalTags.appendChild(tagElement);

        });

        projectModal.classList.add("open");

    });

});


modalClose.addEventListener("click", function() {

    projectModal.classList.remove("open");

});


projectModal.addEventListener("click", function(event) {

    if (event.target === projectModal) {

        projectModal.classList.remove("open");

    }

});
/* ANIMATED STATS */

const statNumbers =
    document.querySelectorAll(".stat-number");

let statsStarted = false;

const statsSection =
    document.querySelector(".stats-grid");

const statsObserver =
    new IntersectionObserver(
        function(entries) {

            if (
                entries[0].isIntersecting &&
                !statsStarted
            ) {

                statsStarted = true;

                statNumbers.forEach(function(number) {

                    const target =
                        Number(number.getAttribute("data-target"));

                    let current = 0;

                    const counter =
                        setInterval(function() {

                            current++;

                            number.textContent =
                                current;

                            if (current >= target) {

                                clearInterval(counter);

                            }

                        }, 150);

                });

            }

        },
        {
            threshold: 0.4
        }
    );

statsObserver.observe(statsSection);
/* CONTACT FORM */

const contactForm =
    document.querySelector("#contactForm");

const formStatus =
    document.querySelector("#formStatus");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formStatus.textContent =
        "Thanks! Your message is ready to be sent.";

    contactForm.reset();

});
/* TIME BASED GREETING */

const timeGreeting =
    document.querySelector("#timeGreeting");

const currentHour =
    new Date().getHours();

if (currentHour >= 5 && currentHour < 12) {

    timeGreeting.textContent =
        "GOOD MORNING.";

} else if (currentHour >= 12 && currentHour < 17) {

    timeGreeting.textContent =
        "GOOD AFTERNOON.";

} else if (currentHour >= 17 && currentHour < 21) {

    timeGreeting.textContent =
        "GOOD EVENING.";

} else {

    timeGreeting.textContent =
        "GOOD NIGHT.";

}
/* PROFILE PHOTO LIGHTBOX */

const profilePhoto =
    document.querySelector("#profilePhoto");

const photoLightbox =
    document.querySelector("#photoLightbox");

const photoClose =
    document.querySelector("#photoClose");

profilePhoto.addEventListener("click", function() {

    photoLightbox.classList.add("open");

});

photoClose.addEventListener("click", function() {

    photoLightbox.classList.remove("open");

});

photoLightbox.addEventListener("click", function(event) {

    if (event.target === photoLightbox) {

        photoLightbox.classList.remove("open");

    }

});
/* KEYBOARD NAVIGATION */

document.addEventListener("keydown", function(event) {

    // Don't activate shortcuts while typing
    const activeElement =
        document.activeElement.tagName;

    if (
        activeElement === "INPUT" ||
        activeElement === "TEXTAREA"
    ) {
        return;
    }

    const key = event.key.toLowerCase();

    if (key === "h") {

        window.location.hash = "";

    }

    else if (key === "a") {

        window.location.hash = "about";

    }

    else if (key === "j") {

        window.location.hash = "journey";

    }

    else if (key === "p") {

        window.location.hash = "projects";

    }

    else if (key === "s") {

        window.location.hash = "skills";

    }

    else if (key === "c") {

        window.location.hash = "contact";

    }

});
/* COMMAND PALETTE */

const commandOverlay =
    document.querySelector("#commandOverlay");

const commandInput =
    document.querySelector("#commandInput");

const commandButtons =
    document.querySelectorAll(".command-list button");


// Open with Ctrl + K

document.addEventListener("keydown", function(event) {

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        commandOverlay.classList.add("open");

        commandInput.focus();

    }

    if (event.key === "Escape") {

        commandOverlay.classList.remove("open");

        commandInput.value = "";

        commandButtons.forEach(function(button) {

            button.style.display = "flex";

        });

    }

});


// Navigate

commandButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const target =
            button.getAttribute("data-target");

        commandOverlay.classList.remove("open");

        commandInput.value = "";

        window.location.hash = target;

    });

});


// Search commands

commandInput.addEventListener("input", function() {

    const search =
        commandInput.value.toLowerCase();

    commandButtons.forEach(function(button) {

        const text =
            button.textContent.toLowerCase();

        if (text.includes(search)) {

            button.style.display = "flex";

        } else {

            button.style.display = "none";

        }

    });

});


// Close when clicking outside

commandOverlay.addEventListener("click", function(event) {

    if (event.target === commandOverlay) {

        commandOverlay.classList.remove("open");

        commandInput.value = "";

    }

});