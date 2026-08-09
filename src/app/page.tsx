import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Schulen from "@/components/Schulen";
import Leistungen from "@/components/Leistungen";
import Arbeitsweise from "@/components/Arbeitsweise";
import USPs from "@/components/USPs";
import UeberMich from "@/components/UeberMich";
import Qualifikationen from "@/components/Qualifikationen";
import Referenz from "@/components/Referenz";
import BlogPreview from "@/components/BlogPreview";
import Mitmachen from "@/components/Mitmachen";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Schulen />
        <Leistungen />
        <Arbeitsweise />
        <USPs />
        <UeberMich />
        <Qualifikationen />
        <Referenz />
        <BlogPreview />
        <Mitmachen />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
