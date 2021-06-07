import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerCustom from '../components/DrawerCustom'
import HomeScreen from '../screens/HomeScreen'

const Drawer = createDrawerNavigator()

export default () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerCustom {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  )
}
