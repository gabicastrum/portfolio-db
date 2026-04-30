import { Details } from '@/features/details/view/Details'
import { Home } from '@/features/home/view/Home'
import { Projects } from '@/features/projects/view/Projects'
import { Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}
