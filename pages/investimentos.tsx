import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import { NextPage } from "next";
import { Bitcoin } from "./api/bitcoin";

const Investimentos: NextPage = () => {
    const list: Array<Bitcoin> = [{
        fractionQty: 0.210,
        purchaseValue: 50.00,
        bitcoinValue: 350000.80,
        purchaseDate: new Date()
    },{
        fractionQty: 0,
        purchaseValue: 0,
        bitcoinValue: 0,
        purchaseDate: new Date()
    },{
        fractionQty: 0,
        purchaseValue: 0,
        bitcoinValue: 0,
        purchaseDate: new Date()
    },{
        fractionQty: 0,
        purchaseValue: 0,
        bitcoinValue: 0,
        purchaseDate: new Date()
    }] 

    return <div>
        <table>
            <thead>
                <tr className="bg-indigo-600 text-white">
                    <th className="px-8 py-2">Valor pago</th>
                    <th className="px-8 py-2">Quantidade</th>
                    <th className="px-8 py-2">Valor do Bitcoin</th>
                    <th className="px-8 py-2">Data da compra</th>
                    <th className="px-8 py-2">Ações</th>
                </tr>
            </thead>
            <tbody className="border">
                {list.map((item, index) => (<tr className="border-b text-center" key={index}>
                        <td className="py-2"> {item.fractionQty.toFixed(2)} </td>
                        <td> R$ {item.purchaseValue.toFixed(2)} </td>
                        <td> R$ {item.bitcoinValue.toFixed(2)} </td>
                        <td> {format( item.purchaseDate, 'dd-MM-yyyy')} </td>
                        <td className="flex items-center gap-4">  
                            <a className="cursor-pointer pt-2"> <PencilIcon width="24" /> </a>
                            <a className="cursor-pointer pt-2"> <TrashIcon width="24"/> </a>
                        </td>
                    </tr>)
                )}
            </tbody>
        </table>
    </div>
}

export default Investimentos