import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Products from "@/components/Products";
import Cases from "@/components/Cases";
import AwardsCerts from "@/components/AwardsCerts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Career />
        <Products />
        <Cases />
        <AwardsCerts />
        <Contact />
      </main>
    </>
  );
}
