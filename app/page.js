import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import PraktiskInfo from "@/components/PraktiskInfo";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";
import { palette } from "@/components/palette";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Wave from={palette.navy} to={palette.mist} accent={palette.slate} />
      <About />
      <Program />
      <PraktiskInfo />
      <Rsvp />
      <Footer />
    </main>
  );
}
