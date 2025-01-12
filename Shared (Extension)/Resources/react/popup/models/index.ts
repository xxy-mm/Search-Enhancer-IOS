export type IListViewStyle = 'grouped' | 'compact'
export type ISiteItem = {
    domain: string;
    status: SiteItemState
}

export type SiteItemState = 'none' | 'include' | 'exclude'
