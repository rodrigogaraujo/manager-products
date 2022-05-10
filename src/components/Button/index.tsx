import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components'

import { Container, TextButton } from './styles'

interface Props extends TouchableOpacityProps {
  text: string
  loading?: boolean
}

export const Button = ({ text, loading = false, ...rest }: Props) => {
  const theme = useTheme()
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator color={theme.COLORS.GRAY_07} size='small' />
      ) : (
        <TextButton>{text}</TextButton>
      )}
    </Container>
  )
}
