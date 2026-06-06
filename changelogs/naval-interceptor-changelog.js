// naval-interceptor-changelog.js
// Changelog data for the Naval Interceptor world
// Add new versions at the top of the array (newest first)

const navalInterceptorChangelog = [
    {
        version: "1.4.0",
        date: "June 6th, 2026",
        type: "major", // "release", "major", "minor", "patch", "hotfix"
        title: "A Change of Scenery",
        changes:
        [
            {category: "Added", text: "Quest support reimplementated."},
            {category: "Added", text: "Completely new, expansive terrain."},
            {category: "Added", text: "SH-3 Sea King helicopter added."},
            {category: "Added", text: "Vessels added surrounding the carrier."},
            {category: "Added", text: "F-14A RIO seat now has several instruments including a simplified AWG-9 radar."},
            {category: "Added", text: "F-14A Pilot's HSD display now mirrors AWG-9 radar's output."},
            {category: "Added", text: "Added settings toggle for night vision effect."},
            {category: "Changed", text: "Updated credits list."},
            {category: "Changed", text: "Compressed textures and meshes to reduce world size."},
            {category: "Changed", text: "Overhauled F-14 and MiG-23MLA meshes to improve performance and reduce file size."},
            {category: "Changed", text: "F-14A no longer has landing gear lights around the carrier."},
            {category: "Changed", text: "F-14A and MiG-23MLA now have lower stall speeds."},
            {category: "Fixed", text: "Fixed LRLLS being visible during the daytime on initial load."},
            {category: "Fixed", text: "Fixed dial function text not being set to night mode on initial load."},
            {category: "Fixed", text: "Fixed RWR display not showing units."},
            {category: "Fixed", text: "Fixed respawn panel not hiding when photo mode is enabled."},
            {category: "Fixed", text: "Fixed MiG-23MLA engine smoke having collision issues with the ground."},
            {category: "Fixed", text: "Fixed MiG-23MLA's Sinheim Museum livery failing to load appropriate texture."},
            {category: "Fixed", text: "Fixed MiG-23MLA and SA-15's not appearing on radars or RWRs."},
            {category: "Fixed", text: "Fixed MiG-23MLA's fan blade rattle noise not switching from exterior/interior."},
            {category: "Fixed", text: "Fixed MiG-23MLA wing sweep enabling incorrectly in VR."},
            {category: "Fixed", text: "Fixed MiG-23MLA livery descriptions."},
            {category: "Removed", text: "Nighttime cockpit lights."}
        ]
    },
    {
        version: "1.3.1",
        date: "December 30th, 2025",
        type: "hotfix", // "release", "major", "minor", "patch", "hotfix"
        title: "Enemy Threat Hotfix",
        changes: [
            {category: "Fixed", text: "Resolved SAM sites not reacting to aircraft."},
            {category: "Fixed", text: "Fixed catapults having a tendency to not connect to aircraft."},
            {category: "Fixed", text: "Fixed typo in livery changer credits."},
            {category: "Changed", text: "Updated credits list."}
        ]
    },
    {
        version: "1.3.0",
        date: "December 23rd, 2025",
        type: "major", // "release", "major", "minor", "patch", "hotfix"
        title: "Enemy Threat",
        changes: [
            {category: "Added", text: "MiG-23MLA added to enemy airfield."},
            {category: "Added", text: "Added a new livery control / respawn panel system."},
            {category: "Added", text: "Added several target boats East of the carrier."},
            {category: "Changed", text: "Updated SaccFlight to version 1.7."},
            {category: "Changed", text: "Overhauled / Optimized F-14A mesh."},
            {category: "Changed", text: "Overhauled carrier mesh (Now CVN-75)."},
            {category: "Changed", text: "Overhauled wheel system."},
            {category: "Changed", text: "Overhauled wing sweep code."},
            {category: "Changed", text: "F-14A wings start swept on spawn, automatically unfolds."},
            {category: "Changed", text: "Replaced SAM code / mesh with an updated version."},
            {category: "Changed", text: "Updated cloud and water visuals."}
        ]
    },
    {
        version: "1.2.1",
        date: "October 12th, 2024",
        type: "hotfix", // "release", "major", "minor", "patch", "hotfix"
        title: "The SAM Hotfix",
        changes: [
            {category: "Added", text: "Desktop camera next to spectator screens added."},
            {category: "Changed", text: "Reduced excess world data."},
            {category: "Fixed", text: "Fixed chaff script crashing."},
            {category: "Fixed", text: "Fixed LSO camera being misplaced."},
            {category: "Fixed", text: "Enabled SAM sites that should have been on along the mainland."}
        ]
    },
    {
        version: "1.2.0",
        date: "October 6th, 2024",
        type: "major", // "release", "major", "minor", "patch", "hotfix"
        title: "The SAM Update",
        changes: [
            {category: "Added", text: "Added start splash screen."},
            {category: "Added", text: "Introduced SAM NPCs."},
            {category: "Added", text: "RWR display added."},
            {category: "Added", text: "Night vision added."},
            {category: "Added", text: "Teleport to airfield added."},
            {category: "Added", text: "Additional furniture in the ready room added."},
            {category: "Added", text: "3 additional F-14A's added to the airfield."},
            {category: "Added", text: "\"Mainland\" terrain added out of bounds."},
            {category: "Changed", text: "Horizon visuals improved."},
            {category: "Changed", text: "Optimized wing rip code."},
            {category: "Changed", text: "SaccFlight settings menu cleaned up."},
            {category: "Changed", text: "Stall/G shake and audio adjusted."},
            {category: "Changed", text: "Auto-catapult can now be toggled on/off."},
            {category: "Changed", text: "Credits list updated."},
            {category: "Changed", text: "F-14A model optimized."},
            {category: "Changed", text: "Settings panel completed."},
            {category: "Fixed", text: "Aggressor airfield hangars now have collision."},
            {category: "Fixed", text: "Auto-catapult can now be overriden by manual control."},
            {category: "Removed", text: "Quest support removed, pushed to a seperate build of the world."}
        ]
    },
    {
        version: "1.0.1",
        date: "January 6th, 2024",
        type: "hotfix", // "release", "major", "minor", "patch", "hotfix"
        title: "Bug Fixes & Tweaks",
        changes: [
            {category: "Added", text: "Added auto-catapult functionality."},
            {category: "Added", text: "Planes now take damage in water over time."},
            {category: "Added", text: "Added a mirror in the ready room (reluctantly)."},
            {category: "Changed", text: "Repositioned sun control (Left Outside)."},
            {category: "Changed", text: "Repositioned spectactor screen (Prifly room)."},
            {category: "Changed", text: "Adjusted door teleports."},
            {category: "Changed", text: "LLRS sprite size reduced."},
            {category: "Changed", text: "Runway sprite size reduced."},
            {category: "Changed", text: "Reduced terrain LOD range."},
            {category: "Fixed", text: "Reduced chances of respawning active planes."},
            {category: "Fixed", text: "Interior audio fixed on startup."},
            {category: "Fixed", text: "Water trigger improved."},
            {category: "Fixed", text: "LSO equipment no longer has colliders."},
            {category: "Fixed", text: "Planes no longer collide with ship antennae."},
            {category: "Fixed", text: "Fixed desktop throttle issue."},
            {category: "Fixed", text: "Car script no longer crashes."},
            {category: "Fixed", text: "Fixed digital speed conversion."},
            {category: "Fixed", text: "Gear no longer clips given certain scenarios."},
            {category: "Fixed", text: "Splash particles fixed."},
            {category: "Fixed", text: "Sidewinder animation error fixed."},
            {category: "Fixed", text: "Quest: Fixed gauge texture emission."},
            {category: "Fixed", text: "Quest: Digital readouts now off by default."},
            {category: "Fixed", text: "Quest: Sprites added for catapult lineup."}
        ]
    },
    {
        version: "1.0.0",
        date: "December 23th, 2023",
        type: "release", // "release", "major", "minor", "patch", "hotfix"
        title: "Initial Release",
        changes: [{category: "Added", text: "Official Public PC & Quest/Android Release"}]
    }
    // Add more versions below as you update. Example:
    /*
    {
        version: "1.1.0",
        date: "April 10, 2026",
        type: "minor",
        title: "The Weather Update",
        changes: [
            { category: "Added", text: "Dynamic weather system with fog and rain." },
            { category: "Changed", text: "Improved carrier deck textures." },
            { category: "Fixed", text: "Spawn point collision issues near the island." }
        ]
    }
    */
];

