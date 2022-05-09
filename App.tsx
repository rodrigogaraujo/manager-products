import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { ThemeProvider } from 'styled-components/native'
import Toast from 'react-native-toast-message'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'

import theme from './src/theme'
import Routes, { RootStackParamList } from './src/routes'
import { KeyboardAvoidingView, Platform } from 'react-native'

const App = () => {
  const navigation = React.useRef<NavigationContainerRef<RootStackParamList> | null>(null)
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  useEffect(() => {
    async function prepare() {
      try {
        if (!fontsLoaded) {
          await SplashScreen.preventAutoHideAsync()
        } else {
          await SplashScreen.hideAsync()
        }
      } catch (e) {
        console.warn(e)
      }
    }

    prepare()
  }, [fontsLoaded])

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer ref={navigation}>
        <KeyboardAvoidingView
          behavior={Platform.select({
            android: undefined,
            ios: 'padding',
          })}
          style={{ flex: 1 }}
          enabled
        >
          <Routes />
          <Toast />
        </KeyboardAvoidingView>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
