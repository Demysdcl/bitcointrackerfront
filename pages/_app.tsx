// import '../styles/globals.css'
import { CashIcon, ChartBarIcon, DocumentAddIcon, MenuIcon } from '@heroicons/react/solid'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const Link = ({title, href, children}: any) => <li>
    <a onClick={() => router.push(href)} className="flex items-center gap-2 hover:underline cursor-pointer">
      {children}
      {title}
    </a>
  </li>

  return <div className="w-screen">
    <header className="w-screen bg-indigo-600 text-white flex justify-center p-4 px-10">
      <div className="flex justify-between  max-w-7xl flex-1">
        <h1 className="text-lg font-bold cursor-pointer" onClick={() => router.push('/')}>
          Bitcoin Tracker
        </h1>
        
        <ul className="hidden md:flex gap-4">
          <Link title="Dashbord" href="/">
            <ChartBarIcon width="16" />
          </Link>
          <Link title="Meu investimentos" href="/investimentos">
            <CashIcon width="16" />
          </Link>
          <Link title="Cadastrar" href="/cadastrar">
            <DocumentAddIcon width="16" />
          </Link>
        </ul>

        <div className="flex md:hidden">
          <MenuIcon width="24" />
        </div>
      </div>
    </header>
    <div className="mx-auto max-w-5xl mt-8 p-4">
      <Component {...pageProps} />
    </div>
    
  </div> 
}
export default MyApp
