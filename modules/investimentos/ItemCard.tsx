import { Dispatch, FC, SetStateAction } from 'react'
import Card from '../dashboard/Card'
import { Bitcoin } from '../../api/bitcoin'
import Action from './Action'

interface ItemCardProps {
  bitcoin: Bitcoin
  userPurchase: Bitcoin[]
  setUserPurchase: Dispatch<SetStateAction<Bitcoin[]>>
}

const ItemCard: FC<ItemCardProps> = ({
  bitcoin,
  userPurchase,
  setUserPurchase,
}) => (
  <Card className="relative mb-4 block ">
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
      setUserPurchase={setUserPurchase}
      userPurchase={userPurchase}
      color="white"
      className="rounded-t-md absolute w-full right-0 top-0 flex justify-end p-2 gap-2 bg-indigo-600"
      item={bitcoin}
    />
  </Card>
)

export default ItemCard
