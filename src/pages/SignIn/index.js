import React from "react";
import {View, Text}from 'react-native';

import{ Background, Container, Logo, AreaInput,Input } from './styles';

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
          </Container>

       </Background>
    )
}

//teste gity