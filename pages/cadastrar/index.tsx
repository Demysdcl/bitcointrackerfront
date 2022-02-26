import { NextPage } from 'next'
import { useState } from 'react'
import { Bitcoin } from '../api/bitcoin'
import bitcoinService from '../api/bitcoin.service'

const Cadastrar: NextPage = () => {
  const initialState = {
    fractionQty: 0,
    purchaseValue: 0,
    bitcoinValue: 0,
    purchaseDate: new Date().toISOString(),
  }

  const [message, setMessage] = useState('')

  const [bitcoinDTO, setBitcoinDTO] = useState(initialState)

  const handleSubmit = async () => {
    const toSave: Bitcoin = {
      ...bitcoinDTO,
      purchaseDate: new Date(bitcoinDTO.purchaseDate).toISOString(),
    }
    await bitcoinService.createBitcoin(toSave)
    setBitcoinDTO(initialState)
    setMessage('Cadastro realizado com sucesso!')
  }

  const setValue = (value: any, field: string) => {
    setBitcoinDTO({
      ...bitcoinDTO,
      [field]: value,
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10"> Cadastro </h1>

      <span className="text-3 text-green-600 mb-4 block">{message}</span>

      <form
        className="w-5/6 max-w-sm"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="bitcoinValue"
          >
            Valor do bitcoin
          </label>
          <input
            id="bitcoinValue"
            type="number"
            value={bitcoinDTO.bitcoinValue}
            onChange={(event) => setValue(+event.target.value, 'bitcoinValue')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="purchaseValue"
          >
            Valor comprado
          </label>
          <input
            id="purchaseValue"
            type="number"
            value={bitcoinDTO.purchaseValue}
            onChange={(event) => setValue(+event.target.value, 'purchaseValue')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="fractionQty"
          >
            Quantidade
          </label>
          <input
            id="fractionQty"
            type="number"
            value={bitcoinDTO.fractionQty}
            onChange={(event) => setValue(+event.target.value, 'fractionQty')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="date"
          >
            Data da compra
          </label>
          <input
            id="date"
            type="text"
            value={bitcoinDTO.purchaseDate}
            onChange={(event) => setValue(event.target.value, 'purchaseDate')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          />
        </div>

        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md "
          type="submit"
        >
          Salvar
        </button>
      </form>
    </div>
  )
}

export default Cadastrar
