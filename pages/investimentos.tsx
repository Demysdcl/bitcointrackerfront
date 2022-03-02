import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import { format } from 'date-fns'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Bitcoin } from './api/bitcoin'
import bitcoinService from './api/bitcoin.service'

const Investimentos: NextPage = () => {
  const router = useRouter()
  const [userPurchase, setUserPurchase] = useState<Bitcoin[]>([])

  useEffect(() => {
    const list = bitcoinService.findAll()
    console.log({ list })
    setUserPurchase(list)
  }, [])

  const handleDelete = (id: string) => {
    bitcoinService.delete(id)
    setUserPurchase(userPurchase.filter((item) => item._id !== id))
  }

  const Action = ({ item, className }: any) => (
    <section className={className}>
      <a
        className="cursor-pointer"
        onClick={() => router.push(`cadastrar/${item._id}`)}
      >
        <PencilIcon width="24" />
      </a>

      <a
        className="cursor-pointer"
        onClick={() => handleDelete(item._id || '')}
      >
        <TrashIcon width="24" />
      </a>
    </section>
  )

  const ItemCard = ({ bitcoin }: any) => (
    <Card className="relative mb-4 block md:hidden">
      <div className="flex flex-col relative gap-2 mt-8">
        <section className="flex justify-between">
          <strong>Quantidade:</strong>
          <span> BTC {bitcoin?.purchaseValue.toLocaleString('pt-BR')}</span>
        </section>
        <section className="flex justify-between">
          <strong>Valor pago:</strong>
          <span> R$ {bitcoin?.purchaseValue.toLocaleString('pt-BR')}</span>
        </section>
        <section className="flex justify-between">
          <strong>Valor do bitcoin:</strong>
          <span> R$ {bitcoin?.bitcoinValue.toLocaleString('pt-BR')}</span>
        </section>
        <section className="flex justify-between">
          <strong>Data da compra:</strong>
          <span> R$ {bitcoin?.bitcoinValue.toLocaleString('pt-BR')}</span>
        </section>
      </div>

      <Action
        className="rounded-t-md absolute w-full right-0 top-0 flex justify-end p-2 gap-2 bg-indigo-600"
        item={bitcoin}
      />
    </Card>
  )

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 w-full md:w-auto">
        {' '}
        Meus Investimentos{' '}
      </h1>
      {userPurchase ? (
        <table className="hidden md:block w-11/12">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="px-8 py-2">Quantidade</th>
              <th className="px-8 py-2">Valor pago</th>
              <th className="px-8 py-2">Valor do Bitcoin</th>
              <th className="px-8 py-2">Data da compra</th>
              <th className="px-8 py-2">Ações</th>
            </tr>
          </thead>
          <tbody className="border">
            {userPurchase &&
              userPurchase.map((item, index) => (
                <tr className="border-b text-center" key={index}>
                  <td className="py-2"> {item?.fractionQty} </td>
                  <td> R$ {item.purchaseValue?.toLocaleString('pr-BR')} </td>
                  <td> R$ {item.bitcoinValue?.toLocaleString('pr-BR')} </td>
                  <td>
                    {' '}
                    {item?.purchaseDate &&
                      format(new Date(item?.purchaseDate), 'dd-MM-yyyy')}{' '}
                  </td>
                  <td>
                    <Action
                      className="flex items-center justify-center gap-4"
                      item={item}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className="text-3xl text-red-700">Sem investimentos</div>
      )}
      {userPurchase?.map((item) => (
        <ItemCard bitcoin={item} key={item._id} />
      ))}
    </div>
  )
}

export default Investimentos
