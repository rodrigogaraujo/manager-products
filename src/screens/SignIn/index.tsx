import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Container } from '~/components'
import { Button } from '~/components/Button'
import { Input } from '~/components/Input'
import { Content, WrapperForm } from './style'
import { SignInCredentials } from '~/types'

export const SignIn = () => {
  const [loading, setLoading] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: SignInCredentials) => {
    try {
      setLoading(true)
      const { email, password } = data
      console.log(email, password)
    } catch (er) {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Content>
        <WrapperForm>
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder='Seu email'
                accessibilityLabel='Seu email'
                testID='email'
                defaultValue=''
                value={value}
                hasValidation
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType='email-address'
                autoCapitalize='none'
                error={!!errors?.email}
              />
            )}
          />
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder='Sua senha'
                accessibilityLabel='Sua senha'
                testID='password'
                defaultValue=''
                autoCapitalize='none'
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                hasValidation
                error={!!errors?.password}
                password
              />
            )}
          />
        </WrapperForm>
        <Button text='Entrar' loading={loading} onPress={handleSubmit(onSubmit)} />
      </Content>
    </Container>
  )
}
