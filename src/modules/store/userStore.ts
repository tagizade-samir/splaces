import AsyncStorage from '@react-native-async-storage/async-storage'
import {User} from 'firebase/auth'
import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'

interface UserState {
  user: User | null
  setUser: (newUser: User) => void
  removeUser: () => void
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (newUser: User) => set((state) => ({user: newUser})),
      removeUser: () => set((state) => ({user: null})),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
