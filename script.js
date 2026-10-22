/* =========================================================
   SAHIL — Portfolio (plain HTML/CSS/JS version)
   Edit the DATA objects below to change content.
   ========================================================= */

/* ---------- 1. CONTENT DATA (edit here) ---------- */

const skills = [
  ["01", "UI/UX DESIGN", "Digital products shaped around clarity, rhythm and human behavior.", "◯"],
  ["02", "USER RESEARCH", "Turning observation and evidence into confident product decisions.", "⌁"],
  ["03", "WIREFRAMING", "Finding the strongest structure before the surface takes form.", "╱╲"],
  ["04", "PROTOTYPING", "Making ideas tangible, testable and ready to experience.", "→"],
  ["05", "VISUAL DESIGN", "Distinct systems where type, image and space work together.", "✦"],
  ["06", "BRANDING", "Identities with a clear voice and a memorable visual language.", "◇"],
  ["07", "MOTION DESIGN", "Purposeful movement that guides attention and adds character.", "↗"],
  ["08", "INTERACTION DESIGN", "Responsive details that make digital experiences feel alive.", "+"],
];


const projects = [
  {
    number: "01",
    slug: "terra-realty",
    title: "TERRA REALTY",
    category: "REAL ESTATE / WEB DESIGN",
    description:
      "A refined real-estate website concept for bespoke developments, architectural expertise and long-term property value.",
    tools: "FIGMA · UI/UX DESIGN",
    image: "assets/terra-realty.png",
    alt: "Terra Realty website displayed on two laptop screens",
    figmaLink: "https://www.figma.com/design/m5RBrEqa9aj21pJK5PqzOA/projects?node-id=0-1&t=jQZwZ7ACKT1NeIdm-1"
  },
  {
    number: "02",
    slug: "nexa",
    title: "NEXA",
    category: "JOB DISCOVERY PLATFORM",
    description:
      "A focused search experience that helps ambitious people find the right opportunity without the noise.",
    tools: "FIGMA · USER RESEARCH",
    image: "",
    alt: "",
    figmaLink:
      " paste nexa figma link here"
  },
  {
    number: "03",
    slug: "mise",
    title: "MISE",
    category: "RECIPE / MEAL PLANNING",
    description:
      "A calmer way to plan, discover and prepare food through an inviting editorial interface.",
    tools: "FIGMA · PHOTOSHOP",
    image: "",
    alt: "",
    figmaLink: "PASTE_MISE_FIGMA_LINK_HERE"
  },
  {
    number: "04",
    slug: "dailycart",
    title: "DAILYCART",
    category: "GROCERY / MOBILE APP",
    description:
      "A friendly grocery-shopping experience designed to make everyday essentials, fresh deals and order tracking feel simple.",
    tools: "FIGMA · UI/UX DESIGN",
    image: "assets/dailycart-project.jpg",
    alt: "DailyCart grocery shopping app shown across three mobile screens",
    figmaLink: "https://www.figma.com/design/m5RBrEqa9aj21pJK5PqzOA/projects?node-id=0-1&t=jQZwZ7ACKT1NeIdm-1"
  },
  {
    number: "05",
    slug: "form",
    title: "FORM",
    category: "FASHION E-COMMERCE",
    description:
      "A confident shopping experience where product, material and editorial storytelling share the stage.",
    tools: "FIGMA · ILLUSTRATOR",
    image: "",
    alt: "",
    figmaLink: "PASTE_FORM_FIGMA_LINK_HERE"
  }
];


const tools = ["Figma", "Adobe Photoshop", "Illustrator", "Adobe XD", "After Effects", "Premiere Pro", "InDesign", "VS Code", "Bootstrap"];

/* WhatsApp contact used for the contact link and project enquiries. */
const WHATSAPP_NUMBER = "917081332685";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/* ---------- 2. RENDER CONTENT INTO THE PAGE ---------- */

function renderHeroTitle() {
  const el = document.getElementById("hero-title");
  const word = "PORTFOLIO";
  el.innerHTML = "";
  [...word].forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.dataset.index = index;
    el.appendChild(span);
  });
}

function renderSkills() {
  const container = document.getElementById("skill-rows");
  container.innerHTML = "";
  const rows = [skills.slice(0, 4), skills.slice(4, 8)];
  rows.forEach((row, rowIndex) => {
    const rowEl = document.createElement("div");
    rowEl.className = `skill-row skill-row-${rowIndex + 1}`;
    // duplicate row items for the seamless marquee loop
    [...row, ...row].forEach(([number, title, description, visual]) => {
      const tile = document.createElement("article");
      tile.className = "skill-tile";
      tile.innerHTML = `
        <span class="skill-number">${number}</span>
        <span class="skill-visual">${visual}</span>
        <h3>${title}</h3>
        <p>${description}</p>
      `;
      rowEl.appendChild(tile);
    });
    container.appendChild(rowEl);
  });
}

