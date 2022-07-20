import * as React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Form/Button'
import LogoSvg from '../../assets/torneira/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'

import { TitleWrapper, Title, Container, SubTitle, ButtonNext } from './styles'

export default function Splash() {
  function handleNext() {
    console.log('próxima tela')
  }

  return (
    <Container>
      <Logo />

      <TitleWrapper>
        <LogoSvg width={RFValue(160)} height={RFValue(160)} />

        <Title>
          Combate às perdas {'\n'}
          de água na distribuição.
        </Title>
      </TitleWrapper>

      <SubTitle>
        Utilize o aplicativo para enviar{'\n'}a localização de vazamentos de
        água.
      </SubTitle>

      <ButtonNext>
        <Button title="Próximo" onPress={handleNext} />
      </ButtonNext>
    </Container>
  )
}
