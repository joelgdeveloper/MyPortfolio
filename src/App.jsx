import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

import scrollreveal from 'scrollreveal';

function App() {

  useEffect(() => {

    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    })

    sr.reveal(
      `
        #nav,
        #home,
        #about,
        #skills,
        #work,
        #contact`,
    );

  },[])
  
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
