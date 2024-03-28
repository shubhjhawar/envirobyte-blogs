import Hero from '@/components/hero-home'
import Features from '@/components/features-home'
import FeaturesBlocks from '@/components/features-blocks'
import FeaturesWorld from '@/components/features-world'
import Newsletter from '@/components/newsletter'
import FeatureBlogThree from '@/components/featureBlogThree'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <FeaturesWorld />
      <FeatureBlogThree />
      <Newsletter />
    </>
  )
}