import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'

import {
  IconStyled,
  TouchableOpacityStyled,
  IconStyledRelative,
  IconPasswordStyled,
} from '../../styles'

interface Props extends TextInputProps {
  hasValidation?: boolean
  error?: boolean
  value?: string
  password?: boolean
  setShowPass: (bool: boolean) => void
  showPass: boolean
}

export const RightItem = ({
  password,
  hasValidation,
  error,
  value,
  setShowPass,
  showPass,
}: Props) => {
  const theme = useTheme()
  return (
    <>
      {hasValidation && error && !password ? (
        <IconStyled type='error' name='close-circle' size={theme.FONTSSIZE.font18} />
      ) : null}
      {hasValidation && error && password ? (
        <IconPasswordStyled type='error' name='close-circle' size={theme.FONTSSIZE.font18} />
      ) : null}
      {hasValidation && !error && value && !password ? (
        <IconStyled name='check-circle' type='success' size={theme.FONTSSIZE.font18} />
      ) : null}
      {password ? (
        <TouchableOpacityStyled onPress={() => setShowPass(!showPass)}>
          <IconStyledRelative name={showPass ? 'eye' : 'eye-off'} size={theme.FONTSSIZE.font18} />
        </TouchableOpacityStyled>
      ) : null}
    </>
  )
}
