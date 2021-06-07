import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import S from './style'

import { useStateValue } from '../../contexts/StateContext'
import api from '../../services/api'

export default () => {
  const navigation = useNavigation()
  const [context, dispatch] = useStateValue()

  const [loading, setLoading] = useState(true)

  return (
    <S.Container>
      <S.Controller>
        {loading &&
          <S.LoadingIcon color="#8863E6" size="large" />
        }
        {!loading && context.user.user.length > 0 &&
          <>
            <S.HeadTitle>Olá, {context.user.user.name}</S.HeadTitle>
          </>
        }
      </S.Controller>
    </S.Container>
  )
}
