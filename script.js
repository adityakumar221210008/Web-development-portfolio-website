// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const bodyEl = document.body;

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isActive = hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    bodyEl.classList.toggle("no-scroll");
    hamburger.setAttribute("aria-expanded", isActive ? "true" : "false");
  });

  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const isActive = hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      bodyEl.classList.toggle("no-scroll");
      hamburger.setAttribute("aria-expanded", isActive ? "true" : "false");
    }
  });

  navLinks.forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      bodyEl.classList.remove("no-scroll");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.focus();
    }),
  );
}

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  const currentTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark");
  if (currentTheme === "light") {
    bodyEl.classList.add("light-theme");
    themeToggle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>';
  }

  themeToggle.addEventListener("click", () => {
    bodyEl.classList.toggle("light-theme");
    const newTheme = bodyEl.classList.contains("light-theme")
      ? "light"
      : "dark";
    localStorage.setItem("theme", newTheme);
    themeToggle.innerHTML =
      newTheme === "light"
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C4.734 16 1.8 13.059 1.8 9.258c0-3.433 2.5-6.326 5.856-6.856A.768.768 0 0 1 8 2.88c0 .19-.065.398-.219.559C6.214 4.828 5.8 6.748 5.8 8.742c0 2.98 2.42 5.4 5.4 5.4 1.44 0 2.73-.529 3.738-1.381-.122-.033-.242-.066-.36-.098a6 6 0 1 0-8.369-2.25c-.604.602-1.5 1.575-2.563 2.247A8.345 8.345 0 0 1 .344 9.258 8.346 8.346 0 0 1 6 .278z"/></svg>';
  });
}

// Current Year for Footer
const currentYearElement = document.getElementById("currentYear");
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Particles.js Initialization for Hero Background
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: { value: 5, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#40FF70",
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
}

// Lazy Loading for Project Images
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll(".lazy-load");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        img.classList.remove("lazy-load");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => imageObserver.observe(img));
});

// Skill Bar Animation on Scroll
const skillsGrid = document.getElementById("skills-grid");
if (skillsGrid) {
  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll(".skill-bar");
          skillBars.forEach((bar) => {
            const level = bar.getAttribute("data-level");
            bar.style.width = level + "%";
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  skillObserver.observe(skillsGrid);
}

// Active Nav Link Highlighting on Scroll
const sections = document.querySelectorAll("section[id]");
const headerEl = document.getElementById("header");

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function navHighlighter() {
  if (!headerEl) return;
  let scrollY = window.pageYOffset;
  const headerHeight = headerEl.offsetHeight;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - headerHeight - 20;
    const sectionId = current.getAttribute("id");
    const linkToActivate = document.querySelector(
      `.nav-menu a[href*=${sectionId}]`,
    );

    if (linkToActivate) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        linkToActivate.classList.add("active");
      } else {
        linkToActivate.classList.remove("active");
      }
    }
  });
}

if (sections.length > 0) {
  navHighlighter();
  window.addEventListener("scroll", throttle(navHighlighter, 100));
}

// Header Style Change on Scroll
if (headerEl) {
  const headerScrollThreshold = 50;
  window.addEventListener(
    "scroll",
    throttle(() => {
      if (window.scrollY > headerScrollThreshold) {
        headerEl.classList.add("header-scrolled");
      } else {
        headerEl.classList.remove("header-scrolled");
      }
    }, 100),
  );
}

// Contact Form Validation and Submission
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Basic Validation
    let isValid = true;
    if (!name.value.trim()) {
      name.classList.add("error");
      isValid = false;
    } else {
      name.classList.remove("error");
    }
    if (
      !email.value.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
    ) {
      email.classList.add("error");
      isValid = false;
    } else {
      email.classList.remove("error");
    }
    if (!message.value.trim()) {
      message.classList.add("error");
      isValid = false;
    } else {
      message.classList.remove("error");
    }

    if (isValid) {
      formMessage.textContent = "Sending message...";
      formMessage.style.color = "var(--accent-primary)";
      // Simulate form submission (replace with actual backend integration like Formspree)
      setTimeout(() => {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "var(--accent-secondary)";
        contactForm.reset();
        setTimeout(() => {
          formMessage.textContent = "";
        }, 3000);
      }, 1000);
    } else {
      formMessage.textContent = "Please fill out all fields correctly.";
      formMessage.style.color = "red";
    }
  });
}
