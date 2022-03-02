import { MenuIcon } from '@heroicons/react/solid'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'
import OptionMenu from '../components/OptionMenu'
import OutsideAlerter from '../components/Outsider'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className="w-screen">
      <header className="w-screen bg-indigo-600 text-white flex justify-center p-4 px-10">
        <div className="flex justify-between max-w-7xl flex-1">
          <h1
            className="text-lg font-bold cursor-pointer"
            onClick={() => router.push('/')}
          >
            Bitcoin Tracker
          </h1>

          <OptionMenu
            setShowMobileMenu={setShowMobileMenu}
            className="hidden md:flex gap-4"
          />

          <div className="flex md:hidden relative">
            <MenuIcon
              width="24"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />

            {showMobileMenu && (
              <OutsideAlerter handleOutside={() => setShowMobileMenu(false)}>
                <OptionMenu
                  setShowMobileMenu={setShowMobileMenu}
                  className="z-10 gap-4 absolute right-0 top-6 bg-indigo-600 p-10 flex flex-col"
                />
              </OutsideAlerter>
            )}
          </div>
        </div>
      </header>
      <div className="mx-auto w-screen max-w-5xl mt-8 p-4">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
export default MyApp
