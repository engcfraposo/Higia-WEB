import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const ButtonPrimary: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container
      disabled={loading}
      isLoading={Number(loading)}
      type="button"
      {...rest}
    >
      {loading ? 'Carregando...' : children}
    </Container>
  );
};

export default ButtonPrimary;
