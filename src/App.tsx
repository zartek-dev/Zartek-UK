import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ZartekHome from './components/ZartekHome'
import Industries from './components/Industries'
import Services from './components/Services'
import SuccessStories from './components/SuccessStories'
import About from './components/About'

function App() {
    const [currentView, setCurrentView] = useState<'home' | 'industries' | 'services' | 'success-stories' | 'about'>('home')

    // Scroll to top on view change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentView])

    return (
        <div className="bg-black min-h-screen">
            <Navbar currentView={currentView} onViewChange={setCurrentView} />
            <main>
                {currentView === 'home' && <ZartekHome />}
                {currentView === 'industries' && <Industries />}
                {currentView === 'services' && <Services />}
                {currentView === 'success-stories' && <SuccessStories />}
                {currentView === 'about' && <About />}
            </main>
        </div>
    )
}

export default App
