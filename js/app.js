document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      renderPersonalInfo(data.personalInfo);
      renderAbout(data.about);
      renderSkills(data.skills, data.skillsSection);
      renderProjects(data.projects, data.projectsSection);
      renderTestimonials(data.testimonials, data.testimonialsSection);
      renderArticles(data.articles, data.blogSection);
      renderContact(data.contact, data.personalInfo);

      // Re-initialize Webflow interactions if needed
      // Note: Webflow's interactions might need a trigger to re-scan the DOM
      if (window.Webflow && window.Webflow.require('ix2')) {
        window.Webflow.require('ix2').init();
      }
    })
    .catch(error => console.error('Error loading data:', error));
});

function renderPersonalInfo(info) {
  // Hero Section
  const heroName = document.querySelector('.display-2.mg-bottom-12px');
  if (heroName) {
    const staticText = `I’m ${info.name}, a `;
    const roles = info.roles || [info.role]; // Fallback to single role if array not present

    // Start the infinite typewriter
    initInfiniteTypewriter(heroName, staticText, roles);
  }

  const heroDesc = document.querySelector('.inner-container._504px p');
  if (heroDesc) heroDesc.textContent = info.heroDescription;

  // About me preview
  const aboutDesc = document.querySelector('.hero-bg-image-right-container .flex-vertical:first-child p');
  if (aboutDesc) aboutDesc.textContent = info.aboutDescription;

  // My work preview
  const workDesc = document.querySelector('.hero-bg-image-right-container .flex-vertical:last-child p');
  if (workDesc) workDesc.textContent = info.workDescription;

  // Social Links (Hero)
  const socialContainer = document.querySelector('.social-media-grid-top');
  if (socialContainer) {
    socialContainer.innerHTML = info.socialLinks.map(link => `
      <a href="${link.url}" target="_blank" class="social-icon w-inline-block">
        <div class="social-icon-font">${link.icon}</div>
      </a>
    `).join('');
  }
}

// ... (keep other render functions)

