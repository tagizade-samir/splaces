import {NavigationContainer} from '@react-navigation/native'
import React, {FC} from 'react'

import {AuthStackScreen} from './authStack'
import {MainStackScreen} from './mainStack'
import {useAuth} from '../hooks'

export const RootNavigation: FC = () => {
  const {isAuth} = useAuth()

  return (
    <NavigationContainer>{isAuth ? <MainStackScreen /> : <AuthStackScreen />}</NavigationContainer>
  )
}
