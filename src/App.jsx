import Nav from "./components/Nav";
import LineGutter from "./components/LineGutter";
import Hero from "./components/Hero";
import ResumePreview from "./components/ResumePreview";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import ShippedWork from "./components/ShippedWork";
import FeaturedRoomBooking from "./components/FeaturedRoomBooking";
import VerifiedBadges from "./components/VerifiedBadges";
import Toolbox from "./components/Toolbox";
import CTAFooter from "./components/CTAFooter";

export default function App() {
  return (
    <>
      <Nav />
      <main className="bg-dots relative w-full max-w-full overflow-x-clip">
        <LineGutter />
        <Hero />
        <ResumePreview />
        <Marquee />
        <Services />
        <ShippedWork />
        <FeaturedRoomBooking />
        <section id="credentials" className="relative py-24 md:py-32">
          <div className="wrap">
            <VerifiedBadges />
          </div>
        </section>
        <Toolbox />
        <CTAFooter />
      </main>
    </>
  );
}
