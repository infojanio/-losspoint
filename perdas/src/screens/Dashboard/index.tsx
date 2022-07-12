import React from 'react'
import { Control, Controller } from 'react-hook-form'

import {Container, Header, Title, Form, Fields } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { InputForm } from '../../components/Form/InputForm'


export function Dashboard(){ 
  

  function handleSubmit() {}

    return (
      
      <Container>                                 
        <Logo />    
        <Header>       
        <Title>Cadastro de Ocorrências</Title>
        </Header> 

        <Form>
          <Fields>
            <Input
              placeholder="Nº Hidrômetro"
            />
         
          </Fields>
          <Button 
          title='Cadastrar'
          onPress={handleSubmit}
          />
        </Form> 
      </Container>
      
    )
    }
