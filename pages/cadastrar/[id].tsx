import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { Bitcoin } from '../../api/bitcoin'
import bitcoinService from '../../api/bitcoin.service'

const Editar: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [message, setMessage] = useState('')
  const [updated, setUpdated] = useState(false)

  const [bitcoinDTO, setBitcoinDTO] = useState<Bitcoin>({} as Bitcoin)

  const setValue = (value: any, field: string) => {
    setBitcoinDTO({
      ...bitcoinDTO,
      [field]: value,
    })
  }

  useEffect(() => {
    if (id || updated) {
      const findOne = async () => {
        const response = await bitcoinService.findById(id as string)

        setBitcoinDTO(response)
      }
      findOne()
      setUpdated(false)
    }
  }, [id, updated])

  const handleSubmit = async () => {
    await bitcoinService.update(bitcoinDTO)
    setUpdated(true)
    setMessage('Atualização realizada com sucesso!')
  }

  return (
    <div className="dark:text-white">
      <h1 className="text-3xl font-bold mb-10"> Edição </h1>

      <span className="text-3 text-green-600 mb-4 block">{message}</span>

      <form
        className="w-5/6 max-w-sm "
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold"
            htmlFor="bitcoinValue"
          >
            Valor do bitcoin
          </label>
          <input
            id="bitcoinValue"
            type="number"
            value={bitcoinDTO?.bitcoinValue}
            onChange={(event) => setValue(event.target.value, 'bitcoinValue')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold"
            htmlFor="purchaseValue"
          >
            Valor comprado
          </label>
          <input
            id="purchaseValue"
            type="number"
            value={bitcoinDTO?.purchaseValue}
            onChange={(event) => setValue(event.target.value, 'purchaseValue')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold"
            htmlFor="fractionQty"
          >
            Quantidade
          </label>
          <input
            id="fractionQty"
            type="number"
            value={bitcoinDTO?.fractionQty}
            onChange={(event) => setValue(event.target.value, 'fractionQty')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold"
            htmlFor="fractionQty"
          >
            Data da compra
          </label>
          <input
            id="fractionQty"
            type="date"
            value={bitcoinDTO?.purchaseDate}
            onChange={(event) => setValue(event.target.value, 'purchaseDate')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          />
        </div>

        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Editar
        </button>
      </form>
    </div>
  )
}

export default Editar
