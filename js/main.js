const aboutModal = document.getElementById("aboutModal");
const openAbout = document.getElementById("openAbout");
const closeAbout = document.getElementById("closeAbout");
const backHome = document.getElementById("backHome");

openAbout.addEventListener("click", () => {
    aboutModal.classList.add("active");
});

closeAbout.addEventListener("click", () => {
    aboutModal.classList.remove("active");
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        backHome.classList.add("show");
    }else{
        backHome.classList.remove("show");
    }
});

backHome.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* CONTACT MODAL */

const openContact = document.getElementById("openContact");
const closeContact = document.getElementById("closeContact");
const contactModal = document.getElementById("contactModal");

if (openContact && closeContact && contactModal) {
    openContact.addEventListener("click", () => {
        contactModal.classList.add("active");
    });

    closeContact.addEventListener("click", () => {
        contactModal.classList.remove("active");
    });
}


/* PROJECT DETAILS MODAL */

const projectData = {

    moniapp: {
        title: "MoniApp",
        type: "School Project",
        image: "assets/thumbnails/moniapp.png",

        overview:
            "A finished mobile-based stock and expiration monitoring application designed for sari-sari stores to help organize inventory, monitor expiration dates, reduce waste, and improve traditional product monitoring workflows.",

        features: [
            "Product inventory management",
            "Expiration date tracking",
            "Stock monitoring and alerts",
            "Analytics and report generation",
            "Admin approval workflows"
        ],

        role:
            "Lead Developer and Project Leader responsible for system implementation, project planning, UI improvements, debugging, testing, and workflow coordination.",

        tools: [
            "Android Studio",
            "Java",
            "Firebase",
            "AI-Assisted Workflow"
        ],

        challenges: [
            "Managing time alongside academic responsibilities",
            "Coordinating workloads and responsibilities within the team",
            "Handling debugging and revisions during development"
        ],

        learnings: [
            "Improved leadership and communication skills",
            "Learned proper project coordination and workflow organization",
            "Strengthened collaboration and problem-solving approaches"
        ],

        future: [
            "POS-like system expansion",
            "Sales and income tracking",
            "Advanced analytics and reporting improvements",
            "Expanded inventory monitoring features"
        ]
    },

    beh: {
        title: "Bataan Event Hub",
        type: "Client-Based Academic Project",
        image: "assets/thumbnails/beh.png",

        overview:
            "A finished Android-based event management application that centralizes event organization, attendee monitoring, RSVP workflows, payment validation, and report generation.",

        features: [
            "Event scheduling and management",
            "RSVP and attendee monitoring",
            "Receipt upload and payment verification",
            "PDF and report generation",
            "Budget and material tracking"
        ],

        role:
            "Solo Developer responsible for frontend, backend, Firebase integration, UI planning, debugging, testing, and workflow implementation.",

        tools: [
            "Android Studio",
            "Java",
            "Firebase",
            "AI-Assisted Workflow"
        ],

        challenges: [
            "Debugging and stabilizing workflows",
            "Maintaining clean and accessible UI structure",
            "Ensuring stable event monitoring systems"
        ],

        learnings: [
            "Learned the value of simplicity and accessibility",
            "Improved solo development workflow management",
            "Strengthened debugging and testing discipline"
        ],

        future: [
            "QR attendance system",
            "Push notification integration",
            "Calendar integration",
            "Enhanced analytics dashboard"
        ]
    },

    quantum: {
        title: "Quantum Dance Studio",
        type: "OJT / Company Project",
        image: "assets/thumbnails/quantoom.png",

        overview:
            "An ongoing web-based booking management system developed for Quantoom Dance Studio to improve scheduling, booking workflows, role-based management, and notification systems.",

        features: [
            "Booking approval workflows",
            "Role-based admin management",
            "Dashboard monitoring",
            "Booking cancellation and transfer handling",
            "Automated email notification workflows"
        ],

        role:
            "Development Support with frontend assistance, backend support, debugging, testing, UI improvements, and collaborative workflow support.",

        tools: [
            "HTML",
            "CSS",
            "JavaScript",
            "VS Code",
            "Canva",
            "AI-Assisted Workflow"
        ],

        challenges: [
            "Handling responsive design adjustments",
            "Troubleshooting coding and workflow bugs",
            "Collaborating during high workload development phases"
        ],

        learnings: [
            "Improved collaborative development experience",
            "Strengthened debugging and testing awareness",
            "Learned importance of mentorship and communication"
        ],

        future: [
            "Security enhancements",
            "Expanded dashboard analytics",
            "Additional booking workflows",
            "Further responsive UI improvements"
        ]
    },

    blinkout: {
        title: "BlinkOut",
        type: "Personal / Experimental Game Project",
        image: "assets/thumbnails/blinkout.png",

        overview:
            "An ongoing multiplayer PvP mobile staring contest game concept focused on competitive gameplay, multiplayer systems, progression mechanics, and interactive distraction-based features.",

        features: [
            "Real-time multiplayer planning",
            "Ranked and casual matchmaking concepts",
            "Blink detection and alignment systems",
            "Inventory and cosmetic systems",
            "Profile, leaderboard, and progression planning"
        ],

        role:
            "Project Leader and Multiplayer Game System Planner responsible for architecture planning, gameplay systems, UI structure, feature organization, and workflow management.",

        tools: [
            "Android Studio",
            "Kotlin",
            "Java",
            "Firebase",
            "Canva",
            "AI-Assisted Workflow"
        ],

        challenges: [
            "Balancing development with personal responsibilities",
            "Managing long-term feature planning",
            "Maintaining consistent development schedules"
        ],

        learnings: [
            "Improved multiplayer architecture planning",
            "Strengthened long-term workflow organization",
            "Enhanced scalable system planning awareness"
        ],

        future: [
            "Real-time camera integration",
            "Anti-cheat systems",
            "Expanded multiplayer systems",
            "Potential future public release"
        ]
    },

    gcashtracker: {
        title: "GCash Transaction Tracker",
        type: "Spreadsheet / Data Management Sample",
        image: "Resources/gcash.png",

        overview:
            "A spreadsheet-based tracker designed to organize GCash cash-in and cash-out records, monitor balances, review missing or unrecorded transactions, and support clearer transaction documentation for small business workflows.",

        features: [
            "Cash-in and cash-out transaction tracking",
            "Balance monitoring and record checking",
            "Remarks and approval tracking",
            "Missing or unrecorded transaction review",
            "Summary and reporting support"
        ],

        role:
            "Workflow Planner and Spreadsheet Organizer responsible for data structure planning, formula logic, testing, documentation, and AI-assisted spreadsheet development.",

        tools: [
            "Microsoft Excel",
            "Spreadsheet Formulas",
            "Data Organization",
            "Conditional Formatting",
            "AI-Assisted Workflow"
        ],

        challenges: [
            "Designing a clearer flow for transaction monitoring",
            "Organizing cash-in and cash-out records in a readable format",
            "Improving visibility of missing, mismatched, or unrecorded data"
        ],

        learnings: [
            "Improved spreadsheet planning and data organization",
            "Strengthened attention to detail in transaction tracking",
            "Learned how structured records can support better review and reporting"
        ],

        future: [
            "Cleaner dashboard summary",
            "Improved validation and approval flow",
            "More automated missing-record indicators"
        ]
    }
};
const projectCards = document.querySelectorAll(".project-card");

