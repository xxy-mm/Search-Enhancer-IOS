export class mmDOMManagerImpl {
    constructor(container) {
        this.container = container;
    }
    renderSiteList(siteList) {
        this.clearSiteList();
        const fragment = document.createDocumentFragment();
        for (const item of siteList) {
            const listItem = this.newSiteListItem(item);
            fragment.append(listItem);
        }
        this.container.append(fragment);
    }
    newSiteListItemDeleteButton() {
        const img = document.createElement('img');
        img.src = "img/delete.svg";
        img.classList.add('delete-icon');
        return img;
    }
    newSiteListItem(item) {
        const siteListItem = document.createElement("div");
        siteListItem.classList.add("site-list-item");
        siteListItem.innerText = item.domain;
        siteListItem.classList.add(item.state);
        siteListItem.appendChild(this.newSiteListItemDeleteButton());
        return siteListItem;
    }
    clearSiteList() {
        this.container.innerHTML = "";
    }
}