function initInfiniteTypewriter(element, staticText, roles) {
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      // Deleting
      element.textContent = staticText + currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50; // Faster deleting
    } else {
      // Typing
      element.textContent = staticText + currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100; // Normal typing
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Finished typing current role
      isDeleting = true;
      typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting current role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; // Next role
      typeSpeed = 500; // Pause before typing next
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

function renderAbout(about) {
  const yearsExp = document.querySelector('.display-2.mg-right-12px');
  if (yearsExp) yearsExp.textContent = about.yearsExperience;

  const projectsCount = document.querySelectorAll('.display-2.mg-right-12px')[1];
  if (projectsCount) projectsCount.textContent = about.projectsCount;

  const aboutDesc = document.querySelector('.inner-container._540px p');
  if (aboutDesc) aboutDesc.textContent = about.description;

  const longDesc = document.querySelector('.inner-container._520px > p');
  if (longDesc) longDesc.textContent = about.longDescription;

  // Logos
  const logoContainer = document.querySelector('.logo-strip-right');
  if (logoContainer) {
    logoContainer.innerHTML = about.logos.map(logo => `
      <img src="${logo.src}" alt="${logo.alt}" />
    `).join('');
  }
}

function renderSkills(skills, sectionInfo) {
  if (sectionInfo) {
    const title = document.querySelector('.section.overflow-hidden .subtitle');
    if (title) title.innerHTML = `<span class="color-accent-1">/</span> ${sectionInfo.title}`;

    const heading = document.querySelector('.section.overflow-hidden .display-3');
    if (heading) heading.textContent = sectionInfo.heading;
  }
  const sliderMask = document.querySelector('.slider-mask.width-434px');
  if (sliderMask) {
    // Clear existing slides but keep structure if needed, or replace content
    // Webflow sliders are tricky to modify dynamically without breaking interactions.
    // A safer approach for Webflow sliders is to update the content of existing slides if the count matches,
    // or re-initialize the slider. For now, let's try to generate the HTML structure.

    // Since Webflow sliders rely on specific structure and initialization, 
    // replacing innerHTML might break the slider functionality unless we re-init.
    // However, for a simple "editable" request, we might just render them as a grid if the slider breaks,
    // OR we try to maintain the structure.

    // Let's try to construct the slides.
    sliderMask.innerHTML = skills.map(skill => `
      <div class="slide-item-mg w-slide">
        <div class="card skills">
          <img src="${skill.icon}" loading="eager" alt="${skill.name}" class="mg-bottom-24px" />
          <h3 class="display-4 mg-bottom-12px">${skill.name}</h3>
          <p class="paragraph-large mg-bottom-40px">${skill.description}</p>
          <div class="paragraph-underline"></div>
        </div>
      </div>
    `).join('');

    // We might need to trigger a redraw or re-init for Webflow slider
    if (window.Webflow && window.Webflow.require('slider')) {
      window.Webflow.require('slider').redraw();
      window.Webflow.require('slider').ready();
    }
  }
}

function renderProjects(projects, sectionInfo) {
  if (sectionInfo) {
    const title = document.querySelector('.grid-2-columns.title-and-cards .subtitle');
    if (title) title.innerHTML = `<span class="color-accent-1">/</span> ${sectionInfo.title}`;

    const heading = document.querySelector('.grid-2-columns.title-and-cards .display-3');
    if (heading) heading.textContent = sectionInfo.heading;
  }
  const projectsContainer = document.querySelector('.grid-2-columns.title-and-cards .w-dyn-items');
  // The original structure has a weird layout with nested divs for layout.
  // To simplify, we might need to target specific containers.
  // The HTML structure for projects is split into two columns in the original code:
  // Left column: Title + 1 project
  // Right column: 2 projects

  // For a truly dynamic list, we should probably restructure the HTML to be a single grid,
  // but to keep the design exact, we might need to distribute them.

  // Let's try to find the project cards and update them, or clear and rebuild.
  // Given the complexity of the grid layout in Webflow, let's try to inject into the existing structure.

  // Actually, the user wants to be able to ADD projects.
  // So we should probably make a single container for projects if possible, or handle the split.

  // For this implementation, let's assume we render them into a new grid or list.
  // But the original design has a specific layout.

  // Let's target the existing containers.
  // Container 1: Left column (under title)
  // Container 2: Right column

  // Let's simplify: We will render ALL projects into a simple grid if we can, 
  // or we try to replicate the split.

  // Let's try to find the container that holds the projects.
  // It seems to be `.grid-2-columns.title-and-cards`.

  // Let's just update the content of the existing cards for now if the count is small,
  // or append.

  // Better approach for "Editable":
  // Clear the hardcoded projects and render new ones.
  // We need a place to put them.

  // Let's look at the HTML again.
  // There is a `.w-dyn-items` in the left column and one in the right column.

  const leftList = document.querySelector('#w-node-d986b1c4-810f-08ae-61d9-bcbd56045c2e-cecd3d78 .w-dyn-items');
  const rightList = document.querySelector('#w-node-_6f34c543-cafb-5831-e05b-ad69d32267ce-cecd3d78 .w-dyn-items'); // This one actually has two lists in the original HTML?

  // To make it truly dynamic and simple, we might want to just use one container.
  // But let's try to distribute them: 1st to left, rest to right?

  if (leftList && rightList) {
    leftList.innerHTML = '';
    rightList.innerHTML = '';

    projects.forEach((project, index) => {
      const projectHTML = `
        <div role="listitem" class="w-dyn-item">
          <a href="${project.link}" class="card portfolio-project w-inline-block">
            <div class="badges-top-wrapper">
              ${project.tags.map(tag => `<div class="badge-primary small">${tag}</div>`).join('')}
            </div>
            <div class="portfolio-project-card-text-container">
              <div class="portfolio-project-logo-wrapper">
                <img src="${project.logo}" loading="eager" alt="${project.title}" />
              </div>
              <h2 class="display-5 mg-bottom-0">${project.title}</h2>
            </div>
            <img src="${project.image}" loading="eager" alt="${project.title}" class="portfolio-thumbnail-image" />
          </a>
        </div>
      `;

      if (index === 0) {
        leftList.innerHTML += projectHTML;
      } else {
        rightList.innerHTML += projectHTML;
      }
    });
  }
}

function renderTestimonials(testimonials, sectionInfo) {
  if (sectionInfo) {
    const title = document.querySelector('.section .subtitle'); // Might need more specific selector
    // Actually, let's use the ID or unique structure
    const container = document.querySelector('#w-node-a0f8fbdb-a432-11d1-2e17-ebabaa9f8d02-aa9f8d00');
    if (container) {
      const titleEl = container.querySelector('.subtitle');
      if (titleEl) titleEl.innerHTML = `<span class="color-accent-1">/</span> ${sectionInfo.title}`;
      const headingEl = container.querySelector('.display-3');
      if (headingEl) headingEl.textContent = sectionInfo.heading;
    }
  }
  const sliderMask = document.querySelector('.slider-wrapper.position-relative .w-slider-mask');
  if (sliderMask) {
    sliderMask.innerHTML = testimonials.map(t => `
      <div class="slide-item-mg w-slide">
        <div class="card testimonial">
          <img src="${t.image}" loading="eager" alt="${t.name}" class="testimonial-image-left" />
          <div class="testimonial-text-right">
            <img src="${t.logo}" loading="eager" alt="Company Logo" class="mg-bottom-40px mg-bottom-24px-mbl" />
            <p class="display-5 mg-bottom-56px mg-bottom-24px-mbl">${t.quote}</p>
            <div class="text-400 bold text-uppercase"><span class="color-accent-1">/</span> ${t.name}</div>
            <div class="text-300 text-uppercase mg-top-8px">${t.role}</div>
          </div>
        </div>
      </div>
    `).join('');

    if (window.Webflow && window.Webflow.require('slider')) {
      window.Webflow.require('slider').redraw();
      window.Webflow.require('slider').ready();
    }
  }
}

function renderArticles(articles, sectionInfo) {
  if (sectionInfo) {
    const container = document.querySelector('.sticky-top.static-mbl');
    if (container) {
      const titleEl = container.querySelector('.subtitle');
      if (titleEl) titleEl.innerHTML = `<span class="color-accent-1">/</span> ${sectionInfo.title}`;
      const headingEl = container.querySelector('.display-3');
      if (headingEl) headingEl.textContent = sectionInfo.heading;
    }
  }
  const articlesContainer = document.querySelector('.inner-container._576px');
  if (articlesContainer) {
    articlesContainer.innerHTML = articles.map(article => `
      <div class="sibling-opacity-item w-dyn-list">
        <div role="list" class="w-dyn-items">
          <div role="listitem" class="w-dyn-item">
            <a href="${article.link}" class="blog-post-link-wrapper w-inline-block">
              <div class="flex align-center color-neutral-400">
                <div class="text-200 medium text-uppercase">${article.date}</div>
                <div class="details-slash-divider">/</div>
                <div class="text-200 medium text-uppercase">${article.category}</div>
              </div>
              <h3 class="display-5 mg-bottom-0 mg-top-12px">${article.title}</h3>
            </a>
          </div>
        </div>
      </div>
      <div class="divider _64px bg-neutral-600"></div>
    `).join('');
    // Remove last divider
    if (articlesContainer.lastElementChild) {
      articlesContainer.lastElementChild.remove();
    }
  }
}

function renderContact(contact, personalInfo) {
  // ... (keep existing email/phone logic)
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.href = `mailto:${contact.email}`;
    emailLink.querySelector('.link-text').textContent = contact.email;
  }

  const phoneLink = document.querySelector('a[href^="tel:"]');
  if (phoneLink) {
    phoneLink.href = `tel:${contact.phone.replace(/\s/g, '')}`;
    phoneLink.querySelector('.link-text').textContent = contact.phone;
  }

  // Footer Name and Role
  const footerName = document.querySelector('.footer-top .display-5');
  if (footerName && personalInfo) footerName.textContent = personalInfo.name;

  const footerRole = document.querySelector('.footer-top .text-400.medium.color-neutral-500');
  if (footerRole && personalInfo && personalInfo.roles) footerRole.textContent = personalInfo.roles[0];

  // Update footer social links
  const footerSocial = document.querySelector('.footer-top .social-media-grid-top');
  if (footerSocial) {
    // Reuse the social links from personalInfo if available globally, or we need to pass it.
    // For now, let's assume we can access it or just leave it static if not in the JSON object passed to this function.
    // But we have it in data.personalInfo.
    // Let's update the renderContact signature or data structure.
  }
}


