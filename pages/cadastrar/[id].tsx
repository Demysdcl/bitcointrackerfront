import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { Bitcoin } from '../../api/bitcoin'
import bitcoinService from '../../api/bitcoin.service'
import InputLabel from '../../components/InputLabel'

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
