import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { RightItem } from './components/RightItem'

import { Container, TextInputStyled } from './styles'

interface Props extends TextInputProps {
  hasValidation?: boolean
  error?: boolean
  value?: string
  password?: boolean
}

export const Input = ({ password, hasValidation, error, value, ...rest }: Props) => {
  const [showPass, setShowPass] = useState(password ? true : false)
  const theme = useTheme()
  return (
    <Container>
      <TextInputStyled
        {...rest}
        value={value}
        selectionColor={theme.COLORS.PRIMARY}
        secureTextEntry={showPass ? true : false}
      />
      <RightItem
        password={password}
        hasValidation={hasValidation}
        error={error}
        value={value}
        setShowPass={setShowPass}
        showPass={showPass}
      />
    </Container>
  )
}
