function worldPageTags(world) {
  return [
    world.unlisted && 'Unlisted',
    world.comingSoon && 'Coming Soon',
    isRecentlyUpdated(world.versionDate) && 'Recently Updated'
  ].filter(Boolean);
}

function worldPagePlatformIcon(platform) {
  if (platform === 'Windows') {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.75 4.5h16.5v11.25H3.75V4.5Z"></path><path d="M8.25 19.5h7.5M12 15.75v3.75"></path></svg>';
  }
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.75" y="2.75" width="10.5" height="18.5" rx="2"></rect><path d="M10 18.25h4"></path></svg>';
}

function worldPagePlatforms(level) {
  return getPlatformBadges(level).map((platform) => `
    <span class="world-platform ${platform.cssClass}${platform.active ? '' : ' is-unavailable'}">
      ${worldPagePlatformIcon(platform.label)}
      <span>${platform.label}</span>
    </span>
  `).join('');
}

function worldPageList(items) {
  if (!Array.isArray(items) || items.length === 0) return '';
  return `<ul class="world-story-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderWorldPage(worldId) {
  const world = getWorldById(worldId);
  const content = window.worldPageData;
  if (!world || !content) throw new Error(`No world page configuration found for ${worldId}`);

  const tags = worldPageTags(world);
  const page = document.getElementById('world-page');
  document.title = `VTail | ${world.sitetitle || world.title}`;
  page.innerHTML = `
    <section class="world-hero">
      <div class="world-hero-media" data-world-hero>
        ${content.heroVideo ? `<video class="world-hero-video" autoplay muted loop playsinline${content.heroPoster ? ` poster="${content.heroPoster}"` : ''}><source src="${content.heroVideo}" type="video/mp4" /></video>` : ''}
      </div>
      <div class="world-hero-overlay"></div>
      <div class="container world-hero-content">
        <div class="world-tags">${tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        <h1>${world.sitetitle || world.title}</h1>
        <p class="world-hero-tagline">${world.tagline || world.description}</p>
        <div class="world-hero-actions">
          ${world.vrcUrl ? `<a class="button button-primary" href="${world.vrcUrl}" target="_blank" rel="noreferrer">Visit in VRChat <span aria-hidden="true">↗</span></a>` : ''}
          <a class="button button-secondary" href="#world-overview">Explore details <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <a class="world-scroll-cue" href="#world-overview" aria-label="Scroll to world details">Scroll to explore <span>↓</span></a>
    </section>

    <section id="world-overview" class="world-facts-section">
      <div class="container world-facts">
        <div><span class="world-fact-label">Released</span><strong>${world.releaseDate || '—'}</strong></div>
        <div><span class="world-fact-label">Current build</span><strong>v${world.version || '—'}</strong><small>${world.versionDate || 'Date TBA'}</small></div>
        <div><span class="world-fact-label">Compatibility</span><div class="world-platforms">${worldPagePlatforms(world.platformSupport)}</div></div>
        <div><span class="world-fact-label">World visits</span><strong>${Number(world.visits || 0).toLocaleString()}</strong><small>${world.visitsDate || ''}</small></div>
      </div>
    </section>

    <section class="world-about section">
      <div class="container">
        <div class="section-heading narrow">
          <h2>About This World</h2>
        </div>
        <div class="world-story">
          ${content.about.map((block) => `
            <article class="world-story-block ${block.align}">
              <div class="world-story-copy"><p>${block.text}</p>${worldPageList(block.list)}</div>
              <img src="${block.image}" alt="${block.imageAlt}" />
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    ${world.vrcUrl ? `
      <div class="world-about-cta container">
        <a class="button button-primary" href="${world.vrcUrl}" target="_blank" rel="noreferrer">Visit in VRChat <span aria-hidden="true">↗</span></a>
      </div>
    ` : ''}

    <section class="world-aircraft-section dark-section section">
      <div class="container">
        <div class="section-heading narrow">
          <h2>Vehicle Lineup</h2>
        </div>
        <div class="world-aircraft-grid">
          ${(world.aircraft || []).map((aircraft) => `<article><img src="${aircraft.image}" alt="${aircraft.name}" /><h3>${aircraft.name}</h3></article>`).join('')}
        </div>
      </div>
    </section>
  `;

  const hero = page.querySelector('[data-world-hero]');
  if (!content.heroVideo) {
    (content.heroImages || []).forEach((image, index) => {
      hero.insertAdjacentHTML('beforeend', `<img src="${image}" alt="${world.sitetitle || world.title} scene ${index + 1}" class="${index === 0 ? 'is-active' : ''}" />`);
    });
  }
  let activeImage = 0;
  if (!content.heroVideo && hero.querySelectorAll('img').length > 1) {
    window.setInterval(() => {
      const images = hero.querySelectorAll('img');
      images[activeImage].classList.remove('is-active');
      activeImage = (activeImage + 1) % images.length;
      images[activeImage].classList.add('is-active');
    }, 5500);
  }
}
