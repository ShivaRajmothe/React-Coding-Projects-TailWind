import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageSlider from './components/ImageSlider.jsx';

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <ImageSlider />
  </>
)
