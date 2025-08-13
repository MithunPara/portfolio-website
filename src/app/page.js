import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    // <div className="flex min-h-screen">
    //   <h1>Portfolio Website</h1>
    // </div>
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  );
}
