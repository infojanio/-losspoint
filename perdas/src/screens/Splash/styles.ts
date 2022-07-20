import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
`
export const Separator = styled.View`
  background-color: '#f3f3';
  width: 1;
  height: 10;
`

export const Image = styled.Image`
  height: 180;
  width: 160;
  margin-top: 60;
  align-items: 'center';
  justify-content: 'center';
`
export const TitleWrapper = styled.View`
  align-items: center;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 87px;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(32)}px;
  text-align: center;
  text-align: center;
  margin-top: 45px;
`
export const SubTitle = styled.Text`
  justify-content: center;
  text-align: center;
  margin-bottom: 87px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(16)}px;
`
export const ButtonNext = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
