import React, { createContext,useState } from 'react'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { LatestArticles } from './components/LatestArticles/LatestArticles'
import { Nav } from './components/Nav/Nav'
import { WhySection } from './components/WhySection/WhySection'
import './index.css'


export const Context = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="App">
    <Context.Provider value={{isOpen, setIsOpen}}>
      <Nav />
      <Header />
      <WhySection />
      <LatestArticles />
      <Footer />
    </Context.Provider>
    </main>
  )
}

export default App
