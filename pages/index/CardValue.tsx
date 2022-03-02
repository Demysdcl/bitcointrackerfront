import { FC } from 'react'
import Card from '../../components/Card'

interface CardValueProps {
  title: string
  value: string | undefined
  type?: 'R$' | 'BTC'
}

const CardValue: FC<CardValueProps> = ({ title, value, type = 'R$' }) => (
  <Card className="w-96 ">
    <div>
      <span className="bg-indigo-600 text-white p-2 font-bold block mb-4">
        {title}:
      </span>
      <span className="font-bold text-2xl md:text-5xl text-gray-600">
        <sup className="text-sm">{type}</sup> {value ?? Number(0).toFixed(2)}
      </span>
    </div>
  </Card>
)

export default CardValue
