import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
// import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
// import Experience from "./sections/Experience";
import Education from "./sections/Education";
// import Certifications from "./sections/Certifications";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader visible={loading} />
      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="pt-16" style={{ background: "var(--bg)" }}>
            <Hero />
            <Technologies />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            {/* <About />
            <Experience />
            <Certifications /> */}
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
