import httpService from '../../http/http.service'
import { Bitcoin } from './bitcoin'

const bitcoinService = {
  getBitcoinValue: async (): Promise<any> => {
    try {
      const response = await httpService.get('/bitcoin/value')
      return response.data
    } catch (err) {
      console.error(err)
      return 0
    }
  },
  createBitcoin: async (bitcoin: Bitcoin): Promise<any> => {
    try {
      const response = await httpService.post('/bitcoin', bitcoin)
      return response.data
    } catch (err) {
      console.error(err)
    }
  },
  findAll: async (): Promise<any[]> => {
    const response = await httpService.get('/bitcoin')
    return response.data
  },
  findById: async (id: string): Promise<any> => {
    const response = await httpService.get(`/bitcoin/${id}`)
    return response.data
  },
  delete: async (id: string): Promise<any> => {
    const response = await httpService.delete(`/bitcoin/${id}`)
    return response.data
  },
  update: async (bitcoin: Bitcoin): Promise<any> => {
    const response = await httpService.put(`/bitcoin/${bitcoin._id}`, bitcoin)
    return response.data
  },
  getTotal: async (): Promise<any> => {
    const response = await httpService.get(`/bitcoin/total`)
    return response.data
  },
  getDashboard: async (): Promise<any> => {
    const response = await httpService.get(`/bitcoin/dashboard`)
    return response.data
  },
}

export default bitcoinService
