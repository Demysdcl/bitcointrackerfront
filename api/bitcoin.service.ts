import faker from '@faker-js/faker'
import { Bitcoin, Dashboard } from './bitcoin'
import { bitcoinList } from './mock'

let list = bitcoinList

const bitcoinService = {
  getBitcoinValue: (): number => {
    return Number(faker.finance.amount(260_000))
  },
  createBitcoin: (bitcoin: Bitcoin): Bitcoin => {
    bitcoin._id = faker.datatype.uuid()
    list.push(bitcoin)
    return bitcoin
  },
  findAll: (): Bitcoin[] => list,
  findById: async (id: string): Promise<any> => {
    return list.filter((item) => item._id === id)[0]
  },
  delete: (id: string): string => {
    list = list.filter((item) => item._id !== id)
    return 'Removido'
  },
  update: (bitcoin: Bitcoin): Bitcoin => {
    list = list.map((item) => {
      if (item._id === bitcoin._id) {
        return bitcoin
      }
      return item
    })
    return bitcoin
  },
  getTotal: (): number => {
    return Number(faker.finance.amount())
  },
  getDashboard: (): Dashboard => {
    return {
      fractions: list.reduce((acc, item) => acc + item.fractionQty, 0),
      totalInvested: list.reduce((acc, item) => acc + item.purchaseValue, 0),
    }
  },
}

export default bitcoinService
