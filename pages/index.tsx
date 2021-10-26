import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import bitcoinService from './api/bitcoin.service'



const Home: NextPage = () => {
  const [bitValue, setBitvalue] = useState<number>(0)


  const fetchData = async () => {
    const bitcoin = await bitcoinService.getBitcoinValue()    
    setBitvalue(bitcoin)
  }

  

  useEffect(() => {
    fetchData()
    const oneHour = 10 * 1000
    const interval = setInterval(() => fetchData(), oneHour)
    return () => { 
      clearInterval(interval)
    }
  })

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Card className="w-96 ">
        <div>
          <span className="bg-indigo-600 text-white p-2 font-bold block mb-4">
            Valor atual:
          </span>
          <span className="font-bold text-2xl md:text-5xl text-gray-600">
            R$ {bitValue && bitValue.toLocaleString('pt-BR')}
          </span>
        </div>
      </Card>

      <Card className="w-96 ">
        <div>
          <span className="bg-indigo-600 text-white p-2 font-bold block mb-4">
            Total investido:
          </span>
          <span className="font-bold text-2xl md:text-5xl text-gray-600">
            R$ 5.000,00
          </span>
        </div>
      </Card>
    </div>
  )
}

export default Home
