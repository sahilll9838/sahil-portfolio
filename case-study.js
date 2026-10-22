const caseStudies = {
  "terra-realty": {
    title: "TERRA REALTY", category: "REAL ESTATE / WEB DESIGN", image: "assets/terra-realty.png",
    intro: "A premium real-estate website concept centered on architectural integrity, bespoke developments and lasting value.",
    role: "UI/UX Design · Visual Design", platform: "Responsive website concept", tools: "Figma · UI/UX Design",
    problem: "Real-estate brands need to communicate trust, architectural quality and specialist expertise without overwhelming visitors.",
    approach: "Terra Realty uses an editorial layout, restrained colors, clear typography and structured content to present the brand, its people and its property expertise with confidence.",
    solution: ["A refined landing page introducing the brand's philosophy", "A clear architectural team and expertise presentation", "A consistent navigation and consultation call to action"]
  },
  nexa: {
    title: "NEXA", category: "JOB DISCOVERY PLATFORM", image: "",
    intro: "A focused job discovery experience that helps ambitious people find relevant opportunities without unnecessary noise.",
    role: "UI/UX Design · User Research", platform: "Responsive web experience", tools: "Figma · User flows",
    problem: "Job seekers often spend too much time sorting through listings that do not match their skills, needs or career direction.",
    approach: "The experience focuses on search clarity, useful filters and scannable job cards so users can evaluate opportunities quickly.",
    solution: ["A prominent, simple job search", "Readable listing cards with key details surfaced", "A consistent path from search results to job details"]
  },
  mise: {
    title: "MISE", category: "RECIPE / MEAL PLANNING", image: "",
    intro: "A calmer way to plan, discover and prepare food through an inviting, editorial-inspired interface.",
    role: "UI/UX Design · Visual Design", platform: "Mobile-first experience", tools: "Figma · Photoshop",
    problem: "Planning meals and collecting ingredients can become fragmented across recipes, notes and shopping lists.",
    approach: "MISE connects recipe discovery with step-by-step cooking and ingredient planning in a simple visual system.",
    solution: ["Recipe browsing with clear food photography", "Step-by-step cooking mode", "Ingredient lists designed to support shopping"]
  },
  dailycart: {
    title: "DAILYCART", category: "GROCERY / MOBILE APP", image: "assets/dailycart-project.jpg",
    intro: "A convenient grocery-shopping app concept designed to help people find everyday essentials, explore deals and track orders.",
    role: "UI/UX Design · Mobile App Design", platform: "Mobile application", tools: "Figma · UI/UX Design",
    problem: "Grocery shopping on mobile can feel difficult when product discovery, category browsing, checkout and delivery updates are disconnected.",
    approach: "DailyCart brings key shopping actions into a calm, green visual system with clear categories, product cards, delivery information and an easy-to-follow order status.",
    solution: ["A branded welcome screen and clear home-page search", "Quick access to grocery categories and weekly deals", "An order confirmation screen with delivery progress and receipt details"]
  },
  form: {
    title: "FORM", category: "FASHION E-COMMERCE", image: "",
    intro: "A confident shopping experience where product, material and editorial storytelling share the stage.",
    role: "UI/UX Design · Visual Design", platform: "Responsive e-commerce", tools: "Figma · Illustrator",
    problem: "Fashion shopping needs strong product presentation without sacrificing navigation or purchase clarity.",
    approach: "FORM pairs generous product imagery with restrained typography, simple category navigation and clear product information.",
    solution: ["Editorial product discovery", "Clear product details and imagery", "A streamlined browsing-to-purchase journey"]
  }
};

const params = new URLSearchParams(window.location.search);
const slug = params.get("project");
const project = caseStudies[slug];
const root = document.getElementById("case-content");

if (!project) {
  document.title = "Case Study Not Found — SAHIL";
  root.innerHTML = `<section class="case-hero"><p class="case-kicker">PORTFOLIO / CASE STUDY</p><h1>PROJECT<br>NOT FOUND.</h1><p class="case-intro">This project link is unavailable. Return to the portfolio and choose another project.</p><a class="case-cta" href="index.html#work">BACK TO WORK ↗</a></section>`;
} else {
  document.title = `${project.title} — Case Study | SAHIL`;
  root.innerHTML = `
    <header class="case-hero">
      <p class="case-kicker">${project.category}</p>
      <h1>${project.title}</h1>
      <p class="case-intro">${project.intro}</p>
    </header>
    <div class="case-cover">
      ${project.image
        ? `<img src="${project.image}" alt="${project.title} project preview">`
        : `<div class="project-artwork-placeholder" aria-hidden="true"><span>${project.title}</span><small>PROJECT PREVIEW UNAVAILABLE</small></div>`}
    </div>
    <div class="case-grid">
      <div class="case-meta"><span>MY ROLE</span><strong>${project.role}</strong></div>
      <div class="case-meta"><span>PLATFORM</span><strong>${project.platform}</strong></div>
      <div class="case-meta"><span>TOOLS</span><strong>${project.tools}</strong></div>
    </div>
    <article class="case-content">
      <section><p class="case-kicker">01 / THE CHALLENGE</p><h2>The problem</h2><p>${project.problem}</p></section>
      <section><p class="case-kicker">02 / THE THINKING</p><h2>Design approach</h2><p>${project.approach}</p></section>
      <section><p class="case-kicker">03 / THE OUTCOME</p><h2>Solution highlights</h2><ul>${project.solution.map(item => `<li>${item}</li>`).join("")}</ul></section>
      <a class="case-cta" href="index.html#work">← BACK TO ALL PROJECTS</a>
    </article>`;
}
