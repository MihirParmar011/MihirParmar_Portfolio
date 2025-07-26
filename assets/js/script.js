'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Skills Modal Functionality
// Skills data

        // Skills data
        const skillsData = {
            java: {
                name: "Java",
                level: "Advanced",
                experience: 85,
                description: "Object-oriented programming language used for building enterprise applications, Android apps, and web services.",
                features: [
                    "Object-Oriented Programming (OOP)",
                    "Platform Independent (Write Once, Run Anywhere)",
                    "Strong Memory Management",
                    "Multithreading Support",
                    "Rich API and Libraries",
                    "Enterprise Application Development"
                ],
                use_cases: "Desktop Applications, Web Applications, Mobile Apps (Android), Enterprise Software, Scientific Applications"
            },
            dart: {
                name: "Dart",
                level: "Intermediate",
                experience: 75,
                description: "Client-optimized programming language developed by Google, primarily used for building mobile, desktop, server, and web applications.",
                features: [
                    "Optimized for UI Development",
                    "Strong Type System",
                    "Async/Await Support",
                    "Null Safety",
                    "Hot Reload Capability",
                    "Cross-platform Development"
                ],
                use_cases: "Flutter Applications, Web Development, Server-side Development, Mobile App Development"
            },
            flutter: {
                name: "Flutter",
                level: "Advanced",
                experience: 90,
                description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
                features: [
                    "Single Codebase for Multiple Platforms",
                    "Fast Development with Hot Reload",
                    "Rich Widget Library",
                    "Native Performance",
                    "Material Design and Cupertino Widgets",
                    "Strong Community Support"
                ],
                use_cases: "Mobile Apps (iOS/Android), Web Applications, Desktop Applications, Progressive Web Apps (PWA)"
            },
            firebase: {
                name: "Firebase",
                level: "Intermediate",
                experience: 70,
                description: "Google's comprehensive app development platform providing backend services, databases, analytics, and hosting solutions.",
                features: [
                    "Real-time Database",
                    "Cloud Firestore",
                    "Authentication Services",
                    "Cloud Storage",
                    "Push Notifications",
                    "Analytics and Crashlytics"
                ],
                use_cases: "Mobile App Backend, Web App Backend, Real-time Applications, User Authentication, Data Storage"
            },
            sql: {
                name: "SQL",
                level: "Advanced",
                experience: 80,
                description: "Structured Query Language for managing and manipulating relational databases.",
                features: [
                    "Data Querying and Retrieval",
                    "Database Design and Normalization",
                    "Stored Procedures and Functions",
                    "Joins and Subqueries",
                    "Data Manipulation (CRUD Operations)",
                    "Performance Optimization"
                ],
                use_cases: "Database Management, Data Analysis, Reporting, Backend Development, Data Migration"
            },
            html5: {
                name: "HTML5",
                level: "Expert",
                experience: 95,
                description: "The latest version of HyperText Markup Language, the standard markup language for creating web pages.",
                features: [
                    "Semantic Elements",
                    "Multimedia Support (Audio/Video)",
                    "Canvas and SVG Graphics",
                    "Local Storage",
                    "Geolocation API",
                    "Responsive Design Support"
                ],
                use_cases: "Web Development, Mobile Web Apps, Progressive Web Apps, Email Templates, Landing Pages"
            },
            css3: {
                name: "CSS3",
                level: "Expert",
                experience: 90,
                description: "The latest version of Cascading Style Sheets, used for styling and layout of web pages.",
                features: [
                    "Flexbox and Grid Layout",
                    "Animations and Transitions",
                    "Media Queries for Responsive Design",
                    "Custom Properties (CSS Variables)",
                    "Advanced Selectors",
                    "Transform and Filter Effects"
                ],
                use_cases: "Web Styling, Responsive Design, Animations, UI/UX Design, Print Stylesheets"
            },
            javascript: {
                name: "JavaScript",
                level: "Advanced",
                experience: 85,
                description: "High-level, dynamic programming language that enables interactive web pages and is an essential part of web applications.",
                features: [
                    "Dynamic Typing",
                    "First-class Functions",
                    "Prototype-based OOP",
                    "Asynchronous Programming",
                    "DOM Manipulation",
                    "Modern ES6+ Features"
                ],
                use_cases: "Web Development, Server-side Development (Node.js), Mobile Apps, Desktop Applications, Game Development"
            },
            git: {
                name: "Git",
                level: "Advanced",
                experience: 80,
                description: "Distributed version control system for tracking changes in source code during software development.",
                features: [
                    "Distributed Version Control",
                    "Branching and Merging",
                    "Conflict Resolution",
                    "Remote Repository Management",
                    "Commit History Tracking",
                    "Collaboration Tools"
                ],
                use_cases: "Source Code Management, Team Collaboration, Project Versioning, Code Backup, Release Management"
            },
            github: {
                name: "GitHub",
                level: "Advanced",
                experience: 85,
                description: "Web-based platform for version control and collaboration, built on top of Git.",
                features: [
                    "Repository Hosting",
                    "Pull Requests and Code Review",
                    "Issue Tracking",
                    "GitHub Actions (CI/CD)",
                    "Project Management",
                    "Community Collaboration"
                ],
                use_cases: "Code Hosting, Team Collaboration, Open Source Projects, Portfolio Showcase, Project Management"
            },
            "android-studio": {
                name: "Android Studio",
                level: "Intermediate",
                experience: 70,
                description: "Official integrated development environment (IDE) for Google's Android operating system.",
                features: [
                    "Intelligent Code Editor",
                    "Visual Layout Editor",
                    "APK Analyzer",
                    "Built-in Emulator",
                    "Gradle-based Build System",
                    "Debugging and Testing Tools"
                ],
                use_cases: "Android App Development, UI Design, App Testing, Performance Analysis, App Deployment"
            },
            vscode: {
                name: "VS Code",
                level: "Expert",
                experience: 95,
                description: "Lightweight but powerful source code editor with rich ecosystem of extensions.",
                features: [
                    "IntelliSense Code Completion",
                    "Integrated Terminal",
                    "Git Integration",
                    "Extension Marketplace",
                    "Multi-language Support",
                    "Customizable Themes and Settings"
                ],
                use_cases: "Web Development, Mobile Development, Backend Development, Data Science, DevOps, Documentation"
            },
            xml: {
                name: "XML",
                level: "Intermediate",
                experience: 70,
                description: "Extensible Markup Language used for storing and transporting data with a focus on simplicity and usability.",
                features: [
                    "Self-describing Data Format",
                    "Platform Independent",
                    "Hierarchical Structure",
                    "Schema Validation",
                    "Namespace Support",
                    "Human and Machine Readable"
                ],
                use_cases: "Data Exchange, Configuration Files, Android Layouts, Web Services, Document Storage"
            },
            "material-design": {
                name: "Material Design",
                level: "Advanced",
                experience: 80,
                description: "Google's design language that combines classic principles of good design with innovation and technology.",
                features: [
                    "Material Theming",
                    "Component-based Design",
                    "Motion and Animation Guidelines",
                    "Accessibility Standards",
                    "Responsive Design Principles",
                    "Color and Typography Systems"
                ],
                use_cases: "Mobile App Design, Web Design, UI/UX Design, Android Applications, Flutter Applications"
            },
            pwa: {
                name: "PWA",
                level: "Intermediate",
                experience: 75,
                description: "Progressive Web Apps that use modern web capabilities to deliver app-like experiences to users.",
                features: [
                    "Offline Functionality",
                    "Push Notifications",
                    "App-like Interface",
                    "Responsive Design",
                    "Service Workers",
                    "Web App Manifest"
                ],
                use_cases: "Mobile Web Apps, Offline Applications, Cross-platform Solutions, E-commerce, Social Media Apps"
            }
        };

        // Skills modal variables
        const skillItems = document.querySelectorAll('[data-skill]');
        const skillModalContainer = document.querySelector('[data-skill-modal-container]');
        const skillModalCloseBtn = document.querySelector('[data-skill-modal-close-btn]');
        const skillOverlay = document.querySelector('[data-skill-overlay]');
        const skillModalImg = document.querySelector('[data-skill-modal-img]');
        const skillModalTitle = document.querySelector('[data-skill-modal-title]');
        const skillModalLevel = document.querySelector('[data-skill-modal-level]');
        const skillModalContent = document.querySelector('[data-skill-modal-content]');

        // Skills modal toggle function
        const skillModalFunc = function () {
            if (skillModalContainer && skillOverlay) {
                skillModalContainer.classList.toggle("active");
                skillOverlay.classList.toggle("active");
            }
        };

        // Add click event to all skill items
        if (skillItems.length > 0) {
            skillItems.forEach(item => {
                item.addEventListener('click', function() {
                    const skillKey = this.getAttribute('data-skill');
                    const skillData = skillsData[skillKey];
                    const imgSrc = this.querySelector('img').src;
                    const imgAlt = this.querySelector('img').alt;

                    if (skillData && skillModalImg && skillModalTitle && skillModalLevel && skillModalContent) {
                        // Update modal content
                        skillModalImg.src = imgSrc;
                        skillModalImg.alt = imgAlt;
                        skillModalTitle.textContent = skillData.name;
                        skillModalLevel.textContent = skillData.level;

                        // Build modal content
                        const contentHTML = `
                            <div class="skill-section">
                                <h4>About</h4>
                                <p>${skillData.description}</p>
                            </div>
                            
                            <div class="skill-section">
                                <h4>Experience Level</h4>
                                <div class="experience-bar">
                                    <div class="experience-fill" style="width: 0%"></div>
                                </div>
                                <p style="margin-top: 5px; font-size: 0.8rem;">${skillData.experience}% Proficiency</p>
                            </div>
                            
                            <div class="skill-section">
                                <h4>Key Features</h4>
                                <ul class="skill-features">
                                    ${skillData.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="skill-section">
                                <h4>Use Cases</h4>
                                <p>${skillData.use_cases}</p>
                            </div>
                        `;

                        skillModalContent.innerHTML = contentHTML;
                        
                        // Show modal first, then animate progress bar
                        skillModalFunc();
                        
                        // Trigger experience bar animation after modal is shown
                        setTimeout(() => {
                            const experienceFill = skillModalContent.querySelector('.experience-fill');
                            if (experienceFill) {
                                experienceFill.style.width = skillData.experience + '%';
                            }
                        }, 300);
                    }
                });
            });
        }

        // Add click event to skill modal close button and overlay
        if (skillModalCloseBtn) {
            skillModalCloseBtn.addEventListener('click', skillModalFunc);
        }
        if (skillOverlay) {
            skillOverlay.addEventListener('click', skillModalFunc);
        }

        // Close skill modal on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && skillModalContainer && skillModalContainer.classList.contains('active')) {
                skillModalFunc();
            }
        });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
    select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        if (selectValue) {
            selectValue.innerText = this.innerText;
        }
        if (select) {
            elementToggleFunc(select);
        }
        filterFunc(selectedValue);
    });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        if (selectValue) {
            selectValue.innerText = this.innerText;
        }
        filterFunc(selectedValue);

        if (lastClickedBtn) {
            lastClickedBtn.classList.remove("active");
        }
        this.classList.add("active");
        lastClickedBtn = this;
    });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
    });
}

