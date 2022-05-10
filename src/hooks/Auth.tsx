import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useContext, useEffect, useState } from 'react'

import { User } from '~/types'

interface AuthState {
  user: User
}

export interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  loading: boolean
  loadAll(): Promise<void>
  signOut(): void
  signIn(user: SignInCredentials): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used whitin an AuthProvider')
  }

  return context
}

export const AuthProvider: React.FC = ({ children }: any) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true)

  async function loadStoragedData(): Promise<void> {
    const [user]: any = await AsyncStorage.multiGet(['@productsManager:user'])

    if (user[1]) {
      const usr = JSON.parse(user[1])
      setData({ user: usr })
    }
    setLoading(false)
  }

  const signIn = async (user: SignInCredentials) => {
    if (user.email === 'admin@admin.com' && user.password === '123456') {
      const userData = { ...user, name: 'Rodrigo Gomes' }
      await AsyncStorage.multiSet([['@productsManager:user', JSON.stringify(userData)]])
      setTimeout(() => {}, 2000)
      setData({ user: userData })
    } else {
      throw new Error('Usuário e senha incorretos')
    }
  }

  const signOut = async () => {
    await AsyncStorage.multiRemove(['@productsManager:user'])
    setData({} as AuthState)
    setLoading(false)
  }

  useEffect(() => {
    loadStoragedData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        loadAll: loadStoragedData,
        signOut,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
