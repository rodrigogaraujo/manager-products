import React, { useEffect } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading'
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
import AppProvider from './src/hooks'

const App = () => {
  const navigation = React.useRef<NavigationContainerRef<RootStackParamList> | null>(null)
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

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
          <AppProvider>
            <Routes />
          </AppProvider>
          <Toast />
        </KeyboardAvoidingView>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
