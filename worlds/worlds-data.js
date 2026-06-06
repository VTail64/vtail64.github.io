// worlds-data.js - Centralized world data storage

const worldsData = [
    /*{
        id: "operation-hammerhead",
        title: "Operation Hammerhead (Working Title)",
        description: "In an alternate timeline, Japan rebuilds it's military force, and strikes one more. You and your team must attack the invading forces to take back Midway Atoll.",
        image: "static/worlds/fleetdefense/world_fd.jpg",
        version: "0.1.0",
        releaseDate: "Coming Soon",     // Placeholder until release
        versionDate: "XX/XX/2026",     // Date this specific version was released
        updateDate: "XX/XX/2026",
        platformSupport: 2,            // 0 = PC only | 1 = PC + Standalone VR | 2 = PC + Standalone VR + Mobile
        link: "/worlds/operation-hammerhead.html",
        vrcUrl: "",
        youtubeUrl: "",
        devBlogPage: "world-operation-hammerhead-devblog.html",
        visits: 0,
        changelogFile: "/changelogs/operation-hammerhead-changelog.js",
        featured: true,
        unlisted: false,
        comingSoon: true,
        sitetitle: "Operation Hammerhead",
        tagline: "Reclaim an occupied island from invading forces in this team-based PvE world.",
        aircraft: [
            { name: "F-14A 'Tomcat'", image: "/static/aircraft/F-14A.png" }
        ]
    },*/
    {
        id: "flight-week",
        title: "Flight Week - Test Flight",
        sitetitle: "Flight Week - Test Flight",
        description: "Working with Negentropic, in collaboration with Boeing, L3Harris, and the Australian Defense Ministry, this STEM experience teaches users about a test pilot's role in acceptance flights for F/A-18F Super Hornets.",
        image: "/static/worlds/flightweek/world_fw.jpg",
        version: "1.0.0",
        releaseDate: "09/12/2025",
        versionDate: "09/12/2025",
        platformSupport: 1,
        link: "/worlds/flight-week.html",
        vrcUrl: "https://vrchat.com/home/world/wrld_bbb8669f-5f58-4146-a6cd-b58ab3e6fdb0",
        youtubeUrl: "",
        devBlogPage: "",
        visits: 50365,
        visitsDate: "06/06/2026",
        changelogFile: "",
        featured: true,
        unlisted: false,
        comingSoon: false,
        tagline: "Experience an acceptance flight in an F/A-18F Super Hornet",
        aircraft: [
            { name: "F/A-18F 'Super Hornet'", image: "/static/aircraft/FA-18F.png" }
        ]
    },
    {
        id: "naval-interceptor",
        title: "F-14A Tomcat - Naval Interceptor -",
        sitetitle: "F-14A: Naval Interceptor",
        description: "Fly the legendary F-14A Tomcat from a carrier, and fly around a series of small islands. Dogfighting against MiG-23 MLA's, evading SAM sites.",
        image: "/static/worlds/navalinterceptor/world_NavalInterceptor.jpg",
        version: "1.4.0",
        releaseDate: "12/23/2023",
        versionDate: "06/06/2026",
        platformSupport: 1,
        link: "/worlds/naval-interceptor.html",
        vrcUrl: "https://vrchat.com/home/world/wrld_6d153aa3-3526-4a9c-8b08-455cc8e8a291",
        youtubeUrl: "https://www.youtube.com/watch?v=srVACDmkfkA",
        //devBlogPage: "world-naval-interceptor-devblog.html",
        visits: 302097,
        visitsDate: "06/06/2026 (PC and Cross-Platform Combined)",
        changelogFile: "/changelogs/naval-interceptor-changelog.js",
        featured: true,
        unlisted: false,
        comingSoon: false,
        sitetitle: "F-14A: Naval Interceptor",
        tagline: "Take to the skies in the legendary F-14A Tomcat",
        aircraft: [
            { name: "F-14A 'Tomcat'", image: "/static/aircraft/F-14A.png" },
            { name: "MiG-23MLA 'Flogger'", image: "/static/aircraft/MiG-23MLA.png" },
            { name: "SH-3 'Sea King'", image: "/static/aircraft/SH-3.png" }
        ]
    },
    {
        id: "black-aces-sept-2023",
        title: "Black Aces: September Showcase 2023",
        sitetitle: "Black Aces: September Showcase 2023",
        description: "Concluding the 2023 season of the Black Aces' month long event, this world features the first public appearance of my then in development F-14A, alongside a surprise addition of the MiG-23 MLA.",
        image: "/static/worlds/ss23/world_ss2023.jpg",
        version: "1.0.0",
        releaseDate: "09/30/2023",
        versionDate: "09/30/2023",
        platformSupport: 0,
        link: "/worlds/black-aces-sept-2023.html",
        vrcUrl: "",
        youtubeUrl: "",
        devBlogPage: "",
        visits: 307,
        visitsDate: "06/06/2026",
        changelogFile: "",
        featured: false,
        unlisted: true,
        comingSoon: false,
        tagline: "Revealing the F-14A Tomcat and MiG-23MLA Flogger to the public for the first time",
        aircraft: [
            { name: "F-14A 'Tomcat'", image: "/static/aircraft/F-14A.png" },
            { name: "MiG-23MLA 'Flogger'", image: "/static/aircraft/MiG-23MLA.png" }
        ]
    },
    {
        id: "black-aces-may-2023",
        title: "Black Aces: 2023 Viggen 1v1 Tournament",
        sitetitle: "Black Aces: 2023 Viggen 1v1 Tournament",
        description: "The first time my work was featured in an competitive environment, this world features the Saab Viggen set up for 1v1 tournaments.",
        image: "/static/worlds/ba23/world_ba23.jpg",
        version: "1.1.0",
        releaseDate: "05/20/2023",
        versionDate: "05/27/2023",
        platformSupport: 1,
        link: "/worlds/black-aces-may-2023.html",
        vrcUrl: "",
        youtubeUrl: "",
        devBlogPage: "",
        visits: 1487,
        visitsDate: "06/06/2026 (Qualifiers and Finals Combined)",
        changelogFile: "/changelogs/black-aces-may-2023-changelog.js",
        featured: true,
        unlisted: true,
        comingSoon: false,
        tagline: "",
        aircraft: [
            { name: "AJS-37 'Viggen'", image: "/static/aircraft/AJS-37.png" }
        ]
    },
    {
        id: "projekt-viggen",
        title: "Projekt Viggen - Swedish Flight World",
        sitetitle: "Projekt Viggen",
        description: "Fly the Saab Viggen and Draken, and drive cars in a 1,600 square kilometer flight world. Features large dense forests, 200+ km of roads, enhanced audio and visuals.",
        image: "/static/worlds/projektviggen/world_projektviggen.jpg",
        version: "1.3.0",
        releaseDate: "03/18/2023",
        versionDate: "08/04/2023",
        platformSupport: 0,
        link: "/worlds/projekt-viggen.html",
        vrcUrl: "https://vrchat.com/home/world/wrld_91c304fd-3fb6-4169-85b9-1c6ad4b471e5",
        youtubeUrl: "",
        devBlogPage: "",
        visits: 197898,
        visitsDate: "06/06/2026 (PC and Cross-Platform Combined)",
        changelogFile: "/changelogs/projekt-viggen-changelog.js",
        featured: true,
        unlisted: false,
        comingSoon: false,
        tagline: "Fly and drive Saab vehicles in this Swedish-themed flight world",
        aircraft: [
            { name: "AJS-37 'Viggen'", image: "/static/aircraft/AJS-37.png" },
            { name: "J-35D 'Draken'", image: "/static/aircraft/J-35D.png" },
            { name: "Saab 900 Turbo", image: "/static/aircraft/Saab-900-Turbo.png" },
            { name: "Saab 9-3 'Aero'", image: "/static/aircraft/Saab-2004-Viggen.png" }
        ]
    },
    {
        id: "black-aces-sept-2022",
        title: "Black Aces: September Showcase 2022",
        sitetitle: "Black Aces: September Showcase 2022",
        description: "Starting off the Black Aces' month long event, this world features the first public appearance of my then in development Saab Viggen, alongside a surprise addition of the Saab Draken.",
        image: "/static/worlds/ss22/world_ss2022.jpg",
        version: "1.0.0",
        releaseDate: "09/03/2022",
        versionDate: "09/03/2022",
        platformSupport: 1,
        link: "/worlds/black-aces-sept-2022.html",
        vrcUrl: "",
        youtubeUrl: "",
        devBlogPage: "",
        visits: 234,
        visitsDate: "06/06/2026",
        changelogFile: "",
        featured: false,
        unlisted: true,
        comingSoon: false,
        tagline: "",
        aircraft: [
            { name: "AJS-37 'Viggen'", image: "/static/aircraft/AJS-37.png" },
            { name: "AJS-35 'Draken'", image: "/static/aircraft/J-35D.png" }
        ]
    },
    {
        id: "black-aces-march-2022",
        title: "Black Aces: March 2022 Showcase",
        sitetitle: "Black Aces: March 2022 Showcase",
        description: "Collaborating with RaptorItasha and Nonn, this showcase introduced several Eastern aircraft such as the Su-33, VVFA-14, and the legendary An-225 Mriya.",
        image: "/static/worlds/sw22/world_sw2022.jpg",
        version: "1.0.0",
        releaseDate: "03/19/2022",
        versionDate: "03/19/2022",
        platformSupport: 1,
        link: "/worlds/black-aces-march-2022.html",
        vrcUrl: "",
        youtubeUrl: "",
        devBlogPage: "",
        visits: 267,
        visitsDate: "06/06/2026",
        changelogFile: "",
        featured: false,
        unlisted: true,
        comingSoon: false,
        tagline: "",
        aircraft: [
            { name: "Su-33 'Flanker'", image: "/static/aircraft/Su-33.png" },
            { name: "VVA-14", image: "/static/aircraft/VVA-14.png" },
            { name: "Yak-28B", image: "/static/aircraft/Yak-28B.png" }
        ]
    },
    {
        id: "crossroads-island",
        title: "Crossroads Island",
        sitetitle: "Crossroads Island",
        description: "A Russian island featuring an airbase. Features the Su-33, Ka-22, and the VVFA-14 to fly.",
        image: "/static/worlds/crossroads/world_crossroads.jpg",
        version: "1.2.0",
        releaseDate: "03/25/2022",
        versionDate: "07/17/2023",
        platformSupport: 0,
        link: "/worlds/crossroads-island.html",
        vrcUrl: "",
        youtubeUrl: "",
        devBlogPage: "",
        visits: 114577,
        visitsDate: "06/06/2026",
        changelogFile: "/changelogs/crossroads-island-changelog.js",
        featured: true,
        unlisted: false,
        comingSoon: false,
        tagline: "",
        aircraft: [
            { name: "Su-33 'Flanker'", image: "/static/aircraft/Su-33.png" },
            { name: "VVA-14", image: "/static/aircraft/VVA-14.png" },
            { name: "Ka-22", image: "/static/aircraft/Ka-22.png" },
            { name: "Yak-28B", image: "/static/aircraft/Yak-28B.png" }
        ]
    },
    {
        id: "f16xl-nevada",
        title: "F-16XL Nevada Air Base",
        sitetitle: "F-16XL Nevada Air Base",
        description: "A military air base set in the Nevada desert. Features the F-16XL, H-21, and an XB-70 Valkyrie.",
        image: "/static/worlds/nevada/world_xl.jpg",
        version: "1.1.0",
        releaseDate: "12/13/2021",
        versionDate: "01/29/2022",
        platformSupport: 1,
        link: "/worlds/f16xl-nevada.html",
        vrcUrl: "",
        youtubeUrl: "",
        devBlogPage: "",
        visits: 54290,
        visitsDate: "06/06/2026",
        changelogFile: "/changelogs/f16xl-nevada-changelog.js",
        featured: true,
        unlisted: true,
        comingSoon: false,
        tagline: "",
        aircraft: [
            { name: "F-16XL", image: "/static/aircraft/F-16XL.png" },
            { name: "H-21", image: "/static/aircraft/H-21.png" },
            { name: "XB-70 Valkyrie", image: "/static/aircraft/XB-70.png" }
        ]
    },
    {
        id: "aviation-testing-range",
        title: "Aviation Testing Range",
        sitetitle: "Aviation Testing Range",
        description: "This world was the first world I began to make aircraft in, serving as a testing ground as I learned the SaccFlight code with no prior experience or help.",
        image: "/static/worlds/testrange/world_vatr.jpg",
        version: "0.4.3",
        releaseDate: "03/19/2021",
        versionDate: "04/18/2021",
        platformSupport: 0,
        link: "/worlds/aviation-testing-range.html",
        vrcUrl: "",
        youtubeUrl: "",
        devBlogPage: "",
        visits: 104,
        visitsDate: "06/06/2026",
        changelogFile: "",
        featured: false,
        unlisted: true,
        comingSoon: false,
        tagline: "",
        aircraft: [
        ]
    }
];

