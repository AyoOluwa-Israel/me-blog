import Head from 'next/head'
import Header from '../components/Header'
import Star from '../assets/Images/star.png'
import Image from 'next/image'
import {sanityClient, urlFor} from '../sanity'
import {Post} from '../typings'

interface Props { 
  posts: Post[];
}


export default function Home(props: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Me-blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0">
        <div className="space-y-5 px-10 ">
          <h1 className="max-w-xl font-serif text-6xl">
            {' '}
            <span className="underline decoration-black decoration-4">
              MeBlog
            </span>{' '}
            is a place to write, read, and connect
          </h1>
          <h2>
            Its easy and free to post your thinking on any topic and connect
            with millions or readers
          </h2>
        </div>

        <img
          src="star.png"
          alt="star"
          className="hidden h-32 p-10 md:inline-flex lg:h-full"
        />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name, 
    image
  },
  description,
  mainImage
  
  }`

  const posts = await sanityClient.fetch(query);

  return{
    props:{
      posts, 
    }
  }

}
