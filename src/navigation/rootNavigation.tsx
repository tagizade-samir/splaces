import {NavigationContainer} from '@react-navigation/native'
import React, {FC} from 'react'

import {MainStackScreen} from './mainStack'

export const RootNavigation: FC = () => {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  )
}
