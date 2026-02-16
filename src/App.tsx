import { useState, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import ZartekHome from './components/ZartekHome'
import Industries from './components/Industries'
import Services from './components/Services'
import SuccessStories from './components/SuccessStories'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [currentView, setCurrentView] = useState<'home' | 'industries' | 'services' | 'success-stories' | 'about' | 'contact'>('home')

    // Scroll to top on view change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentView])

    return (
        <HelmetProvider>
            <div className="bg-white min-h-screen">
                <Navbar currentView={currentView} onViewChange={setCurrentView} />
                <main>
                    {currentView === 'home' && <ZartekHome />}
                    {currentView === 'industries' && <Industries />}
                    {currentView === 'services' && <Services />}
                    {currentView === 'success-stories' && <SuccessStories />}
                    {currentView === 'about' && <About />}
                    {currentView === 'contact' && <Contact />}
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default App
