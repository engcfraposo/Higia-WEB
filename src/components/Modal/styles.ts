import styled from "styled-components";
import { FiX } from 'react-icons/fi';
import { shade } from 'polished';
import { colors } from '../../styles/mixin';

export const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div{
        margin:10px 15px;
    }
`

export const Close = styled(FiX)`
    &:hover{
        color: ${shade(0.2, colors.secondary)};
    }
`