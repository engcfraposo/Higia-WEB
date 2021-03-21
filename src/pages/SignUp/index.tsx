import React, { useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/ButtonPrimary';

import { useToast } from '../../hooks/toast';

import { Container, Content, AnimationContainer, Background } from './styles';
import ButtonSecondary from '../../components/ButtonSecondary';
import ButtonPrimary from '../../components/ButtonPrimary';
import { useAuth } from '../../hooks/auth';
import Modal from '../../components/Modal';


interface SignUpFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [show, setShow] = useState(false);
  const { addToast } = useToast();
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um error ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast, history],
  );

  const handleShow = () => setShow(true);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          {/**<img src={logoImg} alt="GoBarber" />**/}

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Login</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <ButtonPrimary type="submit">Logar</ButtonPrimary>
            <h2> OU </h2>
            <ButtonSecondary onClick={handleShow}>Cadastrar</ButtonSecondary>
          </Form>
        </AnimationContainer>
      </Content>
      <Modal show={show} setShow={setShow} />
    </Container>
  );
};

export default SignUp;


