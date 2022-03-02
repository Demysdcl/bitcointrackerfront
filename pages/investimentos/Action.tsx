import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router'
import { Dispatch, FC, SetStateAction } from 'react'
import { Bitcoin } from '../api/bitcoin'
import bitcoinService from '../api/bitcoin.service'

interface ActionProps {
  item: Bitcoin
  className?: string
  color?: 'black' | 'white'
  userPurchase: Bitcoin[]
  setUserPurchase: Dispatch<SetStateAction<Bitcoin[]>>
}

const Action: FC<ActionProps> = ({
  item,
  className,
  color = 'black',
  userPurchase,
  setUserPurchase,
}) => {
  const router = useRouter()

  const handleDelete = (id: string) => {
    bitcoinService.delete(id)
    setUserPurchase(userPurchase.filter((item: Bitcoin) => item._id !== id))
  }

  return (
    <section className={className}>
      <a
        className="cursor-pointer"
        onClick={() => router.push(`cadastrar/${item._id}`)}
      >
        <PencilIcon width="24" color={color} />
      </a>

      <a
        className="cursor-pointer"
        onClick={() => handleDelete(item._id || '')}
      >
        <TrashIcon width="24" color={color} />
      </a>
    </section>
  )
}

export default Action
