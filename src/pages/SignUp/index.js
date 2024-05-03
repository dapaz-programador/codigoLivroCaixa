import React, { useContext, useState} from "react";
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

    const { SignUp } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp(){
        //console.log(user.nome);
        SignUp(email, password, nome);
    }


    return(
        <Background>

            <Container 
              behavior={Platform.OS === 'ios' ? 'padding' : ''}
              enabled
            >
            
              <AreaInput>   
                  <Input
                   placeholder="Nome"
                   value= {nome}
                   onChangeText={(Text) => setNome(text)}
                   />             
              </AreaInput>

              <AreaInput>
                <Input  
                   placeholder="Seu email"
                   value= {email}
                   onChangeText={(text) => setEmail(text)}
                   />
                 </AreaInput>

              <AreaInput>
                <Input  
                   placeholder="Sua senha"
                   value= {password}
                   onChangeText={(Text) => setPassword(text)}
                   secureTextEntry={true} // esconde a senha 
                   />
                 </AreaInput>

              <SubmitButton onPress={handleSignUp}>
                 <SubmitText> Cadastrar</SubmitText>
              </SubmitButton>


            </Container>
        </Background>
    )
}