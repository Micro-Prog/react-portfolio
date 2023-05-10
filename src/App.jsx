import React from 'react'
import Contact from './sections/contact/Contact';
import NavBar from './sections/navbar/NavBar';
import Header from './sections/header/Header'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/FAQs/FAQs';
import Footer from './sections/footer/Footer'
import FloatingNav from './sections/floating-nav/FloatingNav';
import About from './sections/about/About'
import CCC from './components/CarouselTemplate';



const App = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
    )
}

export default App;