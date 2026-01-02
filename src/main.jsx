import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
const basename = import.meta.env.BASE_URL;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
        <Toaster />
    </Provider>
  </StrictMode>
)
