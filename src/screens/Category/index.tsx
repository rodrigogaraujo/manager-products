import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import uuid from 'react-native-uuid'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Container, Label, LabelWithMarginTop } from '~/components'
import { Button } from '~/components/Button'
import { Input } from '~/components/Input'
import { Content, WrapperButton, WrapperForm } from './style'
import { CategoryForm } from '~/types'
import { showToast } from '~/utils/services'
import api from '~/services/api'
import { RootStackParamList } from '~/routes'
import { TouchableOpacity } from 'react-native'

type CategoryScreenProps = NativeStackScreenProps<RootStackParamList, 'Category'>

export const Category = ({ route }: CategoryScreenProps) => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const schema = yup.object().shape({
    name: yup.string().required(),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = async (data: CategoryForm) => {
    try {
      setLoading(true)
      if (route.params?.category) {
        await api.put(`/categories/${route.params.category.id}`, { ...data })
        showToast('success', ':)', 'Categoria atualizado com sucesso!')
      } else {
        await api.post('/categories', { ...data, id: uuid.v4() })
        showToast('success', ':)', 'Categoria cadastrada com sucesso!')
      }

      navigation.goBack()
    } catch (er) {
      const { message } = er as { message: string }
      showToast('error', 'Atenção, houve um erro', message)
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    try {
      setLoading(true)
      if (route.params?.category) {
        await api.delete(`/categories/${route.params.category.id}`)
        showToast('success', ':)', 'Categoria deletado com sucesso!')
      }
      navigation.goBack()
    } catch (er) {
      const { message } = er as { message: string }
      showToast('error', 'Atenção, houve um erro', message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (route.params?.category) {
      setValue('name', route.params.category.name)
    }
  }, [route?.params])

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
          <Button
            text={route.params?.category ? 'Atualizar' : 'Cadastrar'}
            loading={loading}
            onPress={handleSubmit(onSubmit)}
          />
          {route.params?.category && (
            <TouchableOpacity
              style={{ marginTop: 32, justifyContent: 'center', alignItems: 'center' }}
              onPress={handleDelete}
            >
              <Label>Deletar categoria</Label>
            </TouchableOpacity>
          )}
        </WrapperButton>
      </Content>
    </Container>
  )
}
