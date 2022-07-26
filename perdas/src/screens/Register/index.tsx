import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import { Logo } from '../../components/Logo'
import { InputForm } from '../../components/Form/InputForm'
import { Input } from '../../components/Form/Input'

import {
  Container,
  Header,
  Title,
  TitleWrapper,
  Form,
  Fields,
  Footer,
} from './styles'
import { RFValue } from 'react-native-responsive-fontsize'
import { Button } from '../../components/Form/Button'

import LogoSvg from '../../assets/torneira/torneira.svg'
import { ButtonMedium } from '../../components/Form/ButtonMedium'

export function Register() {
  function handleRegister() {
    const data = {
      name,
      matricula,
      email,
      senha,
      confirmacao,
      whatssap,
    }
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Logo />
        <LogoSvg width={RFValue(90)} height={RFValue(90)} />
      </Header>

      <TitleWrapper>
        <Title>Cadastro</Title>
      </TitleWrapper>

      <Form>
        <Fields>
          <Input placeholder="Nome">
            <Icon name="chevron-left" size={18} color="#fff" />
          </Input>

          <Input placeholder="Matrícula" />

          <Input placeholder="Email">
            <Icon name="mail" size={18} color="#fff" />
          </Input>

          <Input placeholder="Senha" />
          <Input placeholder="Confirmar senha" />
          <Input placeholder="Whatssap" />
        </Fields>

        <ButtonMedium title="Enviar" onPress={handleRegister} />
      </Form>
    </Container>
  )
}
