import {axiosClient} from './axios'

export class Api {
  public static mockRequest = async () => {
    try {
      const response = await axiosClient.get('')
      return response.data
    } catch (error) {
      throw error
    }
  }
}
