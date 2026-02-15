import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ZartekHome from './components/ZartekHome'
import Industries from './components/Industries'
import About from './components/About'

function App() {
    const [currentView, setCurrentView] = useState<'home' | 'industries' | 'about'>('home')

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
                {currentView === 'about' && <About />}
            </main>
        </div>
    )
}

export default App
