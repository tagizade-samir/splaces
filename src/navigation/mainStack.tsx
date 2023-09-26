import {createStackNavigator} from '@react-navigation/stack'

import {Home} from '../screens/home'

const MainStack = createStackNavigator()

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  )
}
