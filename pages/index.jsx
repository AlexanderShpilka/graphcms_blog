import Head from 'next/head'

import { Categories, PostCard, PostWidget } from '../components'
import { FeaturedPosts } from '../sections'

import { getPosts } from '../services'

const Home = ({ posts }) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>CMS Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post) => (
            <PostCard key={post.node.title} post={post.node} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}

export default Home
