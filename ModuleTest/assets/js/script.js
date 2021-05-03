////// Selectors
// Home
const navSection = document.querySelector(".nav");

// About Me
const aboutButton = document.querySelector(".btn-about");
const aboutSection = document.querySelector(".about");
const aboutClose = document.querySelector(".about_close");

// Photography Section
const photosButton = document.querySelector(".btn-photos");
const photosSection = document.querySelector(".photos");
const photosClose = document.querySelector(".photos_close");

// Photography Grids
const gridButton = document.querySelector(".btn--small");
const gridSection = document.querySelector(".grids");
const gridClose = document.querySelector(".grids_close");

// Music
const musicButton = document.querySelector(".btn-music");
const musicSection = document.querySelector(".music");
const musicClose = document.querySelector(".music_close");
const collapseMusicBtn = document.querySelector(".show-hide-btn");
const musicDisplay = document.querySelector(".music_display");



//////// Listeners
///// About Me
// Open
aboutButton.addEventListener("click", () => {
    showHideSections(aboutSection);
});
// Close
aboutClose.addEventListener("click", () => {
    showHideSections(aboutSection);
});

///// Photography Section
// Open
photosButton.addEventListener("click", () => {
    showHideSections(photosSection);
});
// Close
photosClose.addEventListener("click", () => {
    showHideSections(photosSection);
});

///// Photography Grids
// Open
gridButton.addEventListener("click", () => {
    showHidePhotos(gridSection);
});
// Close
gridClose.addEventListener("click", () => {
    showHidePhotos(gridSection);
});

///// Music
// Open
musicButton.addEventListener("click", () => {
    showHideSections(musicSection);
});
// Close
musicClose.addEventListener("click", () => {
    showHideSections(musicSection);
});
// Collapse/Uncollapse Embedded Music
collapseMusicBtn.addEventListener("click", () => {
    collapseMusic();
});



////// Function Declarations
// Shows or hides a section depending on which button is clicked, as well as toggles transition animations

const showHideSections = (section) => {
    if (section.classList.contains("hidden")){
        section.classList.remove("remove-tab");
        section.classList.remove("slideout");
        section.classList.remove("hidden");
        section.classList.add("slidein");

        navSection.classList.remove("fadeinGrow");
        navSection.classList.add("fadeoutShrink");
        navSection.classList.add("hidden");
        addTabNavigation(navSection);
    } 
    else {
        section.classList.remove("slidein");
        section.classList.add("hidden");
        section.classList.add("slideout");
        addTabNavigation(section);

        navSection.classList.remove("fadeinGrow");
        navSection.classList.add("fadeinGrow");
        navSection.classList.remove("hidden");
        navSection.classList.remove("remove-tab");
    }
};

const showHidePhotos = (section) => {
    if (section.classList.contains("hidden")){
        section.classList.remove("remove-tab");
        section.classList.remove("slideout");
        section.classList.remove("hidden");
        section.classList.add("slidein");

        photosSection.classList.remove("fadeinGrow");
        photosSection.classList.add("fadeoutShrink");
        photosSection.classList.add("hidden");
    } 
    else {
        section.classList.remove("slidein");
        section.classList.add("hidden");
        section.classList.add("slideout");
        addTabNavigation(section);

        photosSection.classList.remove("fadeinGrow");
        photosSection.classList.add("fadeinGrow");
        photosSection.classList.remove("hidden");
        photosSection.classList.remove("remove-tab");
    }
};



// Collapse and uncollapse the music recommendation on the page.
const collapseMusic = () => {
    if(musicDisplay.classList.contains("collapsed")) {
        musicDisplay.classList.remove("collapse");
        musicDisplay.classList.remove("collapsed");
        musicDisplay.classList.add("uncollapse");
    } else {
        musicDisplay.classList.remove("uncollapse");
        musicDisplay.classList.add("collapse");
        musicDisplay.classList.add("collapsed");
    }
};

// Required in order to keep the transition animations while removing hidden sections from tab navigtion
const addTabNavigation = (section) => {
    setTimeout(function(){ section.classList.add("remove-tab"); }, 400)
};