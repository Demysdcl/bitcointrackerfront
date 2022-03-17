import { format } from 'date-fns'
import { Dispatch, FC, SetStateAction } from 'react'
import { Bitcoin } from '../../api/bitcoin'
import Action from './Action'

interface DatasourceProps {
  userPurchase: Bitcoin[]
  setUserPurchase: Dispatch<SetStateAction<Bitcoin[]>>
  className: string
}
const Datasource: FC<DatasourceProps> = ({
  userPurchase,
  setUserPurchase,
  className,
}) => {
  return (
    <table className={`w-11/12 ${className}`}>
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
        {userPurchase?.map((item, index) => (
          <tr className="border-b text-center" key={index}>
            <td className="py-2"> {item?.fractionQty} </td>
            <td> R$ {item.purchaseValue?.toLocaleString('pr-BR')} </td>
            <td> R$ {item.bitcoinValue?.toLocaleString('pr-BR')} </td>
            <td>
              {item?.purchaseDate &&
                format(new Date(item?.purchaseDate), 'dd-MM-yyyy')}{' '}
            </td>
            <td>
              <Action
                setUserPurchase={setUserPurchase}
                userPurchase={userPurchase}
                className="flex items-center justify-center gap-4"
                item={item}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Datasource
