import { useEffect, useState } from 'react'
import { Bitcoin } from '../../api/bitcoin'
import bitcoinService from '../../api/bitcoin.service'
import Datasource from './Datasource'
import ItemCard from './ItemCard'

const Investimentos = () => {
  const [userPurchase, setUserPurchase] = useState<Bitcoin[]>([])

  useEffect(() => {
    const list = bitcoinService.findAll()
    setUserPurchase(list)
  }, [])

  return (
    <div className="dark:text-white">
      <h1 className="text-3xl font-bold mb-10 w-full md:w-auto">
        Meus Investimentos
      </h1>
      {userPurchase ? (
        <>
          <Datasource
            className="hidden md:block"
            userPurchase={userPurchase}
            setUserPurchase={setUserPurchase}
          />
          <div className="md:hidden">
            {userPurchase?.map((item) => (
              <ItemCard
                setUserPurchase={setUserPurchase}
                userPurchase={userPurchase}
                bitcoin={item}
                key={item._id}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-3xl text-red-700">Sem investimentos</div>
      )}
    </div>
  )
}

export default Investimentos
