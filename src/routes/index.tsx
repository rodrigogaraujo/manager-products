import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '~/screens/SignIn'
import { Home } from '~/screens/Home'

export type RootStackParamList = {
  SignIn: undefined
} & {
  Home: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const HomeStack = createNativeStackNavigator()

const Routes = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <HomeStack.Screen name='SignIn' component={SignIn} />
      <HomeStack.Screen name='Home' component={Home} />
    </HomeStack.Navigator>
  )
}

export default Routes
