import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Zodiac from './pages/Zodiac'

export default function App() {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/zodiac" element={<Zodiac />} />
      <Route path="/zodiac/:sign" element={<Zodiac />} />
      </Routes>
  )
}
