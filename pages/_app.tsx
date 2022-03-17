import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import Menu from '../components/menu'
import { applyTheme } from '../service/theme.service'
import './style.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    applyTheme()
  }, [])

  return (
    <div className="w-screen">
      <header className="fixed top-0 z-50 w-screen bg-indigo-600 text-white flex justify-center p-4 px-10">
        <div className="flex justify-between max-w-7xl flex-1">
          <h1
            className="text-lg font-bold cursor-pointer"
            onClick={() => router.push('/')}
          >
            Bitcoin Tracker
          </h1>

          <Menu />
        </div>
      </header>
      <div className="mx-auto w-screen max-w-5xl mt-14 p-4">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
export default MyApp
