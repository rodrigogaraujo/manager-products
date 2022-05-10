import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppLoading from 'expo-app-loading'

import { useAuth } from '~/hooks/Auth'
import { SignIn } from '~/screens/SignIn'
import { Home } from '~/screens/Home'
import { Product } from '~/screens/Product'
import { Category } from '~/screens/Category'
import { Product as ProductType } from '~/types'

export type RootStackParamList = {
  SignIn: undefined
} & {
  Home: undefined
  Product: { product?: ProductType } | undefined
  Category: undefined
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
        <>
          <HomeStack.Screen name='Home' component={Home} />
          <HomeStack.Screen name='Product' component={Product} />
          <HomeStack.Screen name='Category' component={Category} />
        </>
      )}
    </HomeStack.Navigator>
  )
}

export default Routes
