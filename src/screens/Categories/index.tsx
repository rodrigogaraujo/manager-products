import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useTheme } from 'styled-components'
import { Title } from '~/components'
import api from '~/services/api'
import { Category } from '~/types'
import { FabButton, Container, IconStyled, WrapperProduct } from './styles'

export const Categories = () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const [products, setCategories] = useState<Category[]>()
  const [loading, setLoading] = useState(false)

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        setLoading(true)
        const { data } = await api.get('categories')
        setCategories(data)
        setLoading(false)
      }
      getData()
    }, [])
  )

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color={theme.COLORS.PRIMARY} size='small' />
      ) : (
        <FlatList
          data={products}
          contentContainerStyle={{ paddingLeft: 30, paddingRight: 30 }}
          renderItem={({ item }) => (
            <WrapperProduct onPress={() => navigation.navigate('Category', { category: item })}>
              <Title>{item.name}</Title>
            </WrapperProduct>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
      <FabButton style={{ elevation: 3 }} onPress={() => navigation.navigate('Category')}>
        <IconStyled color={theme.COLORS.GRAY_07} size={24} name='plus' />
      </FabButton>
    </Container>
  )
}
