// gallery-data.js - Centralized gallery data storage

const galleryData = [
    {
        id: "photo-1",
        src: "static/me.png",
        fullSrc: "static/me.png",
        title: "F-14 Tomcat in Flight",
        description: "F-14 Tomcat soaring over the Pacific Ocean during a sunset patrol mission.",
        camera: "Default VRChat Camera",
        lens: "70-200mm f/2.8",
        settings: "f/5.6, 1/1000s, ISO 400",
        date: "October 15, 2024",
        location: "Pacific Ocean, USS Nimitz",
        tags: ["F-14", "Tomcat", "Carrier Operations", "Sunset"],
        featured: true
    },
    {
        id: "photo-2",
        src: "http://static.photos/aviation/320x240/2",
        fullSrc: "http://static.photos/aviation/1920x1440/2",
        title: "Cockpit Interior Detail",
        description: "Detailed view of the F-14 Tomcat cockpit showcasing the authentic instrument panel and controls.",
        camera: "Canon EOS R5",
        lens: "24-70mm f/2.8",
        settings: "f/4.0, 1/125s, ISO 800",
        date: "September 22, 2024",
        location: "VRChat - Naval Interceptor World",
        tags: ["Cockpit", "Interior", "Instruments", "F-14"],
        featured: true
    },
    {
        id: "photo-3",
        src: "http://static.photos/aviation/320x240/3",
        fullSrc: "http://static.photos/aviation/1920x1440/3",
        title: "Carrier Deck at Sunset",
        description: "Aircraft carrier deck operations during golden hour with crew preparing for night operations.",
        camera: "Sony A7R IV",
        lens: "16-35mm f/2.8",
        settings: "f/8.0, 1/250s, ISO 200",
        date: "November 3, 2024",
        location: "USS Enterprise CVN-65",
        tags: ["Carrier", "Deck Operations", "Sunset", "Navy"],
        featured: true
    },
    {
        id: "photo-4",
        src: "http://static.photos/aviation/320x240/4",
        fullSrc: "http://static.photos/aviation/1920x1440/4",
        title: "Saab Viggen Over Sweden",
        description: "Saab JA 37 Viggen fighter jet flying over the dense Swedish forests during a training exercise.",
        camera: "Nikon D850",
        lens: "100-400mm f/5.6",
        settings: "f/7.1, 1/800s, ISO 320",
        date: "August 12, 2023",
        location: "Sweden - Projekt Viggen World",
        tags: ["Viggen", "Sweden", "Forest", "Training"],
        featured: true
    },
    {
        id: "photo-5",
        src: "http://static.photos/aviation/320x240/5",
        fullSrc: "http://static.photos/aviation/1920x1440/5",
        title: "Aircraft Instruments Close-Up",
        description: "Close-up shot of vintage aircraft instruments showing the craftsmanship and attention to detail.",
        camera: "Canon EOS R5",
        lens: "100mm f/2.8 Macro",
        settings: "f/4.0, 1/60s, ISO 1600",
        date: "July 28, 2024",
        location: "VRChat - Aviation Museum",
        tags: ["Instruments", "Macro", "Vintage", "Detail"],
        featured: true
    },
    {
        id: "photo-6",
        src: "http://static.photos/aviation/320x240/6",
        fullSrc: "http://static.photos/aviation/1920x1440/6",
        title: "Formation Flight",
        description: "Four F-14 Tomcats flying in tight formation over a tropical island chain.",
        camera: "Nikon D850",
        lens: "70-200mm f/2.8",
        settings: "f/8.0, 1/500s, ISO 250",
        date: "December 5, 2024",
        location: "Pacific Islands",
        tags: ["Formation", "F-14", "Multiple Aircraft", "Islands"],
        featured: true
    },
    {
        id: "photo-7",
        src: "http://static.photos/aviation/320x240/7",
        fullSrc: "http://static.photos/aviation/1920x1440/7",
        title: "Ground Crew at Work",
        description: "Dedicated ground crew preparing an F-16XL for its next mission at dawn.",
        camera: "Sony A7R IV",
        lens: "24-70mm f/2.8",
        settings: "f/5.6, 1/200s, ISO 400",
        date: "October 20, 2023",
        location: "Nevada Air Base",
        tags: ["Ground Crew", "F-16XL", "Dawn", "Maintenance"],
        featured: true
    },
    {
        id: "photo-8",
        src: "http://static.photos/aviation/320x240/8",
        fullSrc: "http://static.photos/aviation/1920x1440/8",
        title: "Night Operations",
        description: "Night time operations at the airbase with aircraft illuminated by runway lights.",
        camera: "Canon EOS R5",
        lens: "24mm f/1.4",
        settings: "f/2.0, 1/30s, ISO 3200",
        date: "January 15, 2024",
        location: "Crossroads Island Air Base",
        tags: ["Night", "Runway", "Lighting", "Operations"],
        featured: false
    }
];

