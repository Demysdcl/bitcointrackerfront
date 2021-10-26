import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import { NextPage } from "next";
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { Bitcoin } from "./api/bitcoin";
import bitcoinService from './api/bitcoin.service';

const Investimentos: NextPage = () => {

    const router = useRouter()
    const [userPurchase, setUserPurchase] = useState<Bitcoin[]> ([])

    useEffect(() => {
        const getAll = async () => {
            const list = await bitcoinService.findAll()
            setUserPurchase(list)
        }
        getAll()
    }, [])

    const handleDelete = async (id: string) => {
        await bitcoinService.delete(id)
        setUserPurchase(userPurchase.filter((item) => item._id !== id))
    }

    return <div>
         <h1 className="text-3xl font-bold mb-10"> Meus Investimentos </h1>  
        {userPurchase ? (<table>
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
                {userPurchase && userPurchase.map((item, index) => (<tr className="border-b text-center" key={index}>
                        <td className="py-2">  {item?.fractionQty} </td>
                        <td> R$ {item.purchaseValue?.toLocaleString('pr-BR')} </td>
                        <td> R$ {item.bitcoinValue?.toLocaleString('pr-BR')} </td>
                        <td> {item?.purchaseDate && format(new Date(item?.purchaseDate), 'dd-MM-yyyy')} </td>
                        <td className="flex items-center justify-center gap-4">
                            <a className="cursor-pointer pt-2" onClick={() => router.push(`cadastrar/${item._id}`)} > 
                                <PencilIcon width="24" />
                            </a>
                            
                            <a className="cursor-pointer pt-2" onClick={() => handleDelete(item._id || '')}> 
                                <TrashIcon width="24"/> 
                            </a>
                        </td>
                    </tr>)
                )}
            </tbody>
        </table>) : (<div className="text-3xl text-red-700">
            Sem investimentos
        </div>)}
    </div>
}

export default Investimentos