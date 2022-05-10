import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { RightItem } from './components/RightItem'

import { Container, TextInputStyled } from './styles'

interface Props extends TextInputProps {
  hasValidation?: boolean
  error?: boolean
  value?: string
  setShowModal: (bool: boolean) => void
}

export const InputSelect = ({ hasValidation, error, value, setShowModal, ...rest }: Props) => {
  const theme = useTheme()
  return (
    <Container onPress={() => setShowModal(true)}>
      <TextInputStyled {...rest} value={value} selectionColor={theme.COLORS.PRIMARY} />
      <RightItem
        hasValidation={hasValidation}
        error={error}
        value={value}
        setShowModal={setShowModal}
      />
    </Container>
  )
}
