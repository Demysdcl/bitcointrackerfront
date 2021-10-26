import httpService from "../../http/http.service"
import { Bitcoin } from "./bitcoint"

const bitcoinServce = {
     getBitcoinValue: async (): Promise<any> => {
         try {
            const response = await httpService.get('/bitcoin')
            return response.data
         } catch (err) {
            console.error(err)
         }
     },
     createBitcoin: async (bitcoin: Bitcoin): Promise<any> => {
        try {
            const response = await httpService.post('/bitcoin/create')
            return response.data
         } catch (err) {
             console.error(err)
         }
     } 
}

export default bitcoinServce