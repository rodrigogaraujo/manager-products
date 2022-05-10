import React, { useCallback, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import uuid from 'react-native-uuid'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Container, LabelWithMarginTop } from '~/components'
import { Button } from '~/components/Button'
import { Input } from '~/components/Input'
import { Content, WrapperButton, WrapperForm } from './style'
import { Category, ProductForm } from '~/types'
import { formatReal, showToast } from '~/utils/services'
import { InputSelect } from '~/components/InputSelect'
import ModalCategory from './components/ModalCategory'
import api from '~/services/api'
import { ScrollView } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'

export const Product = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [categorySelected, setCategorySelected] = useState<Category>()
  const [categories, setCategories] = React.useState<Category[]>([])

  const { width } = Dimensions.get('window')

  const schema = yup.object().shape({
    name: yup.string().required(),
    value: yup.string().required(),
    description: yup.string().required(),
    category: yup.object().required(),
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
      description: '',
      value: '',
      category: {} as Category,
    },
  })

  const onSubmit = async (data: ProductForm) => {
    try {
      if (data.category && !data.category.id) {
        showToast('info', ':)', 'Selecione uma categoria')
        return
      }
      setLoading(true)
      await api.post('/products', { ...data, id: uuid.v4() })
      showToast('success', ':)', 'Produto cadastrado com sucesso!')
      navigation.goBack()
    } catch (er) {
      const { message } = er as { message: string }
      showToast('error', 'Atenção, houve um erro', message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (categorySelected) setValue('category', categorySelected)
  }, [categorySelected])

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        setLoading(true)
        const { data } = await api.get('categories')
        setCategories(data)
        setLoading(false)
      }
      getData()
    }, [])
  )

  return (
    <Container>
      <Content>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1, width: width - 80 }}
        >
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
            <LabelWithMarginTop>Valor</LabelWithMarginTop>
            <Controller
              control={control}
              name='value'
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder=''
                  accessibilityLabel='Valor'
                  defaultValue=''
                  autoCapitalize='none'
                  autoCorrect={false}
                  onBlur={onBlur}
                  onChangeText={(e) => {
                    onChange(`${Number(e.replace(/[^a-zA-Z0-9 ]/g, ''))}`)
                  }}
                  value={formatReal(Number(value))}
                  hasValidation
                  keyboardType='numeric'
                  error={!!errors?.value}
                  password={false}
                />
              )}
            />
            <LabelWithMarginTop>Breve descrição</LabelWithMarginTop>
            <Controller
              control={control}
              name='description'
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder='Digite a descrição'
                  accessibilityLabel='Breve descrição'
                  defaultValue=''
                  autoCapitalize='none'
                  autoCorrect={false}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  hasValidation
                  error={!!errors?.description}
                  password={false}
                />
              )}
            />
            <LabelWithMarginTop>Categoria</LabelWithMarginTop>
            <Controller
              control={control}
              name='category'
              render={({ field: { onChange, onBlur, value } }) => (
                <InputSelect
                  placeholder='Selecione a categoria'
                  accessibilityLabel='Valor'
                  defaultValue=''
                  autoCapitalize='none'
                  autoCorrect={false}
                  onBlur={onBlur}
                  editable={false}
                  onChangeText={onChange}
                  value={value.name}
                  hasValidation
                  keyboardType='numeric'
                  error={!!errors?.category}
                  setShowModal={setShowModal}
                />
              )}
            />
            <WrapperButton>
              <Button text='Cadastrar' loading={loading} onPress={handleSubmit(onSubmit)} />
            </WrapperButton>
          </WrapperForm>
        </ScrollView>
      </Content>
      <ModalCategory
        message='Selecione a categoria'
        transparent
        setSelected={setCategorySelected}
        selected={categorySelected}
        modalIsVisible={showModal}
        onChangeVisible={() => setShowModal(false)}
        action={() => setShowModal(false)}
        categories={categories}
      />
    </Container>
  )
}
