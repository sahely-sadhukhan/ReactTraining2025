import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComp from './components/ParentComp'
import Job from './components/Job'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/*<ParentComp />*/}
        <Job />
      </div>
    </>
  )
}

export default App
