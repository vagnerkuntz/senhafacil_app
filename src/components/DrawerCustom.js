import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { useStateValue } from '../contexts/StateContext'

const DrawerArea = styled.View`
  flex: 1;
  background-color: #F5F6FA;
`

const DrawerLogoArea = styled.View``

const DrawerLogo = styled.Image`
  width: 150px;
  height: 200px;
`

const DrawerScroller = styled.ScrollView``

export default (props) => {
  const navigation = useNavigation()
  const [context, dispatch] = useStateValue()

  return (
    <DrawerArea>
        <DrawerLogoArea>
          <DrawerLogo source={require('../assets/logo.png')} resizeMode="contain" />
        </DrawerLogoArea>
        <DrawerScroller>

        </DrawerScroller>
    </DrawerArea>
  )
}