import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/common/Button'
import { MoralisProvider, useMoralis } from 'react-moralis'
import MobileMenus from '../components/Header/MobileMenus'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const [mobileMenuIsOpen, mobileMenuIsOpenSet] = useState<boolean>(false)

  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <div className="flex min-h-screen w-full flex-col">
        <Header
          mobileMenuIsOpenSet={mobileMenuIsOpenSet}
          mobileMenuIsOpen={mobileMenuIsOpen}
        />
        <div className="relative">
          <MobileMenus mobileMenuIsOpen={mobileMenuIsOpen} />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </MoralisProvider>
  )
}

export default MyApp
