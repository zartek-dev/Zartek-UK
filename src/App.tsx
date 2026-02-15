import { useState, useEffect } from 'react'
import ZartekHome from './components/ZartekHome'
import Industries from './components/Industries'

function App() {
    const [currentView, setCurrentView] = useState<'home' | 'industries'>('home')

    // Scroll to top on view change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentView])

    return (
        <>
            {currentView === 'home' ? (
                <ZartekHome onViewChange={setCurrentView} />
            ) : (
                <Industries onBack={() => setCurrentView('home')} />
            )}
        </>
    )
}

export default App
