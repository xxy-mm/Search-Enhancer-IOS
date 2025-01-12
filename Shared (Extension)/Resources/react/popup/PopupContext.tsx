import { createContext } from "react"
import { ISiteItem } from "./models"


interface IPopupContext {
    addSite: (domain: string) => void
    removeSite: (domain: string) => void
    toggleSiteStatus: (domain: string) => void
    siteItems: ISiteItem[]
}
export const PopupContext = createContext<IPopupContext>({} as IPopupContext)