function renderProjects() {
  const container = document.getElementById("project-stack");
  container.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-head">
        <span>${project.number} / ${String(projects.length).padStart(2, "0")}</span>
        <span>${project.category}</span>
      </div>
      <div class="project-body">
        <div class="project-visual">
          ${project.image
            ? `<img src="${project.image}" alt="${project.alt}" loading="lazy" width="1536" height="1280" />`
            : `<div class="project-artwork-placeholder" aria-hidden="true"><span>${project.title}</span><small>PROJECT PREVIEW UNAVAILABLE</small></div>`}
        </div>
        <div class="project-copy">
          <h3>${project.title}</h3>
          <div class="project-tags">
            ${project.category.split(" / ").map(tag => `<span>${tag}</span>`).join("")}
          </div>
          <p>${project.description}</p>
          <span class="project-tools">${project.tools}</span>
          
<a
  href="${project.figmaLink || 'https://www.figma.com/design/m5RBrEqa9aj21pJK5PqzOA/projects?node-id=0-1&t=jQZwZ7ACKT1NeIdm-1'}"
  class="project-link"
  target="_blank"
  rel="noopener noreferrer"
  data-magnetic
>
  VIEW FIGMA FILE <span>↗</span>
</a>

        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderTools() {
  const container = document.getElementById("tool-cloud");
  container.innerHTML = "";
  tools.forEach((tool, index) => {
    const span = document.createElement("span");
    if (index % 3 === 1) span.classList.add("tool-accent");
    span.dataset.cursorHover = "+";
    span.innerHTML = `<i>${String(index + 1).padStart(2, "0")}</i>${tool}`;
    container.appendChild(span);
  });
}

function wireContactLinks() {
  document.getElementById("contact-link").href = `${WHATSAPP_URL}?text=Hello%20Sahil%2C%20I%20visited%20your%20portfolio.`;
}

/* ---------- 3. NAV MENU (mobile) ---------- */

function setupMenu() {
  const menuButton = document.getElementById("menu-button");
  const menuLabel = document.getElementById("menu-button-label");
  const navLinks = document.getElementById("nav-links");

  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("nav-links-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuLabel.textContent = isOpen ? "CLOSE" : "MENU";
  });

  navLinks.querySelectorAll("[data-nav-link]").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-links-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuLabel.textContent = "MENU";
    });
  });
}

/* ---------- 4. HERO LETTER HOVER EFFECT ---------- */

function setupHeroLetters() {
  const letters = document.querySelectorAll("#hero-title span");
  letters.forEach((letter) => {
    letter.addEventListener("mouseenter", () => {
      const hoveredIndex = Number(letter.dataset.index);
      letters.forEach((el) => {
        const distance = Math.abs(hoveredIndex - Number(el.dataset.index));
        el.classList.remove("hero-letter-active", "hero-letter-neighbor");
        if (distance === 0) el.classList.add("hero-letter-active");
        else if (distance === 1) el.classList.add("hero-letter-neighbor");
      });
    });
    letter.addEventListener("mouseleave", () => {
      letters.forEach((el) => el.classList.remove("hero-letter-active", "hero-letter-neighbor"));
    });
  });
}

/* ---------- 5. CUSTOM CURSOR ---------- */

function setupCursor() {
  const cursor = document.querySelector("[data-cursor]");
  if (!cursor) return;
  const label = cursor.querySelector("span");
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if (!finePointer || !window.gsap) {
    cursor.style.display = "none";
    return;
  }

  document.body.classList.add("has-custom-cursor");
  const moveX = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
  const moveY = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });
  window.addEventListener("mousemove", (event) => {
    moveX(event.clientX);
    moveY(event.clientY);
  });

  function setMode(mode) {
    label.textContent = mode || "";
    cursor.classList.toggle("custom-cursor-active", Boolean(mode));
  }

  // Elements that change the cursor label on hover
  const hoverTargets = [
    { selector: ".skill-tile", mode: "EXPLORE" },
    { selector: ".project-card", mode: "VIEW" },
    { selector: "#contact-link", mode: "GO" },
  ];

  hoverTargets.forEach(({ selector, mode }) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.addEventListener("mouseenter", () => setMode(mode));
      el.addEventListener("mouseleave", () => setMode(""));
    });
  });

  document.querySelectorAll("[data-cursor-hover]").forEach((el) => {
    el.addEventListener("mouseenter", () => setMode(el.dataset.cursorHover || "+"));
    el.addEventListener("mouseleave", () => setMode(""));
  });
}

/* ---------- 6. MAGNETIC BUTTONS (project links, contact link) ---------- */

function setupMagnetic() {
  if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const targets = document.querySelectorAll("[data-magnetic], #contact-link");
  targets.forEach((el) => {
    el.addEventListener("mousemove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.2;
      gsap.to(el, { x, y, duration: 0.35, ease: "power3.out" });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.35)" });
    });
  });
}

/* ---------- 7. SCROLL ANIMATIONS (GSAP + ScrollTrigger) ---------- */

function setupScrollAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  // Fade/blur reveal for elements marked [data-reveal]
  gsap.utils.toArray("[data-reveal]").forEach((element) => {
    gsap.fromTo(
      element,
      { y: 48, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.15,
        ease: "power4.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
      }
    );
  });

  // Dim/brighten process steps as they enter/leave view
  gsap.utils.toArray("[data-process]").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0.28 },
      {
        opacity: 1,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 68%",
          end: "bottom 45%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  // Floating hero glow
  gsap.to("[data-hero-glow]", {
    xPercent: 8,
    yPercent: -6,
    scale: 1.12,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

/* ---------- 8. INIT ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderHeroTitle();
  renderSkills();
  renderProjects();
  renderTools();
  wireContactLinks();

  setupMenu();
  setupHeroLetters();
  setupCursor();
  setupMagnetic();
  setupScrollAnimations();
});
