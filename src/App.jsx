import { ThemeProvider } from "./hooks/useTheme.jsx";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface text-ink selection:bg-accent">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Resume />
          <Research />
          <Projects />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
