export type SiteState = "include" | "exclude" | "none"
export interface SiteListItem {
  domain: string
  state: SiteState
}

export interface MMStorageManager {
  getSiteList(): Promise<SiteListItem[]>
  setSiteList(siteList: SiteListItem[]): Promise<void>
  addSite(site: SiteListItem): Promise<boolean>
  removeSite(site: SiteListItem): Promise<boolean>
}

export class MMStorageManagerImpl implements MMStorageManager {

  async addSite(site: SiteListItem): Promise<boolean> {
    const siteList = await this.getSiteList()
    const index = siteList.findIndex((item) => item.domain === site.domain)
    if(index !== -1) return false
    siteList.push(site)
    await this.setSiteList(siteList)
    return true
  }

  async removeSite(site: SiteListItem): Promise<boolean> {
    const siteList = await this.getSiteList()
    const index = siteList.findIndex((item) => item.domain === site.domain)
    if (index === -1) return false
    siteList.splice(index, 1)
    await this.setSiteList(siteList)
    return true
  }

  async getSiteList(): Promise<SiteListItem[]> {
    const data = await browser.storage.local.get("siteList")
    return data.siteList || []
  }

  async setSiteList(siteList: SiteListItem[]): Promise<void> {
    await browser.storage.local.set({ siteList })
  }
}
