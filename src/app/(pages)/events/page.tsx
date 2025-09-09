import Navbar from "@/components/Navbar";
import EventsList from "@/components/EventsList";
import Footer from "@/components/Footer";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <EventsList />
      </main>
      <Footer />
    </>
  );
}
