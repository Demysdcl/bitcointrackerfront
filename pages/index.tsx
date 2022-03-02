import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Dashboard } from './api/bitcoin'
import bitcoinService from './api/bitcoin.service'

const Home: NextPage = () => {
  const [bitValue, setBitvalue] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [dashboard, setDashboard] = useState<Dashboard>()

  useEffect(() => {
    if (bitValue && dashboard) {
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

  const CardValue = ({ title, value, type = 'R$' }: any) => (
    <Card className="w-96 ">
      <div>
        <span className="bg-indigo-600 text-white p-2 font-bold block mb-4">
          {title}:
        </span>
        <span className="font-bold text-2xl md:text-5xl text-gray-600">
          <sup className="text-sm">{type}</sup> {value || Number(0).toFixed(2)}
        </span>
      </div>
    </Card>
  )

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10"> Dashboard </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        <CardValue
          title="Valor atual"
          value={bitValue && bitValue.toFixed(2)}
        />

        <CardValue
          title="Total investido"
          value={dashboard && dashboard.totalInvested.toFixed(2)}
        />

        <CardValue
          title="Total adquirido"
          value={dashboard && dashboard.fractions.toFixed(8)}
          type="BTC"
        />

        <CardValue title="Resultado atual" value={total && total.toFixed(2)} />
      </div>
    </div>
  )
}

export default Home
