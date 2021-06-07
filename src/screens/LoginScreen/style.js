import styled from 'styled-components/native'

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: #FFFFFF;
  `,
  Logo: styled.Image`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  `,
  Field: styled.TextInput`
    border-width: 1px;
    border-color: #000;
    background-color: #FFF;
    border-radius: 5px;
    color: #000;
    font-size: 15px;
    padding: 10px;
    margin-bottom: 15px;
  `,
  ButtonArea: styled.TouchableOpacity`
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,
  ButtonText: styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
  `
}