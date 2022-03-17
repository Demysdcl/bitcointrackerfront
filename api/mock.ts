import { faker } from '@faker-js/faker'
import { Bitcoin } from './bitcoin'

export const bitcoinList: Bitcoin[] = Array(50)
  .fill('')
  .map<Bitcoin>(() => ({
    bitcoinValue: faker.datatype.float({ min: 150_000 }),
    fractionQty: faker.datatype.float({ max: 20 }),
    purchaseDate: faker.date.past().toISOString(),
    purchaseValue: Number(faker.finance.amount()),
    _id: faker.datatype.uuid(),
  }))
