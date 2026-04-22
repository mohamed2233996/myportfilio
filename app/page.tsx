import Experience from "@/app/components/Experience";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import About from "./components/About";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";

export default function Home() {
  return (
    <>
    <ThemeToggle />
    <Hero />
    <About />
    <ProjectList />
    <Experience />
    <Footer />
    </>
  );
}