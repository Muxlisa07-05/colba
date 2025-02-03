import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Navbar} from './navbar.jsx'
import {Main} from './mainn.jsx'
import {Main2} from './main2.jsx'
import {Maktab} from './maktab.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Navbar/>
    <Main/>
    <Main2/>
    <Maktab/>
  </>
)


