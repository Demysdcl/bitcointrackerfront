// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const Link = ({title, href}: any) => <li>
    <a onClick={() => router.push(href)} className="hover:underline cursor-pointer">{title}</a>
  </li>

  return <div>
    <header className="w-full bg-indigo-600 text-white p-4 flex justify-between px-10">
      <h1 className="text-lg font-bold">Bitcoin Tracker</h1>
      <ul className="flex gap-4">
        <Link title="Meu investimentos" href="investimentos" />
        <Link title="Cadastrar" href="cadastrar" />
      </ul>
    </header>
    <div className="mx-auto max-w-5xl mt-8">
      <Component {...pageProps} />
    </div>
    
  </div> 
}
export default MyApp
