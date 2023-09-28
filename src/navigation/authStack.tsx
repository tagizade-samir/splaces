import {createStackNavigator} from '@react-navigation/stack'

import {AuthRoutes} from '../global'
import {Login} from '../screens/login'
import {SignUp} from '../screens/signup'

const AuthStack = createStackNavigator()

export type AuthStackParamList = {
  [AuthRoutes.login]: undefined
  [AuthRoutes.signup]: undefined
}

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={AuthRoutes.login} component={Login} />
      <AuthStack.Screen name={AuthRoutes.signup} component={SignUp} />
    </AuthStack.Navigator>
  )
}
