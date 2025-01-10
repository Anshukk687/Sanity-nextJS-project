import { useRouter } from 'next/router'
import Head from 'next/head'
import { createClient } from 'next-sanity'
import { PortableText } from 'next-sanity';
import NavBar from '@/components/NavBar';

const Post = ({blog}) => {
  const router = useRouter()
  const { slug } = router.query

  return (
  <>
    <NavBar />
    <div id="main" className="relative">
      <div className='pt-10'>
        <div>
          <div className="container py-6 md:py-10">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                  {blog.title}
                </h1>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <img src="/assets/img/anshu.png" className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                      alt="author image" />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-grey-10">By Anshu</span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">January 07, 2024</span>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none pt-8">
              <PortableText value={blog.content} />
                {/* {blog.blogimage && (
                  <div>
                    <img 
                      src={blog.blogimage.assets.url} 
                      alt={blog.blogimage.altText || "Blog image"} 
                      style={{ width: '20%', height: '10%' }} 
                    />
                    <span>{blog.blogimage.caption}</span>
                  </div>
                )} */}
              </div>
              <div className="flex pt-10">
                <a href="/"
                  className="rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20">Frontend</a>
                <a href="/"
                  className="ml-2 block rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20">Design</a>
              </div>
              <div className="mt-10 flex justify-between border-t border-lila py-12">
                <a href="/" className="flex items-center">
                  <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                  <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">Previous Post</span>
                </a>
                <a href="/" className="flex items-center">
                  <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">Next Post</span>
                  <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, ATOM.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <a href="/">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>

      </div>

      <script src="/assets/js/main.js"></script>
    </div>
  </>
  )
}

export default Post

export const getServerSideProps= async (context) => {
  const { slug } = context.query
  const client = createClient({
      projectId: 'h46ykdai',
      dataset: 'production',
      useCdn: false,
  });
  const query = `*[_type == "blog" && slug.current == $slug][0]`;
  const blog = await client.fetch(query, { slug });
  return {
    props: {
      blog
    }
  }
}
