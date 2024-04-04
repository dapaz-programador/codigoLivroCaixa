import React, { useContext} from "react";
import { Platform }from 'react-native';

import {
  Background,
  Container, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText 
} from '../SignIn/styles';

import {AuthContext} from '../../contexts/auth';

export default function SignUp(){

    const { user } = useContext(AuthContext)

    function handleSignUp(){
        console.log(user.nome);
    }


    return(
        <Background>

            <Container 
              behavior={Platform.OS === 'ios' ? 'padding' : ''}
              enabled
            >
            
              <AreaInput>
            
                  
                <Input placeholder="Nome"/>
              
              </AreaInput>

              <AreaInput>
                <Input  placeholder="Seu email"/>
                 
                
              
              </AreaInput>

              <AreaInput>
                <Input  placeholder="Sua senha"/>
                 
                
              
              </AreaInput>

              <SubmitButton onPress={handleSignUp}>
                 <SubmitText> Cadastrar</SubmitText>
              </SubmitButton>


            </Container>
        </Background>
    )
}