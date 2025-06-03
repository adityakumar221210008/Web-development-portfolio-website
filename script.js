// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const bodyEl = document.body; // Cache body element

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        bodyEl.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
    });

    navLinks.forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        bodyEl.style.overflow = "";
    }));
}

// Current Year for Footer
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Active Nav Link highlighting on scroll
const sections = document.querySelectorAll("section[id]");
const headerEl = document.getElementById('header'); // Cache header element

function navHighlighter() {
  if (!headerEl) return; // Guard against missing header
  let scrollY = window.pageYOffset;
  const headerHeight = headerEl.offsetHeight;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    // Highlight when top of section is within a range from top of viewport considering header
    const sectionTop = current.offsetTop - headerHeight - 20; // Adjusted offset for better trigger
    let sectionId = current.getAttribute("id");
    let linkToActivate = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

    if(linkToActivate){
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
            linkToActivate.classList.add("active");
        } else {
            linkToActivate.classList.remove("active");
        }
    }
  });
}

// Initial call and on scroll
if (sections.length > 0) { // Only add listener if sections exist
    document.addEventListener('DOMContentLoaded', navHighlighter);
    window.addEventListener("scroll", navHighlighter);
}


// Header style change on scroll
if(headerEl){
    const headerScrollThreshold = 50;
    window.addEventListener('scroll', () => {
        if(window.scrollY > headerScrollThreshold){
            headerEl.style.backgroundColor = 'rgba(13, 13, 26, 0.9)'; // More opaque
            headerEl.style.boxShadow = '0 5px 25px rgba(0,0,0,0.6)'; // Stronger shadow
        } else {
            headerEl.style.backgroundColor = 'rgba(13, 13, 26, 0.8)';
            headerEl.style.boxShadow = '0 3px 20px rgba(0,0,0,0.5)';
        }
    });
}