// Function to generate gallery grid HTML
function generateGalleryGrid(photos) {
    return photos.map((photo, index) => `
        <div class="overflow-hidden rounded-lg cursor-pointer" data-aos="fade-up" data-aos-delay="${100 + (index * 50)}">
            <img src="${photo.src}" 
                 alt="${photo.title}" 
                 class="gallery-item w-full h-full object-cover hover:scale-105 transition duration-500"
                 data-photo-id="${photo.id}"
                 data-full-src="${photo.fullSrc}"
                 data-title="${photo.title}"
                 data-description="${photo.description}"
                 data-camera="${photo.camera}"
                 data-lens="${photo.lens}"
                 data-settings="${photo.settings}"
                 data-date="${photo.date}"
                 data-location="${photo.location}"
                 data-tags="${photo.tags.join(', ')}">
        </div>
    `).join('');
}

// Function to load all gallery photos
function loadGallery(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = generateGalleryGrid(galleryData);
}

// Function to load only featured gallery photos
function loadFeaturedGallery(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const featured = galleryData.filter(photo => photo.featured);
    container.innerHTML = generateGalleryGrid(featured);
}

// Function to show photo modal with info
function showPhotoModal(photoId) {
    const photo = galleryData.find(p => p.id === photoId);
    if (!photo) return;
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const photoInfo = document.getElementById('photoInfo');
    
    if (!modal || !modalImg || !photoInfo) return;
    
    // Set image
    modalImg.src = photo.fullSrc || photo.src;
    modalImg.alt = photo.title;
    
    // Build info panel HTML
    photoInfo.innerHTML = `
        <h2 class="text-2xl font-bold mb-4 text-blue-400">${photo.title}</h2>
        <p class="text-gray-300 mb-6">${photo.description}</p>
        
        <div class="space-y-3 text-sm">
            <div class="flex items-start">
                <i data-feather="camera" class="w-4 h-4 mr-2 mt-1 text-blue-400"></i>
                <div>
                    <span class="text-gray-400">Camera:</span>
                    <span class="text-gray-200 ml-2">${photo.camera}</span>
                </div>
            </div>
            
            <div class="flex items-start">
                <i data-feather="aperture" class="w-4 h-4 mr-2 mt-1 text-blue-400"></i>
                <div>
                    <span class="text-gray-400">Lens:</span>
                    <span class="text-gray-200 ml-2">${photo.lens}</span>
                </div>
            </div>
            
            <div class="flex items-start">
                <i data-feather="settings" class="w-4 h-4 mr-2 mt-1 text-blue-400"></i>
                <div>
                    <span class="text-gray-400">Settings:</span>
                    <span class="text-gray-200 ml-2">${photo.settings}</span>
                </div>
            </div>
            
            <div class="flex items-start">
                <i data-feather="calendar" class="w-4 h-4 mr-2 mt-1 text-blue-400"></i>
                <div>
                    <span class="text-gray-400">Date:</span>
                    <span class="text-gray-200 ml-2">${photo.date}</span>
                </div>
            </div>
            
            <div class="flex items-start">
                <i data-feather="map-pin" class="w-4 h-4 mr-2 mt-1 text-blue-400"></i>
                <div>
                    <span class="text-gray-400">Location:</span>
                    <span class="text-gray-200 ml-2">${photo.location}</span>
                </div>
            </div>
            
            <div class="flex items-start">
                <i data-feather="tag" class="w-4 h-4 mr-2 mt-1 text-blue-400"></i>
                <div>
                    <span class="text-gray-400">Tags:</span>
                    <div class="flex flex-wrap gap-2 mt-2">
                        ${photo.tags.map(tag => `<span class="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Re-initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}