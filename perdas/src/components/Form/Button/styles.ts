import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TouchableOpacity)`
  width: 50%;
  background-color: #50c2c9;
  border-radius: 5px;
  align-items: center;
  padding: 10px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: #ffffff;
  font-weight: bold;
`
