import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageSlider from './components/ImageSlider.jsx';
import Header from './components/Header.jsx';
import TabForm from './components/TabForm.jsx';
import CricketSorting from './components/CricketSorting.jsx';
import CountryStateDropdown from './components/CountryStateDropdown.jsx';
import LazyLoading from './components/LazyLoading.jsx';

createRoot(document.getElementById('root')).render(
 
  <>
    {/* <App /> */}
    <ImageSlider />
    {/* <Header country="India" /> */}
    <TabForm    />
    <CricketSorting />
    <CountryStateDropdown />
    <LazyLoading />
  </>
)