// Valid change categories and their colors
const categoryColors = {
    "Added":   { bg: "rgba(34,197,94,0.15)",  text: "#86efac", border: "rgba(34,197,94,0.4)"  },
    "Changed": { bg: "rgba(59,130,246,0.15)", text: "#93c5fd", border: "rgba(59,130,246,0.4)" },
    "Fixed":   { bg: "rgba(234,179,8,0.15)",  text: "#fde047", border: "rgba(234,179,8,0.4)"  },
    "Removed": { bg: "rgba(239,68,68,0.15)",  text: "#fca5a5", border: "rgba(239,68,68,0.4)"  },
    "Security":{ bg: "rgba(168,85,247,0.15)", text: "#d8b4fe", border: "rgba(168,85,247,0.4)" }
};

// Version type badge colors
const versionTypeBadges = {
    "release": { bg: "rgba(59,130,246,0.2)",  text: "#93c5fd", label: "Release"  },
    "major":   { bg: "rgba(99,102,241,0.2)",  text: "#a5b4fc", label: "Major"    },
    "minor":   { bg: "rgba(34,197,94,0.2)",   text: "#86efac", label: "Minor"    },
    "patch":   { bg: "rgba(234,179,8,0.2)",   text: "#fde047", label: "Patch"    },
    "hotfix":  { bg: "rgba(239,68,68,0.2)",   text: "#fca5a5", label: "Hotfix"   }
};

