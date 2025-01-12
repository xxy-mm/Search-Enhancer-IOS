import { useContext, useEffect, useState } from 'react'
import addIcon from '../assets/images/add-circle.svg'
import searchIcon from '../assets/images/search.svg'
import IconInput from '../IconInput'
import { IListViewStyle, ISiteItem } from '../models'
import SiteItem from '../SiteItem'
import SiteListViewSwitcher from '../SiteListViewSwitcher'
import { PopupContext } from '../PopupContext'

export const App = () => {
  const { addSite, siteItems } = useContext(PopupContext)
  const [search, setSearch] = useState<string>('')
  const [filteredSites, setFilteredSites] = useState<ISiteItem[]>([])


  const switchListViewStyle = (style: IListViewStyle): void => {
    //todo: switch view style
    console.log('current style:', style)
  }

  useEffect(() => {
    if (search.trim() === '') {
      setFilteredSites(siteItems)
      return
    }
    const filtered = siteItems.filter((siteItem) =>
      siteItem.domain.includes(search),
    )
    setFilteredSites(filtered)
  }, [search, siteItems])

  return (
    <div className='container'>
      {/* header */}
      <h1 className='title'>Search Enhancer</h1>

      {/* top action group */}
      <div className='action-group'>
        {/* compact/grouped select */}
        <SiteListViewSwitcher onSwitch={switchListViewStyle} />
        {/* search */}
        <IconInput
          placeholder='Search'
          icon={searchIcon}
          onChange={setSearch}
          onEnter={(v) => console.log('enter: ', v)}
        />
      </div>

      {/* site list */}
      <div className='site-list'>
        {/* site list item */}
        {filteredSites.map((siteItem) => (
          <SiteItem
            domain={siteItem.domain}
            key={siteItem.domain}
            status={siteItem.status}
          />
        ))}
      </div>

      {/* bottom action group */}
      <div className='action-group flex-end'>
        {/* input for add site */}

        <IconInput
          placeholder='Input the site then press enter'
          icon={addIcon}
          onEnter={addSite}
        />
      </div>
    </div>
  )
}
