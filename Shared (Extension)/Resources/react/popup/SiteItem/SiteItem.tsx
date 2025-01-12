import { useContext } from 'react'
import deleteIcon from '../assets/images/delete.svg'
import { ISiteItem } from '../models'
import css from './SiteItem.module.css'
import { PopupContext } from '../PopupContext'

const SiteItem = ({ domain, status }: ISiteItem) => {
  const { removeSite, toggleSiteStatus } = useContext(PopupContext)
  const remove = () => {
    removeSite(domain)
  }

  const toggleStatus = () => {
    toggleSiteStatus(domain)
  }

  return (
    <div className={`${css.siteListItem} ${css[status]}`} onClick={toggleStatus}>
      {domain}
      <img
        className={css.deleteIcon}
        src={deleteIcon}
        onClick={remove}
      />
    </div>
  )
}

export default SiteItem
