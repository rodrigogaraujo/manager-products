import React from 'react'
import { FlatList, Modal as ModalNative, ScrollView, View } from 'react-native'

import { Category } from '~/types'
import {
  BodyText,
  ButtonItem,
  ButtonItemText,
  ButtonsWrapper,
  IconCloseButton,
  IconStyled,
} from './styles'
import { Label } from '~/components'
import { Button } from '~/components/Button'
import { useNavigation } from '@react-navigation/native'

interface IModalProps {
  onChangeVisible: () => void
  transparent: boolean
  modalIsVisible: boolean
  message: string
  action?: () => void
  selected: Category | undefined
  setSelected: (cat: Category) => void
  categories: Category[]
}

export default function ModalCategory({
  onChangeVisible,
  transparent,
  modalIsVisible,
  message,
  action,
  selected,
  setSelected,
  categories,
}: IModalProps) {
  const navigation = useNavigation()

  return (
    <ModalNative
      animationType='fade'
      transparent={transparent}
      visible={modalIsVisible}
      onRequestClose={onChangeVisible}
    >
      <View
        style={{
          backgroundColor: '#0008',
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 40,
            paddingVertical: 40,
          }}
        >
          <IconCloseButton onPress={action}>
            <IconStyled name='close' size={28} />
          </IconCloseButton>
          <BodyText>{message}</BodyText>
          <ButtonsWrapper>
            {categories && categories.length ? (
              <FlatList
                data={categories}
                style={{ maxHeight: 250 }}
                renderItem={({ item }) => (
                  <ButtonItem
                    selected={selected?.id === item.id}
                    onPress={() => {
                      setSelected(item)
                      onChangeVisible()
                    }}
                  >
                    <ButtonItemText selected={selected?.id === item.id}>{item.name}</ButtonItemText>
                  </ButtonItem>
                )}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <Label>Sem categorias até o momento</Label>
            )}
          </ButtonsWrapper>
          <Button
            text='Nova categoria'
            onPress={() => {
              navigation.navigate('Category')
              onChangeVisible()
            }}
          />
        </View>
      </View>
    </ModalNative>
  )
}
