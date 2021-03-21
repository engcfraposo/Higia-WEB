import styled from 'styled-components';
import { shade } from 'polished';
import { colors } from '../../styles/mixin';

interface ContainerProps {
  isLoading: number;
}

export const Container = styled.button<ContainerProps>`
  background: ${colors.secondary};
  height: 56px;
  border-radius: 30px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.9s;

  &:hover {
    background: ${shade(0.2, '#fff')};
    color: ${shade(0.2, colors.secondary)};
  }

  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
`;
