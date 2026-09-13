import Navbar from "@/components/Navbar";
import QueryForm from "@/components/QueryForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <QueryForm />
      </main>

      <Footer />
    </>
  );
}