const projectModal = document.getElementById("projectModal");
const closeProject = document.getElementById("closeProject");

const projectModalImage = document.getElementById("projectModalImage");
const projectModalType = document.getElementById("projectModalType");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalDescription = document.getElementById("projectModalDescription");
const projectModalFeatures = document.getElementById("projectModalFeatures");
const projectModalTools = document.getElementById("projectModalTools");
function resetProjectModalScroll() {
    if (projectModal) {
        projectModal.scrollTop = 0;
    }

    const card = document.querySelector(".project-modal-card");
    if (card) {
        card.scrollTop = 0;
    }

    const layout = document.querySelector(".project-modal-layout");
    if (layout) {
        layout.scrollIntoView({ behavior: "instant", block: "start" });
    }
}


projectCards.forEach(card => {

    card.addEventListener("click", () => {

        const key = card.dataset.project;
        const project = projectData[key];

        if (!project) return;

        projectModalImage.src = project.image;
        projectModalImage.alt = project.title;

        projectModalType.textContent = project.type;
        projectModalTitle.textContent = project.title;

        projectModalDescription.innerHTML = `
            <p>${project.overview}</p>

            <h3>Key Features</h3>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join("")}
            </ul>

            <h3>Role</h3>
            <p>${project.role}</p>

            <h3>Tools & Technologies</h3>
            <div class="project-tools">
                ${project.tools.map(tool => `<span>${tool}</span>`).join("")}
            </div>

            <h3>Development Workflow</h3>
            <p>AI-assisted development was used for coding support, debugging, planning, documentation, and iteration. Project direction, design decisions, feature planning, and workflow organization were personally managed.</p>

            <h3>Challenges Encountered</h3>
            <ul>
                ${project.challenges.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <h3>Key Learnings</h3>
            <ul>
                ${project.learnings.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <h3>Future Improvements</h3>
            <ul>
                ${project.future.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;

        projectModal.scrollTop = 0; projectModal.querySelector(".project-modal-card").scrollTop = 0; resetProjectModalScroll(); projectModal.classList.add("active");
    });
});

if (closeProject && projectModal) {

    closeProject.addEventListener("click", () => {
        projectModal.classList.remove("active"); resetProjectModalScroll();
    });


}








/* FORCE PROJECT MODAL SCROLL RESET */

function forceProjectModalTop() {
    const projectCard = document.querySelector(".project-modal-card");

    if (projectModal) {
        projectModal.scrollTop = 0;
    }

    if (projectCard) {
        projectCard.scrollTop = 0;
    }
}

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        setTimeout(forceProjectModalTop, 50);
        setTimeout(forceProjectModalTop, 150);
    });
});

if (closeProject) {
    closeProject.addEventListener("click", () => {
        setTimeout(forceProjectModalTop, 50);
    });
}
/* FINAL CLEAN PORTFOLIO VIEW SWITCH */

const cleanViewProjectsBtn = document.querySelector('.hero-buttons a[href="#projects"]');
const cleanProjectsSection = document.getElementById("projects");
const cleanBackHomeBtn = document.getElementById("backHome");

if (cleanViewProjectsBtn && cleanProjectsSection && cleanBackHomeBtn) {
    cleanViewProjectsBtn.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        document.body.classList.add("project-mode");
        cleanProjectsSection.scrollTop = 0;
        cleanBackHomeBtn.classList.add("show");

        history.replaceState(null, "", "#projects");
    }, true);

    cleanBackHomeBtn.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        document.body.classList.remove("project-mode");
        cleanProjectsSection.scrollTop = 0;
        cleanBackHomeBtn.classList.remove("show");

        history.replaceState(null, "", window.location.pathname);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, true);
}

