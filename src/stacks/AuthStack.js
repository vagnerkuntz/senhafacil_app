import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import PreloadScreen from '../screens/PreloadScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainDrawer from './MainDrawer'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator screenOptions={({ navigation }) => ({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={require('../assets/arrow-left.png')}
            resizeMode="contain"
            style={{height: 25, width: 50, left: 10}}
          />
        </TouchableOpacity>
      ),

      headerStyle: {
        backgroundColor: '#F5F6FA',
        elevation: 0,
        shadowOpacity: 0,

      },
      headerTitleAlign: 'center'
    })}>
      <Stack.Screen name="PreloadScreen" component={PreloadScreen} options={{headerShown: false}} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: true
        }}
      />
      <Stack.Screen name="MainDrawer" component={MainDrawer} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}
