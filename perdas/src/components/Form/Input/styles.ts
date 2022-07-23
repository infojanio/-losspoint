import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TextInput)`
  flex: 1;
  width: 100%;
  height: 12%;
  padding: 18px 18px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 10px;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};
`
