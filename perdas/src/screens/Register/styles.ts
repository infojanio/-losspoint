import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px 40px;
`

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(108)}px;

  align-items: baseline;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 60px;
  //background-color: ${({ theme }) => theme.colors.background};
`

export const TitleWrapper = styled.View`
  align-items: center;
  text-align: center;
  margin-top: -40px;
  margin-bottom: 10px;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(22)}px;
  text-align: center;

  margin-top: 10px;
`
export const Form = styled.View`
  width: 100%;
  height: 70%;
  padding: 0px 25px;

  justify-content: space-between;
  //background-color: ${({ theme }) => theme.colors.background};
`
export const Fields = styled.View``

export const InputForm = styled.View``

export const Footer = styled.View`
  height: 10%;
 // background-color: ${({ theme }) => theme.colors.secundary_ligth};
`