// scroller view
 document.addEventListener("DOMContentLoaded", () => {
            const scrollRows = document.querySelectorAll(".scroll-row");
            
            scrollRows.forEach((row, index) => {
                const track = row.querySelector(".scroll-track");
                const items = [...track.children];
                const speed = /*row.dataset.speed* ||*/ 250;

                // Duplicate items for seamless loop
                const duplicateCount = Math.ceil(window.innerWidth / 130) + 2;
                for (let i = 0; i < duplicateCount; i++) {
                    items.forEach(item => {
                        const clone = item.cloneNode(true);
                        track.appendChild(clone);
                    });
                }
                
                // Set animation duration based on speed
                track.style.animationDuration = `${speed}s`;
                
                // Add pause on hover for better UX
                track.addEventListener('mouseenter', () => {
                    track.style.animationPlayState = 'paused';
                });
                
                track.addEventListener('mouseleave', () => {
                    track.style.animationPlayState = 'running';
                });
            });
            
            // Add intersection observer for performance
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const track = entry.target.querySelector('.scroll-track');
                    if (entry.isIntersecting) {
                        track.style.animationPlayState = 'running';
                    } else {
                        track.style.animationPlayState = 'paused';
                    }
                });
            });
            
            scrollRows.forEach(row => observer.observe(row));
        });

