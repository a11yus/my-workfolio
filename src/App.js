import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Snowfall from 'react-snowfall'
import './App.css'
import snowLogo from './snow.png'
const snowFlake = document.createElement('img')
snowFlake.src = snowLogo

const images = [snowFlake]

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Snowfall 
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
      }}
      snowflakeCount={50}
      radius={[5, 16]}
      speed={[0.5, 2]}
      width={[-0.5, 2]}
      images = {images}
      />
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
