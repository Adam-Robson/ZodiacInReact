import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Zodiac from './pages/Zodiac'
import ZodiacDetail from './pages/ZodiacDetail'
import Layout from './components/Layout'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/zodiac" element={<Zodiac />} />
        <Route path="/zodiac/:sign" element={<ZodiacDetail />} />
      </Route>
    </Routes>
  )
}
