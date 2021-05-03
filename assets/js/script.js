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
const NZgridButton = document.querySelector(".btn-nz");
const AsiagridButton = document.querySelector(".btn-asia");
const AUSgridButton = document.querySelector(".btn-aus");
const gridSection = document.querySelector(".grids");
const NZgridSection = document.querySelector(".gridnz");
const AsiagridSection = document.querySelector(".gridasia");
const AUSgridSection = document.querySelector(".gridaus");
const gridClose = document.querySelector(".grids_close");
const AsiaClose = document.getElementById("asia_close");
const AUSClose = document.getElementById("aus_close");

// Music
const musicButton = document.querySelector(".btn-music");
const musicSection = document.querySelector(".music");
const musicClose = document.querySelector(".music_close");
const collapseMusicBtn = document.querySelector(".show-hide-btn");
const musicDisplay = document.querySelector(".music_display");

/*

// IP Fetch

 fetch("https://ipinfo.io/json?token=f2bb08d190a472")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        document.querySelector("#ipText").innerHTML = myJson.ip;
      })
      .catch((error) => {
        console.log("Error: " + error);
      }); 

// Piece of Advice

        const adviceConnect = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.adviceslip.com/advice",
            "method": "GET",
        }

        let adviceResponse = null;
        $.ajax(adviceConnect).done(function (response) {
        console.log("Advice GET!");
        const adviceResponse = (response);
        $("#adviceSpan").html(adviceResponse);
        });

// Collection GET and Logic

      const jsonconnect = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8888/Final/json/collection.json",
        "method": "GET",
        };
    
        let ajaxResponse = null;
        $.ajax(jsonconnect).done(function (response) {
        ajaxResponse = response;
        console.log("GET Success!");
        });

        $("#artist_search").keyup (function() {
            let result = ajaxResponse.find(x => x.Artist === $(this).val());
            $("#search_result").html(result ? `${result.Title} - ${result.Format}` : "Sorry, no matches!");
        }); 

*/

// Random Quote

        const quotes = new Array();
            quotes[0] = "You don't take a photograph, you make it.";
            quotes[1] = "Art enables us to find ourselves and lose ourselves at the same time.";
            quotes[2] = "It's not what you look at that matters, it's what you see.";
            quotes[3] = "Music in the soul can be heard by the universe.";
            quotes[4] = "Music is the language of mankind.";
            quotes[5] = "I haven't understood a bar of music in my life, but I have felt it.";
            
        function writeQuote() {
            const randomPull = Math.floor(Math.random() * quotes.length);
            document.getElementById("quoteText").innerHTML = quotes[randomPull];
        }

        window.addEventListener("DOMContentLoaded", () => {
            writeQuote();
        });

        
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
// Open NZ
NZgridButton.addEventListener("click", () => {
    showHidePhotos(NZgridSection);
});

// Open Asia
AsiagridButton.addEventListener("click", () => {
    showHidePhotos(AsiagridSection);
});

// Open AUS
AUSgridButton.addEventListener("click", () => {
    showHidePhotos(AUSgridSection);
});

// Close NZ
gridClose.addEventListener("click", () => {
    showHidePhotos(gridSection);
});

// Close Asia
AsiaClose.addEventListener("click", () => {
    showHidePhotos(AsiagridSection);
});

// Close AUS
AUSClose.addEventListener("click", () => {
    showHidePhotos(AUSgridSection);
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

// Required to keep the transition animations while removing hidden sections from tab navigtion.
const addTabNavigation = (section) => {
    setTimeout(function(){ section.classList.add("remove-tab"); }, 400)
};       