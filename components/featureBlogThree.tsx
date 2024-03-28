import { getFeaturePostsMeta } from '@/app/lib/posts'
import ListItem from './list-item'

export default async function FeatureBlogThree() {
  const blogs = await getFeaturePostsMeta()

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">The most innovative businesses choose Simple</h2>
          </div>

          <ul className="grid grid-cols-3 max-md:grid-cols-1 list-none p-2 max-md:px-12 lg:gap-10 md:gap-5">
            <ListItem post={blogs[0]} />
            <ListItem post={blogs[1]} />
            <ListItem post={blogs[2]} />
          </ul>
        </div>
      </div>
    </section>
  )
}