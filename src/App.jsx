import { useState } from 'react'
import reactLogo from './assets/react.svg'
import shop from './assets/images/shop.jpg'
// import Header from './components/Header'
import Products from './components/Products'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <header>
        <div>
        <img
          className='logo'
          src={shop}
          alt='logo' />
      </div>
          <p>Bienvenida</p>

      </header>


        <Products />
        {/* <Request/> */}
      </div>

    </div>
  )
}

export default App
