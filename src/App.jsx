import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StatsBento from "./components/StatsBento";
import ProjectAccordion from "./components/ProjectAccordion";
import FeaturedRoomBooking from "./components/FeaturedRoomBooking";
import TechMarquee from "./components/TechMarquee";
import CTAFooter from "./components/CTAFooter";

export default function App() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-ink-950">
      <Nav />
      <Hero />

      <section id="work" className="py-8 md:py-16">
        <div className="mx-auto max-w-5xl px-4 pb-12">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-white">
            Eight systems, mostly one church.
          </h2>
          <p className="mt-3 max-w-xl text-white/55">
            Most of these are for Jesus Christ Saves Global Outreach (JCSGO), a church running
            services, rentals, and events across five buildings. A couple started as classroom
            tools, then stuck around.
          </p>
        </div>

        <StatsBento />

        <div className="mt-16">
          <ProjectAccordion />
        </div>
      </section>

      <FeaturedRoomBooking />

      <section id="stack" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 pb-10">
          <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-bold text-white">
            What&rsquo;s actually running underneath.
          </h2>
          <p className="mt-3 text-white/55">
            Backed by{" "}
            <a
              href={`${import.meta.env.BASE_URL}certificates.html`}
              className="border-b border-white/30 text-white transition hover:border-amber hover:text-amber"
            >
              21 certificates
            </a>
            , from a 2012 TESDA hardware cert to two cybersecurity summits and a national
            convention this year.
          </p>
        </div>
        <TechMarquee />
      </section>

      <CTAFooter />
    </main>
  );
}
