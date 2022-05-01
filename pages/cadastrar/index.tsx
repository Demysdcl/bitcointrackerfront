import { NextPage } from 'next'
import { useState } from 'react'
import { Bitcoin } from '../../api/bitcoin'
import bitcoinService from '../../api/bitcoin.service'
import InputLabel from '../../components/InputLabel'

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

  const setValue = (value: any, field: keyof Bitcoin) => {
    setBitcoinDTO({
      ...bitcoinDTO,
      [field]: value,
    })
  }

  return (
    <div className="text-gray-700 dark:text-white">
      <h1 className="text-3xl font-bold mb-10"> Cadastro </h1>

      <span className="text-3 text-green-600 mb-4 block">{message}</span>

      <form
        className="w-5/6 max-w-sm"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <InputLabel
          id="bitcoinValue"
          labelText="Valor do bitcoin"
          value={bitcoinDTO.bitcoinValue}
          onChange={(value) => setValue(value, 'bitcoinValue')}
        />

        <InputLabel
          id="purchaseValue"
          labelText="Valor comprado"
          value={bitcoinDTO.purchaseValue}
          onChange={(value) => setValue(value, 'purchaseValue')}
        />

        <InputLabel
          id="purchaseValue"
          labelText="Quantidade"
          value={bitcoinDTO.fractionQty}
          onChange={(value) => setValue(value, 'fractionQty')}
        />

        <InputLabel
          id="purchaseDate"
          labelText="Data da compra"
          type="date"
          value={bitcoinDTO.purchaseDate}
          onChange={(value) => setValue(value, 'purchaseDate')}
        />

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
