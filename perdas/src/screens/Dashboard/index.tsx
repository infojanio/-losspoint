import React from 'react'
import { Input } from '../../components/Form/Input'
import { useForm } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'
import {Container, Header, Title } from './styles'
import { Logo } from '../../components/Logo'

export function Dashboard(){ 
  
    return (
      <>
      <Container> 
               <Logo />  
                
        <Header>  
        
        <Title>Cadastro de Ocorrências</Title>
        </Header>
     
    
      </Container>
      </>
    )
    }
