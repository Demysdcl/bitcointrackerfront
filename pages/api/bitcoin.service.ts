import httpService from "../../http/http.service"

const bitcoinServce = {
     getBitcoinValue: async (): Promise<any> => {
         try {
            const response = await httpService.get('/bitcoin')
            return response.data
         } catch (err) {
             return null
         }
     }
}

export default bitcoinServce