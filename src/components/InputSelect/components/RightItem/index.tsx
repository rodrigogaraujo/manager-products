import React from 'react'
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
  setShowModal: (bool: boolean) => void
}

export const RightItem = ({ hasValidation, error, value, setShowModal }: Props) => {
  const theme = useTheme()
  return (
    <>
      {hasValidation && error ? (
        <IconStyled type='error' name='close-circle' size={theme.FONTSSIZE.font18} />
      ) : null}
      {hasValidation && error ? (
        <IconPasswordStyled type='error' name='close-circle' size={theme.FONTSSIZE.font18} />
      ) : null}
      {hasValidation && !error && value ? (
        <IconStyled name='check-circle' type='success' size={theme.FONTSSIZE.font18} />
      ) : null}

      <TouchableOpacityStyled onPress={() => setShowModal(true)}>
        <IconStyledRelative name={'chevron-down'} size={theme.FONTSSIZE.font24} />
      </TouchableOpacityStyled>
    </>
  )
}
