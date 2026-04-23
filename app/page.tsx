import Experience from "@/app/components/Experience";
import Hero from "@/app/components/Hero";
import About from "./components/About";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Achievements from "./components/Achievements";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
    <ThemeToggle />
    <Hero />
    <About />
    <Services />
    <ProjectList />
    <Achievements />
    <Experience />
    <Footer />
    </>
  );
}