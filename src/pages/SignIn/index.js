import React from "react";
import {View, Text}from 'react-native';

import{ 
  Background,
  Container,
  Logo,
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText,
  Link,
  LinkText,

 } from './styles';

//import { Link } from "@react-navigation/native";

export default function SignIn(){
    return(
       <Background>
        
          <Container>
            <Logo
              source={require('../../assets/Logo.png')}
            />

            <AreaInput>
               <Input
                 placeholder="Seu email"
               />
            </AreaInput>

            <AreaInput>
               <Input
                 placeholder="Sua senha"
               />
            </AreaInput>

            <SubmitButton>
              <SubmitText>Acessar</SubmitText>
            </SubmitButton>

            <Link>
            <LinkText> Criar uma conta!</LinkText>
            </Link>

          </Container>

       </Background>
    )
}

//teste gity