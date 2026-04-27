import Experience from "@/app/components/Experience";
import Hero from "@/app/components/Hero";
import About from "./components/About";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Achievements from "./components/Achievements";
import Services from "./components/Services";
import ScrollingText from "./components/ScrollText";

export default function Home() {
  return (
    <>
      <main>
        <ThemeToggle />
        <Hero />
        <About />
        <Services />
        <ScrollingText />
        <ProjectList />
        <Achievements />
        <Experience />
      </main>
      <Footer />
    </>
  );
}