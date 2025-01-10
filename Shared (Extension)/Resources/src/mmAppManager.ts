import { mmDOMManager } from "./mmDOMManager.js"
import { MMStorageManager, SiteListItem } from "./mmStorageManager.js"

export interface MMAppManager {
  addSite(site: SiteListItem): Promise<boolean>
  removeSite(site: SiteListItem): Promise<boolean>
  toggleSiteState(site: SiteListItem): Promise<boolean>
  renderSiteList(): Promise<void>
}

export class MMAppManagerImpl implements MMAppManager {
  private storageManager: MMStorageManager
  private domManager: mmDOMManager
  private filter = ""

  constructor(storageManager: MMStorageManager, domManager: mmDOMManager) {
    this.storageManager = storageManager
    this.domManager = domManager
  }

  private async getSiteList(): Promise<SiteListItem[]> {
    return await this.storageManager.getSiteList()
  }

  async addSite(site: SiteListItem): Promise<boolean> {
    return this.storageManager.addSite(site)
  }

  async removeSite(site: SiteListItem): Promise<boolean> {
    return this.storageManager.removeSite(site)
  }

  async toggleSiteState(site: SiteListItem): Promise<boolean> {
    const siteList = await this.storageManager.getSiteList()
    const siteListItem = siteList.find((item) => item.domain === site.domain)
    if (siteListItem === undefined) return false
    switch (siteListItem.state) {
      case "include":
        siteListItem.state = "none"
        break
      case "exclude":
        siteListItem.state = "include"
        break
      case "none":
        siteListItem.state = "exclude"
        break
      default:
        return false
    }
    await this.storageManager.setSiteList(siteList)
    return true
  }

  async renderSiteList(): Promise<void> {
    let siteList = await this.getSiteList()
    if (this.filter.trim() !== "") {
      siteList = siteList.filter((site) => site.domain.includes(this.filter))
    }
    this.domManager.renderSiteList(siteList)
  }

  setSiteFilter(filter: string): void {
    this.filter = filter
  }
}
