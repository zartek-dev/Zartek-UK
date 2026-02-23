import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ZartekHome from './components/ZartekHome'
import CaseStudiesPage from './components/CaseStudiesPage'
import ServicesPage from './components/ServicesPage'
import SuccessStories from './components/SuccessStories'
import About from './components/About'
import Contact from './components/Contact'
import CaseStudyIndusGo from './components/CaseStudyIndusGo'
import CaseStudySurveySparrow from './components/CaseStudySurveySparrow'
import CaseStudyFinTrack from './components/CaseStudyFinTrack'
import CaseStudyHealthSync from './components/CaseStudyHealthSync'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
    return (
        <HelmetProvider>
            <div className="bg-white min-h-screen">
                <ScrollToTop />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<ZartekHome />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/success-stories" element={<SuccessStories />} />
                        <Route path="/success-stories/indusgo" element={<CaseStudyIndusGo />} />
                        <Route path="/success-stories/surveysparrow" element={<CaseStudySurveySparrow />} />
                        <Route path="/success-stories/fintrack" element={<CaseStudyFinTrack />} />
                        <Route path="/success-stories/healthsync" element={<CaseStudyHealthSync />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* 404 Redirect to Home */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default App
