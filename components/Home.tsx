import Head from 'next/head'
import React from 'react'
import Carousel from './Home/Carousel'
import Hero from './Home/Hero'
import NewsLetter from './Home/NewsLetter'
import TopCollectibles from './Home/TopCollectibles'

function Home({ data }: any) {
  return (
    <div>
      <Head>
        <title>Crypto.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <NewsLetter />
      <Carousel data={data} />
      <TopCollectibles />
    </div>
  )
}

export default Home
