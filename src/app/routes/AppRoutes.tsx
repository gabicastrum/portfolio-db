import { Details } from '@/features/details/view/Details'
import { Home } from '@/features/home/view/Home'
import { Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
  )
}