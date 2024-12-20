import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router } from "react-router";
import AppRouter from './AppRouter';
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else if (savedTheme === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  // Default to dark mode if no preference is set
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Router>
      <AppRouter/>
   </Router>
 
  </StrictMode>,
)
