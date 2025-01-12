import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/styles.css'
import { App } from './App/App.tsx'
import { PopupContextProvider } from './PopupProvider.tsx'
import { PopupStorageManagerImpl } from './models/popupStorageManager.ts'
import { WebStorageManagerImpl } from './models/webtorageManager.ts'


const storageManager = browser?.storage?.local ? new PopupStorageManagerImpl() : new WebStorageManagerImpl()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PopupContextProvider storageManager={storageManager}>
      <App />
    </PopupContextProvider>
  </StrictMode>,
)
