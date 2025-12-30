import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import store from './store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter basename="/PasteNest"> */}
        <App />
        <Toaster />
      {/* </BrowserRouter> */}
    </Provider>
  </StrictMode>
)
