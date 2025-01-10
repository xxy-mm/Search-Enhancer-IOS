export class MMAppManagerImpl {
    constructor(storageManager, domManager) {
        this.filter = "";
        this.storageManager = storageManager;
        this.domManager = domManager;
    }
    async getSiteList() {
        return await this.storageManager.getSiteList();
    }
    async addSite(site) {
        return this.storageManager.addSite(site);
    }
    async removeSite(site) {
        return this.storageManager.removeSite(site);
    }
    async toggleSiteState(site) {
        const siteList = await this.storageManager.getSiteList();
        const siteListItem = siteList.find((item) => item.domain === site.domain);
        if (siteListItem === undefined)
            return false;
        switch (siteListItem.state) {
            case "include":
                siteListItem.state = "none";
                break;
            case "exclude":
                siteListItem.state = "include";
                break;
            case "none":
                siteListItem.state = "exclude";
                break;
            default:
                return false;
        }
        await this.storageManager.setSiteList(siteList);
        return true;
    }
    async renderSiteList() {
        let siteList = await this.getSiteList();
        if (this.filter.trim() !== "") {
            siteList = siteList.filter((site) => site.domain.includes(this.filter));
        }
        this.domManager.renderSiteList(siteList);
    }
    setSiteFilter(filter) {
        this.filter = filter;
    }
}
