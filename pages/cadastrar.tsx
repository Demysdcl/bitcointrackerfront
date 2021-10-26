import { NextPage } from "next";
import { useEffect, useState } from "react";

const Cadastrar: NextPage = () => {

    const [formatedDate, setFormatedDate] = useState<string>()

    const [bitcoinDTO, setBitcoinDTO] = useState({
        fractionQty: 0,
        purchaseValue: 0,
        bitcoinValue: 0,
        purchaseDate: new Date()
    }) 

    const setValue = (value: any, field: string) => {
        setBitcoinDTO({
            ...bitcoinDTO,
            [field]: value,
        })
    }

    useEffect(() => {
        setFormatedDate(bitcoinDTO.purchaseDate.toLocaleString('pt-BR'))
    }, [bitcoinDTO.purchaseDate])



   return <div>
      <h1 className="text-3xl font-bold mb-10"> Cadastro </h1>   

      <form className="w-96">
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold" htmlFor='bitcoinValue'>
                Valor do bitcoin
            </label>
            <input
                id="bitcoinValue"
                type="number"
                value={bitcoinDTO.bitcoinValue}
                onChange={(event) => setValue(event.target.value, 'bitcoinValue')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" />
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold" htmlFor='purchaseValue'>
                Valor comprado
            </label>
            <input
                id="purchaseValue"
                type="number"
                value={bitcoinDTO.purchaseValue}
                onChange={(event) => setValue(event.target.value, 'purchaseValue')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" />
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold" htmlFor='fractionQty'>
                Quantidade
            </label>
            <input
                id="fractionQty"
                type="number"
                value={bitcoinDTO.fractionQty}
                onChange={(event) => setValue(event.target.value, 'fractionQty')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" />
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold" htmlFor='fractionQty'>
                Data da compra
            </label>
            <input
                id="fractionQty"
                type="date"
                value={formatedDate}
                onChange={(event) => setValue(event.target.value, 'purchaseDate')}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" />
        </div>
    
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md " type="submit">Salvar</button>
      </form>
    </div>
}

export default Cadastrar