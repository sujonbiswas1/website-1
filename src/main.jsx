import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HeroUIProvider} from "@heroui/react";

import Navbar1 from './Components/Navbar.jsx';
import NavbarArea from './Components/Navbar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <App/>
    </HeroUIProvider>
  </StrictMode>,
)
