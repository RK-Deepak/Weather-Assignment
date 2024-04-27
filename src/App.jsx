

import { Route, Routes } from 'react-router-dom'
import './App.css'
import SearcByCity from './components/SearcByCity'
import SearchByGeoLocation from './components/SearchByGeoLocation'
import IndexFn from './components/Index.jsx'

function App() {
     
     

  return (
        
    <div className='App ' >
      <p className='main-headline'>Weather App</p>
    <Routes>
      <Route element={<IndexFn />}>
        <Route index element={<SearchByGeoLocation />} />
        <Route path='/citySearch' element={<SearcByCity />} />
      </Route>
    </Routes>
  </div>
  
  )
}

export default App
