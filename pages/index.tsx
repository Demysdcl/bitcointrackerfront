import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import bitcoinService from './api/bitcoin.service'

type Dashboard = {
  totalInvested: number
  fractions: number
}

const Home: NextPage = () => {
  const [bitValue, setBitvalue] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [dashboard, setDashboard] = useState<Dashboard>()

  useEffect(() => {
    if(bitValue && dashboard) {
      setTotal(dashboard.fractions * bitValue)
    }
  }, [bitValue, dashboard])


  const fetchData = async () => {
    const bitcoin = await bitcoinService.getBitcoinValue()    
    setBitvalue(bitcoin)
  }

  const getTotal = async () => {
    const totalResp = await bitcoinService.getDashboard()
    setDashboard(totalResp)
  }

  useEffect(() => {
    fetchData()
    getTotal()
    const oneHour = 10 * 1000
    const interval = setInterval(() => fetchData(), oneHour)
    return () => { 
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10"> Dashboard </h1>  
      
      <div className="flex flex-wrap gap-4 justify-center">
        
        <Card className="w-96 ">
          <div>
            <span className="bg-indigo-600 text-white p-2 font-bold block mb-4">
              Valor atual:
            </span>
            <span className="font-bold text-2xl md:text-5xl text-gray-600">
              R$ {bitValue && bitValue.toFixed(2)}
            </span>
          </div>
        </Card>

        <Card className="w-96 ">
          <div>
            <span className="bg-indigo-600 text-white p-2 font-bold block mb-4">
              Total investido:
            </span>
            <span className="font-bold text-2xl md:text-5xl text-gray-600">
              R$ {dashboard && dashboard.totalInvested.toFixed(2)}
            </span>
          </div>
        </Card>

        <Card className="w-96 ">
          <div>
            <span className="bg-indigo-600 text-white p-2 font-bold block mb-4">
              Total adquirido:
            </span>
            <span className="font-bold text-2xl md:text-5xl text-gray-600">
              R$ {dashboard && dashboard.fractions.toFixed(2)}
            </span>
          </div>
        </Card>

        <Card className="w-96 ">
          <div>
            <span className="bg-indigo-600 text-white p-2 font-bold block mb-4">
              Resultado atual:
            </span>
            <span className="font-bold text-2xl md:text-5xl text-gray-600">
              R$ { total.toFixed(2) }
            </span>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Home
