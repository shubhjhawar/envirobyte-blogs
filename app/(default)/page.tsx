import BlogsComponent from '@/components/blogsComponent'
import BlogsBanner from '@/components/blogsBanner'
import Newsletter from '@/components/newsletter'
import BannerSlider from '@/components/bannerSlider';

export default function Home({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {

    let page: number = parseInt(searchParams.page as string, 10);
    page = !page || page <1 ? 1 : page;

  return (
    <div className='mx-auto max-w-6xl pt-32 pb-5 md:pt-40'>
      <BlogsBanner />
      <BlogsComponent page={page}/>
      <Newsletter />
    </div>
  )
}
