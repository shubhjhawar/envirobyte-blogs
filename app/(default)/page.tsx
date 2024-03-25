import Hero from '@/components/hero-home'
import Features from '@/components/features-home'
import FeaturesBlocks from '@/components/features-blocks'
import FeaturesWorld from '@/components/features-world'
import News from '@/components/news'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <FeaturesWorld />
      <News />
      <Newsletter />
    </>
  )
}