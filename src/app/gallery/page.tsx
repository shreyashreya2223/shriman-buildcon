import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Gallery />
      </main>

      <Footer />
    </>
  );
}