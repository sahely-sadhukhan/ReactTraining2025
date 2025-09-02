import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StoreInfo from './StoreInfo'
import Catagories from './Catagories'
import Products from './Products'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-6">
        Welcome to Plants Paradise!
      </h1>
      
      <div className="my-8">
        <StoreInfo />
      </div>
      
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Available Categories
        </h2>
        <Catagories />
      </div>
      
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Available Products
        </h2>
        <Products />
      </div>
      
      <footer className="mt-12 pt-6 border-t border-green-200 text-center text-green-600">
        <p>© 2025 Plants Paradise - Your one-stop shop for all plant needs</p>
      </footer>
    </div>
  )
}

export default App
