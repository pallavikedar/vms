import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Industries from "@/components/sections/industries"
import Portfolio from "@/components/sections/portfolio"
import Team from "@/components/sections/team"
import Testimonials from "@/components/sections/testimonials"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import Navigation from "@/components/navigation"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
