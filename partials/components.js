/**
 * components.js
 * Fetches header.html and footer.html and injects them into
 * any page that contains <div id="site-header"> or <div id="site-footer">.
 *
 * After injection it re-runs feather.replace() so icons render correctly,
 * and wires up the mobile menu toggle.
 *
 * Usage in any page:
 *   <div id="site-header"></div>   ← place at top of <body>
 *   <div id="site-footer"></div>   ← place just before </body>
 *   <script src="components.js"></script>
 */

async function loadPartial(id, file) {
    const el = document.getElementById(id);
    if (!el) return;
    try {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Failed to load ${file}: ${res.status}`);
        el.innerHTML = await res.text();
    } catch (err) {
        console.error(err);
    }
}

function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navLinks = document.querySelector('.hidden.md\\:flex.space-x-18');
    if (!mobileMenuButton || !navLinks) return;

    function toggleMenu() {
        if (navLinks.classList.contains('hidden')) {
            navLinks.classList.remove('hidden');
            navLinks.classList.add(
                'flex', 'flex-col', 'absolute', 'top-16', 'left-0',
                'w-full', 'bg-slate-900', 'p-4', 'space-y-4',
                'border-t', 'border-slate-800'
            );
        } else {
            navLinks.classList.add('hidden');
            navLinks.classList.remove(
                'flex', 'flex-col', 'absolute', 'top-16', 'left-0',
                'w-full', 'bg-slate-900', 'p-4', 'space-y-4',
                'border-t', 'border-slate-800'
            );
        }
    }

    mobileMenuButton.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (!navLinks.classList.contains('hidden')) toggleMenu();
        });
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        loadPartial('site-header', '/partials/header.html'),
        loadPartial('site-footer', '/partials/footer.html'),
    ]);

    // Re-render Feather icons that were injected into the DOM
    if (typeof feather !== 'undefined') feather.replace();

    initMobileMenu();
});
