import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Programs from '@/components/Programs'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Stats />
        <HowItWorks />
        <Programs />
        <Testimonials />
        <Partners />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}
