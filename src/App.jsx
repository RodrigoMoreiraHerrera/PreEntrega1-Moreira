import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from './context/CartContext'

import { NavBar } from './components/navBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/itemDetail/ItemDetailContainer'
import { Cart } from './components/Cart/Cart';
import { CartForm } from './components/Cart/CartForm'

import './App.css'


function App() {

  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:Id" element={<ItemListContainer />} />
          <Route path="/item/:Id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartForm" element={<CartForm />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
