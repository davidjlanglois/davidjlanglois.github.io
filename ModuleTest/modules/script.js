////// Selectors
// Home
export const navSection = document.querySelector(".nav");

// About Me
export const aboutButton = document.querySelector(".btn-about");
export const aboutSection = document.querySelector(".about");
export const aboutClose = document.querySelector(".about_close");

// Photography
export const photosButton = document.querySelector(".btn-photos");
export const photosSection = document.querySelector(".photos");
export const photosClose = document.querySelector(".photos_close");

// Music
export const musicButton = document.querySelector(".btn-music");
export const musicSection = document.querySelector(".music");
export const musicClose = document.querySelector(".music_close");
export const collapseMusicBtn = document.querySelector(".show-hide-btn");
export const musicDisplay = document.querySelector(".music_display");



//////// Listeners
///// About Me
// Open

export const ListenerButtons = () => {

aboutButton.addEventListener("click", () => {
    showHideSections(aboutSection);
});
// Close
aboutClose.addEventListener("click", () => {
    showHideSections(aboutSection);
});

///// Photography
// Open
photosButton.addEventListener("click", () => {
    showHideSections(photosSection);
});
// Close
photosClose.addEventListener("click", () => {
    showHideSections(photosSection);
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
});}



////// Function Declarations
// Shows or hides a section depending on which button is clicked, as well as toggles transition animations
export const showHideSections = (section) => {
    if (section.classList.contains("hidden")){
        section.classList.remove("remove-tab");
        section.classList.remove("slideout");
        section.classList.remove("hidden");
        section.classList.add("slidein");

        navSection.classList.remove("fadeinGrow");
        navSection.classList.add("fadeoutShrink");
        navSection.classList.add("hidden");
        addTabNavigation(navSection);
    } else {
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

// Collapse and uncollapse the music recommendation on the page.
export const collapseMusic = () => {
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
export const addTabNavigation = (section) => {
    setTimeout(function(){ section.classList.add("remove-tab"); }, 400)
};