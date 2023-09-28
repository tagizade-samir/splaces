import {useUserStore} from '../modules/store'

export const useAuth = () => {
  const {user} = useUserStore()

  return {isAuth: !!user}
}
