import Layout from '@/components/portfolio/Layout'
import HeroSection from '@/components/portfolio/HeroSection'
import AboutSection from '@/components/portfolio/AboutSection'
import SkillsSection from '@/components/portfolio/SkillsSection'
import ProjectsSection from '@/components/portfolio/ProjectsSection'
import ContactSection from '@/components/portfolio/ContactSection'
import Footer from '@/components/portfolio/Footer'

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </Layout>
  )
}

export default App
