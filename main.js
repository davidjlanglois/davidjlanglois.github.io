import { ipFetch } from "./modules/IP-finder.js"
import { artistSearch } from "./modules/search.js"
import { adviceGet } from "./modules/advice.js";

window.addEventListener("DOMContentLoaded", () => {
    ipFetch();
    artistSearch();
    adviceGet();
    console.log("Everything loaded!");
 }); 