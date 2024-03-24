import { getFeaturePostsMeta } from "@/app/lib/posts"
import BannerSlider from "./bannerSlider";

export default async function BlogsComponent() {
    const blogs = await getFeaturePostsMeta()

    return (
        <section>
            <div className="pb-12 md:pb-20">
              <h1 className="text-4xl font-bold w-full flex justify-center mb-10" data-aos="fade-up">Feature Blog Heading</h1>
              <BannerSlider featureblogs={blogs}/>
            </div>
        </section>
    )
}