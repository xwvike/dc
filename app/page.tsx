import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Attractions from './components/Attractions'
import History from './components/History'
import Footer from './components/Footer'
import './globals.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Attractions />
        <History />
      </main>
      <Footer />
    </div>
  )
}

