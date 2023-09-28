import {createStackNavigator} from '@react-navigation/stack'

import {Routes} from '../global'
import {Explore} from '../screens/explore'
import {Home} from '../screens/home'
import {MapViewScreen} from '../screens/mapView'
import {Profile} from '../screens/profile'

const MainStack = createStackNavigator()

export type MainStackParamList = {
  [Routes.home]: undefined
  [Routes.mapView]: {
    isCreate?: boolean
  }
  [Routes.profile]: undefined
  [Routes.explore]: undefined
}

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name={Routes.home} component={Home} />
      <MainStack.Screen name={Routes.explore} component={Explore} />
      <MainStack.Screen name={Routes.profile} component={Profile} />
      <MainStack.Screen name={Routes.mapView} component={MapViewScreen} />
    </MainStack.Navigator>
  )
}