const certData = {
// 'use strict';



// // element toggle function
// const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {

//   for (let i = 0; i < filterItems.length; i++) {

//     if (selectedValue === "all") {
//       filterItems[i].classList.add("active");
//     } else if (selectedValue === filterItems[i].dataset.category) {
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].classList.remove("active");
//     }

//   }

// }

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }



// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }



// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }
  cert1: {
    title: "Meta Front-End Developer",
    issuer: "Coursera",
    year: "2024",
    file: "./assets/images/cert/CERT1.png", // Image file path
  },
  cert2: {
    title: "Python for Everybody",
    issuer: "University of Michigan",
    year: "2023",
    file: "./assets/images/cert/CERT2.png", // Image file path
  },
  cert3: {
    title: "PDF Certificate Example",
    issuer: "Another Issuer",
    year: "2022",
    file: "./assets/pdf/Mihir_Parmar.pdf", // PDF file path
  },
};

function openCertModal(certId) {
  const cert = certData[certId];
  if (!cert) return;

  const certViewer = document.getElementById("certViewer");
  const fileExtension = cert.file.split(".").pop().toLowerCase();

  certViewer.innerHTML = ""; // Clear previous content

  if (fileExtension === "pdf") {
    const embed = document.createElement("embed");
    embed.src = cert.file;
    embed.type = "application/pdf";
    certViewer.appendChild(embed);
  } else {
    const img = document.createElement("img");
    img.src = cert.file;
    img.alt = `Certificate for ${cert.title}`;
    certViewer.appendChild(img);
  }

  document.getElementById("certModalTitle").textContent = cert.title;
  document.getElementById("certModalIssuer").textContent = `Issued by ${cert.issuer}`;
  document.getElementById("certModalYear").textContent = `Year: ${cert.year}`;

  document.getElementById("certModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  const modal = document.getElementById("certModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  document.getElementById("certViewer").innerHTML = ""; // Clear the content
}

// Global event listeners
document.addEventListener('click', (event) => {
    // Close modal if the background is clicked
    if (event.target === document.getElementById('certModal')) {
        closeCertModal();
    }
});

// Close modal with the 'Escape' key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeCertModal();
    }
});

// Disable right-click on the modal content
document
  .getElementById("certModal")
  .addEventListener("contextmenu", (e) => e.preventDefault());





 // Skill item lazy loading and animation
  document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2 // Trigger when 20% is visible
    };

    const skillItems = document.querySelectorAll(".skill-item");

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class
          entry.target.classList.add("animate");
          obs.unobserve(entry.target); // Trigger only once per item
        }
      });
    }, observerOptions);

    skillItems.forEach(item => {
      observer.observe(item);
    });
  });