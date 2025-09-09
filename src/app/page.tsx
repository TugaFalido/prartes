// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ProjectsGrid from "@/components/ProjectsGrid";
import EventsList from "@/components/EventsList";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceCards />
      <ProjectsGrid />
      <EventsList />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
