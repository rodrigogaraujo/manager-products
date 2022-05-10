import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import uuid from 'react-native-uuid'
import { useNavigation } from '@react-navigation/native'

import { Container, LabelWithMarginTop } from '~/components'
import { Button } from '~/components/Button'
import { Input } from '~/components/Input'
import { Content, WrapperButton, WrapperForm } from './style'
import { CategoryForm } from '~/types'
import { showToast } from '~/utils/services'
import api from '~/services/api'

export const Category = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const schema = yup.object().shape({
    name: yup.string().required(),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = async (data: CategoryForm) => {
    try {
      setLoading(true)
      await api.post('/categories', { ...data, id: uuid.v4() })
      showToast('success', ':)', 'Categoria cadastrada com sucesso!')
      navigation.goBack()
    } catch (er) {
      const { message } = er as { message: string }
      showToast('error', 'Atenção, houve um erro', message)
      setLoading(false)
    }
  }

  return (
    <Container>
      <Content>
        <WrapperForm>
          <LabelWithMarginTop>Nome</LabelWithMarginTop>
          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder='Digite o nome'
                accessibilityLabel='Nome'
                defaultValue=''
                value={value}
                hasValidation
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                error={!!errors?.name}
              />
            )}
          />
        </WrapperForm>
        <WrapperButton>
          <Button text='Cadastrar' loading={loading} onPress={handleSubmit(onSubmit)} />
        </WrapperButton>
      </Content>
    </Container>
  )
}
