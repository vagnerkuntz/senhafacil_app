import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import S from './style'

import { useStateValue } from '../../contexts/StateContext'

import api from '../../services/api'

export default () => {
  const navigation = useNavigation()
  const [context, dispatch] = useStateValue()

  useEffect(() => {
    const checkLogin = async () => {
      let token = await api.getToken()

      if (token) {
        let result = await api.validateToken()
        if (result.error === '') {
          dispatch({ type: 'setUser', payload: { user: result.user } })

          navigation.reset({
            index: 1,
            routes: [{name: 'HomeScreen'}]
          })
        } else {
          alert(result.error)

          dispatch({ type: 'setToken', payload: { token: '' } })

          navigation.reset({
            index: 1,
            routes: [{name: 'LoginScreen'}]
          })
        }
      } else {
        navigation.reset({
          index: 1,
          routes: [{name: 'LoginScreen'}]
        })
      }

    }

    checkLogin()
  }, [])

  // remover depois
  const handleLogoutButton = async () => {
    await api.logout()
    navigation.reset({
      index: 1,
      routes: [{name: 'LoginScreen'}]
    })
  }

  return (
    <S.Container>
      <S.LoadingIcon color="#8863e6" size="large" />
      <S.Button title="SAIR" onPress={handleLogoutButton} />
    </S.Container>
  )
}