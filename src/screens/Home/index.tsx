import React, { useEffect } from 'react'
import { useTheme } from 'styled-components'
import { Row, Title } from '~/components'
import api from '~/services/api'
import { showToast } from '~/utils/services'
import { FabButton, Container, IconStyled } from './styles'

export const Home = () => {
  const theme = useTheme()

  useEffect(() => {
    async function getProducts() {
      try {
        const resp = await api.get('/products')
        console.log(resp.data)
      } catch (er) {
        const { message } = er as { message: string }
        showToast('error', 'Houve um erro', message)
      }
    }
    getProducts()
  }, [])

  return (
    <Container>
      <Row style={{ marginTop: 24, justifyContent: 'center' }}>
        <Title>Manager</Title>
        <Title bold>Products</Title>
      </Row>

      <FabButton style={{ elevation: 3 }}>
        <IconStyled color={theme.COLORS.GRAY_07} size={24} name='plus' />
      </FabButton>
    </Container>
  )
}