// Renders changelog into a given container element ID
function renderChangelog(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!navalInterceptorChangelog || navalInterceptorChangelog.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-sm italic">No changelog entries yet.</p>`;
        return;
    }

    container.innerHTML = navalInterceptorChangelog.map((entry, index) => {
        const badge = versionTypeBadges[entry.type] || versionTypeBadges["patch"];
        const isFirst = index === 0;

        const changesHtml = entry.changes.map(change => {
            const color = categoryColors[change.category] || categoryColors["Changed"];
            return `
                <li class="flex items-start gap-3 py-1">
                    <span class="changelog-cat-badge flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded" 
                          style="background:${color.bg}; color:${color.text}; border:1px solid ${color.border};">
                        ${change.category}
                    </span>
                    <span class="text-gray-300 text-sm leading-relaxed">${change.text}</span>
                </li>
            `;
        }).join('');

        return `
            <div class="changelog-entry border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 ${isFirst ? 'border-blue-500/40' : ''}">
                <button class="changelog-toggle w-full flex items-center justify-between px-5 py-4 bg-slate-800/60 hover:bg-slate-800 transition-colors duration-200 text-left"
                        aria-expanded="${isFirst ? 'true' : 'false'}"
                        onclick="toggleChangelog(this)">
                    <div class="flex items-center gap-3 flex-wrap">
                        <span class="text-lg font-bold text-white font-mono">v${entry.version}</span>
                        <span class="text-xs font-semibold px-2 py-0.5 rounded" 
                              style="background:${badge.bg}; color:${badge.text};">
                            ${badge.label}
                        </span>
                        ${entry.title ? `<span class="text-gray-300 text-sm hidden sm:inline">${entry.title}</span>` : ''}
                    </div>
                    <div class="flex items-center gap-3 flex-shrink-0">
                        <span class="text-gray-500 text-xs">${entry.date}</span>
                        <svg class="changelog-chevron w-4 h-4 text-gray-400 transition-transform duration-300 ${isFirst ? 'rotate-180' : ''}" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </button>
                <div class="changelog-body overflow-hidden transition-all duration-300 ${isFirst ? '' : 'max-h-0'}" 
                     style="${isFirst ? '' : 'max-height: 0;'}">
                    <div class="px-5 py-4 border-t border-slate-700/50">
                        ${entry.title ? `<p class="text-gray-400 text-sm mb-3 sm:hidden">${entry.title}</p>` : ''}
                        <ul class="space-y-2">
                            ${changesHtml}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleChangelog(btn) {
    const body = btn.nextElementSibling;
    const chevron = btn.querySelector('.changelog-chevron');
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
        body.style.maxHeight = '0';
        btn.setAttribute('aria-expanded', 'false');
        chevron.classList.remove('rotate-180');
    } else {
        body.style.maxHeight = body.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
        chevron.classList.add('rotate-180');
    }
}
