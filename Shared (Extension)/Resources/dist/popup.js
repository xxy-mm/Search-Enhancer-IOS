import { MMAppManagerImpl } from "./mmAppManager.js";
import { mmDOMManagerImpl } from "./mmDOMManager.js";
import { MMStorageManagerImpl } from "./mmStorageManager.js";
const searchInput = document.querySelector("#input-search");
const addInput = document.querySelector("#input-add");
const siteListDiv = document.querySelector("#site-list");
const switchGroup = document.querySelector("#switch");
const switchLabels = switchGroup.querySelectorAll(".switch-label");
// Add event listener to switchGroup
switchGroup.addEventListener("click", (e) => {
    const target = e.target;
    switchLabels.forEach((label) => {
        label.classList.remove("active");
    });
    target.classList.toggle("active");
    // TODO: switch Compact / Grouped view
});
// Add a new site when the user presses Enter
addInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        const domain = addInput.value;
        await appManager.addSite({ domain, state: "none" });
        appManager.renderSiteList();
        addInput.value = "";
    }
});
// Toggle the site state when the user clicks on it
siteListDiv.addEventListener("click", async (event) => {
    const target = event.target;
    if (target.classList.contains("site-list-item")) {
        const domain = target.textContent;
        if (domain == null)
            return;
        await appManager.toggleSiteState({ domain, state: "none" });
        await appManager.renderSiteList();
    }
    else if (target.classList.contains("delete-icon")) {
        const domain = target.parentElement?.textContent;
        if (domain == null)
            return;
        await appManager.removeSite({ domain, state: 'none' });
        await appManager.renderSiteList();
    }
});
// Filter the site list when the user types in the search input
searchInput.addEventListener("input", debounce(async () => {
    appManager.setSiteFilter(searchInput.value);
    await appManager.renderSiteList();
}, 500));
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            func.apply(args);
        }, wait);
    };
}
// Render the site list when the popup is opened
const appManager = new MMAppManagerImpl(new MMStorageManagerImpl(), new mmDOMManagerImpl(siteListDiv));
appManager.renderSiteList();
