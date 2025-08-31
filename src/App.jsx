import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-base font-semibold tracking-tight">Dave<span className="text-indigo-600">.dev</span></a>
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#about" className="hover:text-slate-950">About</a>
          <a href="#projects" className="hover:text-slate-950">Projects</a>
          <a href="#skills" className="hover:text-slate-950">Skills</a>
          <a href="#contact" className="hover:text-slate-950">Contact</a>
        </div>
        <a href="#contact" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          Hire Me
        </a>
      </div>
    </nav>
  )
}