// Utility function to check if a world was recently updated (within 30 days)
function isRecentlyUpdated(updateDate) {
    if (!updateDate) return false;
    const oneMonthInMs = 30 * 24 * 60 * 60 * 1000;
    const now = new Date();
    const update = new Date(updateDate);
    return (now - update) <= oneMonthInMs;
}

// Function to generate HTML for a single world card
// hideMedium: when true, the 3rd card (index 2) is hidden on md screens (2-col layout)
function generateWorldCard(world, index = 0, hideMedium = false) {
    const recentlyUpdatedBadge = isRecentlyUpdated(world.versionDate) 
        ? `<div class="absolute bottom-4 left-4 recently-updated-badge">
               <span class="bg-blue-600 text-xs px-2 py-1 rounded">Recently Updated</span>
           </div>`
        : '';

    const unListedBadge = world.unlisted 
        ? `<div class="absolute bottom-4 left-4 unlisted-badge">
               <span class="bg-gray-600 text-xs px-2 py-1 rounded">Unlisted</span>
           </div>`
        : '';
    
    const comingSoonOverlay = world.comingSoon 
        ? `<div class="absolute inset-0 flex items-center justify-center">
               <span class="text-2xl font-bold text-gray-400">Coming Soon</span>
           </div>`
        : '';
    
    const imageOpacity = world.comingSoon ? 'opacity-50' : '';
    const linkDisabled = !world.link || world.link === '#' ? 'text-gray-500 cursor-default' : 'text-blue-400 hover:text-blue-300';
    //const mediumHideClass = (hideMedium && index === 2) ? ` md:absolute md:h-0 md:overflow-hidden md:opacity-0 md:pointer-events-none lg:static lg:h-auto lg:overflow-visible lg:opacity-100 lg:pointer-events-auto ` : '';
    const mediumHideClass = (hideMedium && index === 2) ? '' : '';
    return `
        <div class="world-card bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 transition duration-300 flex flex-col h-full ${mediumHideClass}" 
             data-aos="fade-up" 
             data-aos-delay="${100 + (index * 50)}" 
             data-update-date="${world.versionDate || ''}">
            <div class="relative overflow-hidden h-60 flex-shrink-0">
                <img src="${world.image}" alt="${world.title}" class="w-full h-full object-cover ${imageOpacity}">
                <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                ${recentlyUpdatedBadge}
                ${unListedBadge}
                ${comingSoonOverlay}
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-2">${world.title}</h3>
                <p class="text-gray-400 mb-4 flex-grow">${world.description}</p>
                <div class="flex justify-between items-center pt-4 border-t border-slate-700 mt-auto">
                    <span class="text-sm text-blue-400">Version ${world.version || ''} (${world.versionDate})</span>
                    <a href="${world.link || '#'}" class="${linkDisabled} flex items-center flex-shrink-0 ml-4">
                        View More <i data-feather="arrow-right" class="w-4 h-4 ml-1"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to load featured worlds
function loadFeaturedWorlds(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const featuredWorlds = worldsData.filter(world => world.featured);
    container.innerHTML = featuredWorlds.map((world, index) => generateWorldCard(world, index, true)).join('');
    
    if (typeof feather !== 'undefined') feather.replace();
    if (typeof AOS !== 'undefined') AOS.refresh();
}

// Function to load all worlds
function loadAllWorlds(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = worldsData.map((world, index) => generateWorldCard(world, index, false)).join('');
    
    if (typeof feather !== 'undefined') feather.replace();
    if (typeof AOS !== 'undefined') AOS.refresh();
}

// ─────────────────────────────────────────────
//  Platform support helpers
//
//  platformSupport integer meanings:
//    0 = PC only
//    1 = PC + Standalone VR (e.g. Meta Quest)
//    2 = PC + Standalone VR + Mobile (iOS / Android)
//
//  Support is cumulative — Standalone implies PC,
//  Mobile implies Standalone and PC.
// ─────────────────────────────────────────────

// Returns world data by id
function getWorldById(worldId) {
    return worldsData.find(w => w.id === worldId) || null;
}

// Returns array of platform badge descriptor objects for a given support level.
// Each: { label, active, cssClass, featherIcon }
function getPlatformBadges(platformSupport) {
    return [
        {
            label: "Windows",
            active: true,
            cssClass: "platform-pc",
            featherIcon: "monitor"
        },
        {
            label: "Android",
            active: platformSupport >= 1,
            cssClass: platformSupport >= 1 ? "platform-standalone" : "platform-unavailable",
            featherIcon: "smartphone"
        },
        {
            label: "iOS",
            active: platformSupport >= 2,
            cssClass: platformSupport >= 2 ? "platform-mobile" : "platform-unavailable",
            featherIcon: "smartphone"
        }
    ];
}

// Returns a short human-readable summary string for a support level
function getPlatformSummary(platformSupport) {
    switch (platformSupport) {
        case 0:  return "PC Only";
        case 1:  return "PC & Standalone VR";
        case 2:  return "PC, Standalone VR & Mobile";
        default: return "PC Only";
    }
}

/*
{
        id: "museum",
        title: "VTail Aeronautics Aviation Museum",
        description: "A museum world showcasing the various aircraft I have created, while also providing a place for players to learn about the history and development of these aircraft.",
        image: "static/worlds/museum/world_museum.jpg",
        version: "1.0.0",
        releaseDate: "XX/XX/2026",
        updateDate: "2026-12-31",
        link: "world-museum.html",
        featured: true,
        unlisted: false,
        comingSoon: true
    },
    {
        id: "nevada2026",
        title: "Nevada Air Base 2.0",
        description: "A reimagined version of the original Nevada Air Base, featuring overhauled terrain, enhanced visuals, better aircraft handling, and new aircraft to complement the original world's lineup.",
        image: "static/worlds/nevada2026/world_df.jpg",
        version: "1.0.0",
        releaseDate: "XX/XX/2026",
        updateDate: "2026-12-31",
        link: "world-nevada2026.html",
        featured: true,
        unlisted: false,
        comingSoon: true
    },
    {
        id: "dogfights",
        title: "Dogfight! Air Combat World",
        description: "A public dogfighting world that features a variety of my aircraft, set up for players to easily jump in and dogfight against eachother, without the need for dedicated event staff.",
        image: "static/worlds/dogfights/world_df.jpg",
        version: "1.0.0",
        releaseDate: "XX/XX/2026",
        updateDate: "2026-12-31",
        link: "world-dogfights.html",
        featured: true,
        unlisted: false,
        comingSoon: true
    },
    {
        id: "dogfight-central-f14-1v1",
        title: "Dogfight Central: F-14A 1v1 Tournament 2026",
        description: "A tournament world for the Dogfight Central community, featuring the F-14A Tomcat set up in a tournament environment.",
        image: "static/worlds/dogfightcentral-f14/world_dc.jpg",
        version: "1.0.0",
        releaseDate: "XX/XX/2026",
        updateDate: "2026-12-31",
        link: "world-dogfight-central-f14-1v1.html",
        featured: false,
        unlisted: false,
        comingSoon: true
    },
    {
        id: "midway-freeflight",
        title: "Midway Free Flight",
        description: "A free roam flight world centered around Midway Atoll, featuring several already existing aircraft such as the F-14A Tomcat and SH-3 Sea King, alongside some extra additions.",
        image: "static/worlds/midwayfreeflight/world_mf.jpg",
        version: "1.0.0",
        releaseDate: "XX/XX/2026",
        updateDate: "2026-12-31",
        link: "world-midway-freeflight.html",
        featured: false,
        unlisted: false,
        comingSoon: true
    },
*/