import { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as SplashScreen from 'expo-splash-screen'

import { SignIn } from '~/screens/SignIn'
import { Home } from '~/screens/Home'
import { useAuth } from '~/hooks/Auth'
import AppLoading from 'expo-app-loading'

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
  const { user, loading } = useAuth()

  if (loading) {
    return <AppLoading />
  }

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      {user === undefined ? (
        <>
          <HomeStack.Screen name='SignIn' component={SignIn} />
        </>
      ) : (
        <HomeStack.Screen name='Home' component={Home} />
      )}
    </HomeStack.Navigator>
  )
}

export default Routes
