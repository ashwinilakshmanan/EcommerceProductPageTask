
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductPage from './components/ProductPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
