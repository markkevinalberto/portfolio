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
        <section id="credentials" className="relative pb-8 pt-4 md:pb-12 md:pt-8">
          <div className="wrap">
            <VerifiedBadges />
          </div>
        </section>
        <ResumePreview />
        <Marquee />
        <Services />
        <ShippedWork />
        <FeaturedRoomBooking />
        <Toolbox />
        <CTAFooter />
      </main>
    </>
  );
}
