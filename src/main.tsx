import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import 'styles/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
