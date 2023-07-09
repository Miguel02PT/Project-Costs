import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NewProject from "./NewProject"
import Projects from "./Projects"
import Navbar from "./layout/NavBar"
import Container from "./layout/Container"
import Footer from "./layout/Footer"


function App() {
  return (
    <div className="App" style={{ height: '100%' }}>
     <Navbar />
      <Container customClass="min-height">
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="projects" element={ <Projects/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="newproject" element={ <NewProject/> } />
       </Routes>
      </Container>
      <div style={{ marginTop: 'auto' }}>
      <Footer />
      </div>
    </div>
  )
}

export default App