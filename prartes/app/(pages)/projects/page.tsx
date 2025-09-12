import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
