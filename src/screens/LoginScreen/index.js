import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import S from './style'

import { useStateValue } from '../../contexts/StateContext'
import api from '../../services/api'

export default () => {
    const navigation = useNavigation()
    const [context, dispatch] = useStateValue()

    const [emailField, setEmailField] = useState('dasdsa@dasda.com')
    const [passwordField, setPasswordField] = useState('')

    const handleLoginButton = async () => {
        if (emailField && passwordField) {
            let result = await api.login(emailField, passwordField)

            console.log(result)

            if (result.error === '') {
                dispatch({ type: 'setToken', payload: { token: result.token } })
                dispatch({ type: 'setUser', payload: { user: result.user } })

                navigation.reset({
                    index: 1,
                    routes: [{ name: 'MainDrawer' }]
                })
            } else {
                alert(result.error)
            }
        } else {
            alert('Preencha os campos')
        }
    }

    const handleRegisterButton = () => {
        navigation.navigate('RegisterScreen')
    }

    return (
        <S.Container>
            <S.Logo source={require('../../assets/logo3.png')} resizeMode="contain" />

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

            <LinearGradient colors={['#00FF5B', '#0D20F6']} useAngle={true} angle={45} style={{ marginBottom: 15, borderRadius: 20 }}>
                <S.ButtonArea onPress={handleLoginButton}>
                    <S.ButtonText style={{ fontSize: 21 }}>Entrar</S.ButtonText>
                </S.ButtonArea>
            </LinearGradient>

            <S.ButtonArea onPress={handleRegisterButton}>
                <S.ButtonText style={{ color: '#262626' }}>Cadastrar-se</S.ButtonText>
            </S.ButtonArea>

        </S.Container>
    )
}
