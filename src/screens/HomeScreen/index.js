import React from 'react'
import { useNavigation } from '@react-navigation/native'

import S from './style'

import api from '../../services/api'

export default () => {
  const navigation = useNavigation()

  // remover depois
  const handleLogoutButton = async () => {
    console.log('clicado')

    await api.logout()
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }]
    })
  }

  return (
    <S.Container>
      <S.Texto>Abd home</S.Texto>
      <S.Button title="SAIR" onPress={handleLogoutButton} />
    </S.Container>
  )
}