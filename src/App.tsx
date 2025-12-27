import About from "./components/AboutMe"
import Contact from "./components/Contact"
import Heading from "./components/Heading"
import Project from "./components/Project"
import Skills from "./components/Skills"

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
        <Heading />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App
