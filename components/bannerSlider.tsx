"use client";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

const tagColors = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-purple-400"];

// function SampleNextArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background:"green", width: "40px", height: "40px", borderRadius: "50%", textAlign: "center", lineHeight: "40px", fontSize: "24px" }}
//       onClick={onClick}
//     >
//       {/* You can customize the content of the button if needed */}
//       <span>sdjbjsdfjkdsbjf</span>
//     </div>
//   );
// }

// function SamplePrevArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, width: "40px", height: "40px", borderRadius: "50%", textAlign: "center", lineHeight: "40px", fontSize: "24px" }}
//       onClick={onClick}
//     >
//       {/* You can customize the content of the button if needed */}
//       <span>&lt;</span>
//     </div>
//   );
// }



const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear"
};

export default function BannerSlider({ featureblogs }: { featureblogs: any[] }) {
  return (
    <div className="relative">
      <Slider {...settings}>
        {featureblogs.map((blog: any, index: number) => (
          <div key={index} className="flex gap-10 mb-14">
            <article  key={index} className="max-w-sm mx-auto md:max-w-none px-1 grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <Link href={`/blog/${blog.id}`} className="relative block group" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute inset-0 bg-gray-200 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                {blog.banner &&
                  <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={blog.banner} width="540" height="303" alt={blog.title} />
                  </figure>
                }
              </Link>
              <div data-aos="fade-left" data-aos-delay="200">
                <header>
                  <div className="mb-3">
                    {blog.tags &&
                      <div className="mb-3 flex gap-3">
                          {blog.tags.map((tag: any, tagIndex: number) => (
                              <Link key={tagIndex} href={`/tags/${tag}`} className={`inline-flex text-center text-white py-1 px-3 rounded-full transition duration-150 ease-in-out ${tagColors[Math.floor(Math.random() * tagColors.length)]} hover:scale-105`}>
                                  {tag}
                              </Link>
                          ))}
                      </div>
                    }
                  </div>
                  <h3 className="h3 text-2xl lg:text-3xl mb-2">
                    <Link href={`/blog/${blog.id}`} className="transition duration-150 ease-in-out">{blog.title}</Link>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 grow">{blog.description}</p>
                <footer className="flex items-center mt-4">
                  <div>
                    <span className="text-gray-500">{blog.date}</span>
                  </div>
                </footer>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
}
