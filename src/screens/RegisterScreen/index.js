import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import S from './style'

import { useStateValue } from '../../contexts/StateContext'
import api from '../../services/api'

export default () => {
  const navigation = useNavigation()
  const [context, dispatch] = useStateValue()

  const [nameField, setNameField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')
  const [passwordConfirmField, setPasswordConfirmField] = useState('')

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Realizar Cadastro'
    })
  }, [])

  const handleRegisterButton = async () => {
    if (nameField, emailField, passwordField, passwordConfirmField) {
      let result = await api.register(nameField, emailField, passwordField, passwordConfirmField)

      if (result.error === '') {
        dispatch({ type: 'setToken', payload: { token: result.token } })
        dispatch({ type: 'setUser', payload: { user: result.user } })
        
        navigation.reset({
          index: 1,
          routes:[{name: 'HomeScreen'}]
        })
      } else {
        alert(result.error)
      }
    } else {
      alert('Preencha todos os campos.')
    }
  }

  return (
    <S.Container>
      <S.Field
        placeholder="Digite seu Nome Completo"
        value={nameField}
        onChangeText={t => setNameField(t)}
      />
      
      <S.Field
        placeholder="Digite seu E-mail"
        keyboardType="email-address"
        autoCompleteType="email"
        value={emailField}
        onChangeText={t => setEmailField(t)}
      />

      <S.Field
        placeholder="Digite sua Senha"
        secureTextEntry={true}
        value={passwordField}
        onChangeText={t => setPasswordField(t)}
      />

      <S.Field
        placeholder="Confirme sua Senha"
        secureTextEntry={true}
        value={passwordConfirmField}
        onChangeText={t => setPasswordConfirmField(t)}
      />

      <LinearGradient colors={['#FFF5B0', '#FC0074']} useAngle={true} angle={45} style={{marginBottom: 15, borderRadius: 20}}>
        <S.ButtonArea onPress={handleRegisterButton}>
          <S.ButtonText>Cadastrar-se</S.ButtonText>
        </S.ButtonArea>
      </LinearGradient>
    </S.Container>
  )
}