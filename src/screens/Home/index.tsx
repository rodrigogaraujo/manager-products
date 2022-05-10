import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useTheme } from 'styled-components'
import { Row, Title } from '~/components'
import api from '~/services/api'
import { Product } from '~/types'
import { FabButton, Container, IconStyled } from './styles'

export const Home = () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const [products, setProducts] = useState<Product[]>()
  const [loading, setLoading] = useState(false)

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        setLoading(true)
        const { data } = await api.get('products')
        setProducts(data)
        setLoading(false)
      }
      getData()
    }, [])
  )

  return (
    <Container>
      <Row style={{ marginTop: 24, justifyContent: 'center' }}>
        <Title>Manager</Title>
        <Title bold>Products</Title>
      </Row>
      {loading ? (
        <ActivityIndicator color={theme.COLORS.PRIMARY} size='small' />
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => <></>}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
      <FabButton style={{ elevation: 3 }} onPress={() => navigation.navigate('Product')}>
        <IconStyled color={theme.COLORS.GRAY_07} size={24} name='plus' />
      </FabButton>
    </Container>
  )
}
