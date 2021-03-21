import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ButtonPrimary from '../ButtonPrimary';
import { colors } from '../../styles/mixin';
import Input from '../Input';
import { useToast } from '../../hooks/toast';
import { useCallback } from 'react';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { FiAtSign, FiCreditCard, FiFileText, FiGlobe, FiHome, FiLock, FiMail, FiMap, FiMapPin, FiPhoneCall, FiUser } from 'react-icons/fi';
import { Close, FormGroup } from './styles';

// import { Container } from './styles';
interface Modal {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SignUpFormData {
    nameNew: string;
    birthdate: string;
    profissionalNumber: string;
    cpf: string;
    zipCode: string;
    address: string;
    addressNumber: string;
    country: string;
    state: string;
    cellphone: string;
    email: string;
    passwordNew: string;
    checkPassword: string;
}

const Modal = ({show = false, setShow}: Modal) => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const handleClose = () => setShow(false);

    const handleSubmit = useCallback(
        async (data: SignUpFormData) => {
            console.log(data)
          try {
            formRef.current?.setErrors({});
    
            const schema = Yup.object().shape({
              nameNew: Yup.string().required('Nome é obrigatório'),
              birthdate: Yup.string().required('Data é obrigatório'),
              profissionalNumber: Yup.string().required('Registro é obrigatório'),
              cpf: Yup.string()
                .max(14, 'CPF invalido')
                .min(14, 'CPF invalido')
                .required('CPF é obrigatório'),
             zipCode: Yup.string()
                .max(9, 'CEP invalido')
                .min(9, 'CEP invalido')
                .required('CEP é obrigatório'),
              address: Yup.string().required('Endereço é obrigatório'),
              addressNumber: Yup.number().required('Numero é obrigatório'),
              country: Yup.string().required('País é obrigatório'),
              state: Yup.string().required('Estado é obrigatório'),
              cellphone: Yup.string().min(13, 'No mínimo 6 dígitos'),
              email: Yup.string()
                .required('E-mail é obrigatório')
                .email('Digite um e-mail válido'),
              passwordNew: Yup.string().min(6, 'No mínimo 6 dígitos'),
              checkPassword: Yup.string().min(6, 'No mínimo 6 dígitos'),
            });
    
            await schema.validate(data, { abortEarly: false });

            const submitData = {
                name: data.nameNew,
                birthdate: data.birthdate,
                profissionalNumber: data.profissionalNumber,
                cpf: data.cpf,
                zipCode: data.zipCode,
                address: data.address,
                addressNumber: data.addressNumber,
                country: data.country,
                state: data.state,
                cellphone: data.cellphone,
                email: data.email,
                password: data.passwordNew,

            }
    
            await api.post('/users', submitData);
    
            handleClose();
    
            addToast({
              type: 'success',
              title: 'Cadastro realizado!',
              description: 'Você já pode fazer seu logon no GoBarber!',
            });
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
    
              formRef.current?.setErrors(errors);
              return;
            }
    
            addToast({
              type: 'error',
              title: 'Erro na cadastro',
              description: 'Ocorreu um error ao fazer cadastro, tente novamente.',
            });
          }
        },
        [addToast],
      );
  return (
    <Dialog
        maxWidth={'lg'}
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          
        <FormGroup>
        <div />
        <Close size={40} onClick={handleClose} />
        </FormGroup>
        <DialogTitle style={{color: colors.primary, textAlign: 'center',}}>{"Bem vindo a HIGIA"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Cadastre-se e tenha acesso a maior plataforma de atendimento psicológico. <strong>Para começar sua jornada antes precisamos de algumas informações </strong>
          </DialogContentText>
          <Form ref={formRef} onSubmit={handleSubmit}>

            <FormGroup>
                <Input name="nameNew" icon={FiUser} placeholder="Nome Completo" />
                <Input name="birthdate" icon={FiUser} placeholder="Data de Nascimento (DD/MM/YYYY)" />
            </FormGroup>

            <FormGroup>
                <Input name="profissionalNumber" icon={FiCreditCard} placeholder="Registro Profissional" />
                <Input name="cpf" icon={FiCreditCard} placeholder="CPF (000.000.000-00)" />
            </FormGroup>

            <FormGroup>
                <Input name="zipCode" icon={FiMail} placeholder="Cep (50000-000)" />
                <Input name="address" icon={FiHome} placeholder="Rua (Av.Paulista)" />
                <Input name="addressNumber" type="number" icon={FiMapPin} placeholder="Numero" />
            </FormGroup>

            <FormGroup>
                <Input name="addressComplement" icon={FiFileText} placeholder="Complemento" />
                <Input name="country" icon={FiGlobe} placeholder="País (Brasil)" />
                <Input name="state" icon={FiMap} placeholder="Estado (PE)" />
            </FormGroup>

            <FormGroup>
                <Input name="cellphone" type ="number" icon={FiPhoneCall} placeholder="Numero de Celular - (81) 99999-9999" />
                <Input name="email" icon={FiAtSign} placeholder="E-mail" />
            </FormGroup>
            <FormGroup>
                <Input
                name="passwordNew"
                icon={FiLock}
                type="password"
                placeholder="Senha"
                />
                 <Input
                name="checkPassword"
                icon={FiLock}
                type="password"
                placeholder="Confirmar Senha"
                />
            </FormGroup>
           
            
            
            <ButtonPrimary type="submit">
            Cadastrar
          </ButtonPrimary>
          </Form>
        </DialogContent>
      </Dialog>
  );
}

export default Modal;