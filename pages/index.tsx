import React from 'react'
React.useLayoutEffect = React.useEffect

import Head from 'next/head'
import { Scroll } from 'scrollex'

import SectionEnd from '../components/section/SectionEnd'
import SectionHeading from '../components/section/SectionHeading'
import SectionStart from '../components/section/SectionStart'

const Home = () => {
  return (
    <>
      <Head>
        <title>Scrollex heading</title>
        <meta
          name="description"
          content="Build a full screen heading that supports horizontal scrolling with Next.js, Tailwind CSS and Scrollex."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative h-full w-full">
        <Scroll.Container scrollAxis="y" className="relative h-full">
          <SectionStart />
          <SectionHeading />
          <SectionEnd />
        </Scroll.Container>
      </main>
    </>
  )
}

export default Home
