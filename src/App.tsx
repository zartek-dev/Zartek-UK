import { useState, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import ZartekHome from './components/ZartekHome'
import Industries from './components/Industries'
import Services from './components/Services'
import SuccessStories from './components/SuccessStories'
import About from './components/About'
import Contact from './components/Contact'
import Blogs from './components/Blogs'
import CaseStudySurveySparrow from './components/CaseStudySurveySparrow'
import CaseStudyFinTrack from './components/CaseStudyFinTrack'
import CaseStudyHealthSync from './components/CaseStudyHealthSync'
import Footer from './components/Footer'

function App() {
    const [currentView, setCurrentView] = useState<'home' | 'industries' | 'services' | 'success-stories' | 'about' | 'contact' | 'blogs'>('home')
    const [caseStudySlug, setCaseStudySlug] = useState<string | null>(null)

    // Scroll to top on view change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentView, caseStudySlug])

    const handleCaseStudyClick = (slug: string) => {
        setCaseStudySlug(slug)
    }

    const handleBackToSuccessStories = () => {
        setCaseStudySlug(null)
    }

    return (
        <HelmetProvider>
            <div className="bg-white min-h-screen">
                <Navbar currentView={currentView} onViewChange={setCurrentView} />
                <main>
                    {currentView === 'home' && <ZartekHome />}
                    {currentView === 'industries' && <Industries />}
                    {currentView === 'services' && <Services />}
                    {currentView === 'success-stories' && !caseStudySlug && <SuccessStories onCaseStudyClick={handleCaseStudyClick} />}
                    {currentView === 'success-stories' && caseStudySlug === 'surveysparrow' && <CaseStudySurveySparrow onBack={handleBackToSuccessStories} />}
                    {currentView === 'success-stories' && caseStudySlug === 'fintrack' && <CaseStudyFinTrack onBack={handleBackToSuccessStories} />}
                    {currentView === 'success-stories' && caseStudySlug === 'healthsync' && <CaseStudyHealthSync onBack={handleBackToSuccessStories} />}
                    {currentView === 'blogs' && <Blogs />}
                    {currentView === 'about' && <About />}
                    {currentView === 'contact' && <Contact />}
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default App
