// Changelog data for the Projekt Viggen world
// Add new versions at the top of the array (newest first)

const projektViggenChangelog = [
    {
        version: "1.0.4",
        date: "February 3rd, 2023",
        type: "minor", // "release", "major", "minor", "patch", "hotfix"
        title: "",
        changes: [
            {category: "Added", text: "Swapped Viggen meshes."},
            {category: "Changed", text: "Adjusted loadout options."},
            {category: "Changed", text: "Improved particle."},
            {category: "Changed", text: "Swapped cloud effects."}
        ]
    },
    {
        version: "1.0.3",
        date: "February 3rd, 2023",
        type: "minor", // "release", "major", "minor", "patch", "hotfix"
        title: "",
        changes: [
            {category: "Added", text: "Added radio system."},
            {category: "Added", text: "Added engine exhaust effects."},
            {category: "Fixed", text: "Corrected typos and missing credits."}
        ]
    },
    {
        version: "1.0.2",
        date: "December 3rd, 2022",
        type: "patch", // "release", "major", "minor", "patch", "hotfix"
        title: "",
        changes: [
            {category: "Fixed", text: "Corrected typos and missing credits."}
        ]
    },
    {
        version: "1.0.1",
        date: "November 15th, 2022",
        type: "minor", // "release", "major", "minor", "patch", "hotfix"
        title: "",
        changes: [
            {category: "Added", text: "Added Hekky's Atmosphere Shader."},
            {category: "Added", text: "Added VRC Portal for cross-platform variant of the world."}
        ]
    },
    {
        version: "1.0.0",
        date: "October 28th, 2022",
        type: "release", // "release", "major", "minor", "patch", "hotfix"
        title: "Initial Release",
        changes: [{category: "Added", text: "Official Public PC & Quest/Android Release"}]
    }
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

    if (!projektViggenChangelog || projektViggenChangelog.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-sm italic">No changelog entries yet.</p>`;
        return;
    }

    container.innerHTML = projektViggenChangelog.map((entry, index) => {
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
