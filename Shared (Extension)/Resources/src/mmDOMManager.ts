import { SiteListItem } from "./mmStorageManager.js"

export interface mmDOMManager {
  renderSiteList(siteList: SiteListItem[]): void
}

export class mmDOMManagerImpl implements mmDOMManager {
  private container: HTMLElement
  constructor(container: HTMLElement) {
    this.container = container
  }
  public renderSiteList(siteList: SiteListItem[]): void {
    this.clearSiteList()
    const fragment = document.createDocumentFragment()
    for (const item of siteList) {
      const listItem = this.newSiteListItem(item)
      fragment.append(listItem)
    }
    this.container.append(fragment)
  }
  private newSiteListItemDeleteButton(): HTMLImageElement {
    const img = document.createElement('img')
    img.src = "img/delete.svg"
    img.classList.add('delete-icon')
    return img
  }

  private newSiteListItem(item: SiteListItem): HTMLElement {
    const siteListItem = document.createElement("div")
    siteListItem.classList.add("site-list-item")
    siteListItem.innerText = item.domain
    siteListItem.classList.add(item.state)
    siteListItem.appendChild(this.newSiteListItemDeleteButton())
    return siteListItem
  }
  private clearSiteList(): void {
    this.container.innerHTML = ""
  }
}
