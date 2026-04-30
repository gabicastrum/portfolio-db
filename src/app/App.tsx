import { BrowserRouter } from 'react-router-dom'
import { Header } from '@/shared/components/Header/Header'
import { AppRoutes } from './routes/AppRoutes'
import { Footer } from '@/shared/components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
