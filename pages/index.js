import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Image from "next/image"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src="/logo.svg"
          width={250}
          height={250}
        />
        <Header title="Hier ensteht ein EYE-TEACH Projekt" />
            <Header title="A EYE-TEACH project in the making." />
      </main>

      <Footer />
    </div>
  )
}
