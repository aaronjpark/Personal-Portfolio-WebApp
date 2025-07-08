import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="story">
        <WearYourStory />
      </section>
      <section id="features">
        <FeatureCarousel />
      </section>
      <section id="projects">
        <PortfolioGrid />
      </section>
      <section id="experiences">
        <Timeline />
      </section>
      <section id="marquee">
        <Marquee />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <section id="newsletter">
        <NewsletterSubscribe />
      </section>
    </>
  );
}