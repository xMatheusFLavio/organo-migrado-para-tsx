import { ReactElement } from 'react'
import styled from 'styled-components'

const BotaoStyles = styled.button`
        background-color: #6278f7;
        border-radius: 10px;
        font-weight: 700;
        font-size: 18px;
        padding: 32px;
        border: none;
        cursor: pointer;
        color: #FFF;
        margin: 32px 0;
    &:hover {
        color: #95FFD4;
    }
`

interface BotaoProps {
    children: ReactElement | string
}

export default function Botao({children}: BotaoProps) {
    return (<BotaoStyles>
        {children}
    </BotaoStyles>)
}

