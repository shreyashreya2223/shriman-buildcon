import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Services />
      </main>

      <Footer />
    </>
  );
}