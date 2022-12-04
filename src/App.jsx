import { Footer, Header, Portfolio, Contact } from './components'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
