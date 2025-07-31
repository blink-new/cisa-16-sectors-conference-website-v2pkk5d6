import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HomePage from '@/pages/HomePage'
import SectorsPage from '@/pages/SectorsPage'
import SpeakersPage from '@/pages/SpeakersPage'
import SponsorsPage from '@/pages/SponsorsPage'
import AgendaPage from '@/pages/AgendaPage'
import AboutPage from '@/pages/AboutPage'
import RegistrationPage from '@/pages/RegistrationPage'
import TicketsPage from '@/pages/TicketsPage'
import ResourcesPage from '@/pages/ResourcesPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App