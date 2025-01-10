const searchInput = document.getElementById("input-search") as HTMLInputElement
const addInput = document.getElementById("input-add") as HTMLInputElement
const siteListDiv = document.getElementById("site-list") as HTMLDivElement
interface SiteListItem {
  site: string
  status: "include" | "exclude" | "none"
}
const siteList: SiteListItem[] = [
    { site: "google.com", status: "include" },
    { site: "bing.com", status: "exclude" },
    { site: "yahoo.com", status: "none" },
]
function newSiteListItem(site: string) {
  const siteListItem = document.createElement("div")
  siteListItem.classList.add("site-list-item")
  siteListItem.innerText = site
  siteListDiv.appendChild(siteListItem)
}


// Add a new site when the user presses Enter
addInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const site = addInput.value
    newSiteListItem(site)
    addInput.value = ""
  }
})

// Toggle the site state when the user clicks on it
siteListDiv.addEventListener("click", (event) => {
  const target = event.target as HTMLElement
  if (target.classList.contains("site-list-item")) {
    toggleSiteListItemStatus(target)
  }
})

function toggleSiteListItemStatus(siteListItem: HTMLElement) {
  if (isInclude(siteListItem)) {
    setSiteState(siteListItem, "none")
  } else if (isExclude(siteListItem)) {
    setSiteState(siteListItem, "include")
  } else {
    setSiteState(siteListItem, "exclude")
  }
}

function isExclude(siteListItem: HTMLElement) {
  return siteListItem.classList.contains("exclude")
}
function isInclude(siteListItem: HTMLElement) {
  return siteListItem.classList.contains("include")
}

function setSiteState(
  siteListItem: HTMLElement,
  state: "include" | "exclude" | "none"
) {
  siteListItem.classList.remove("include", "exclude")
  if (state !== "none") {
    siteListItem.classList.add(state)
  }
}
