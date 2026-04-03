import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    // <div className="flex min-h-screen">
    //   <h1>Portfolio Website</h1>
    // </div>
    <main className="flex flex-col min-h-screen">
      <div id="top" />

      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills />
      <Experience />
      <Resume />
      <Contact />
    </main>
  );
}
