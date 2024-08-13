import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:Id" element={<ItemListContainer />} />
        <Route path="/item/:Id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
