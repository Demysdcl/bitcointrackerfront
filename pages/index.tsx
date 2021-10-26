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
      <Card className="w-96 ">
        <div>
          <span className="font-bold block mb-4">
            Valor atual:
          </span>
          <span className="font-bold text-5xl text-blue-500">
            R$ {bitValue && bitValue.toFixed(2)}
          </span>
        </div>
      </Card>
  )
}

export default Home
