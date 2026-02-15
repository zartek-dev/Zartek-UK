import { useState, useEffect } from 'react'
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
        <>
            {currentView === 'home' && <ZartekHome onViewChange={setCurrentView} />}
            {currentView === 'industries' && <Industries onBack={() => setCurrentView('home')} />}
            {currentView === 'about' && <About onBack={() => setCurrentView('home')} />}
        </>
    )
}

export default App
