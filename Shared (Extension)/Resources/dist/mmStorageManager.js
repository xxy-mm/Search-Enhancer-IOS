export class MMStorageManagerImpl {
    async addSite(site) {
        const siteList = await this.getSiteList();
        const index = siteList.findIndex((item) => item.domain === site.domain);
        if (index !== -1)
            return false;
        siteList.push(site);
        await this.setSiteList(siteList);
        return true;
    }
    async removeSite(site) {
        const siteList = await this.getSiteList();
        const index = siteList.findIndex((item) => item.domain === site.domain);
        if (index === -1)
            return false;
        siteList.splice(index, 1);
        await this.setSiteList(siteList);
        return true;
    }
    async getSiteList() {
        const data = await browser.storage.local.get("siteList");
        return data.siteList || [];
    }
    async setSiteList(siteList) {
        await browser.storage.local.set({ siteList });
    }
}
