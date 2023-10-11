import React from 'react'
import styled from 'styled-components'

const CampoTextoDiv = styled.div`
    margin: 24px 0;
`
const CampoTextoLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`
const CampoTextoInput = styled.input`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({aoAlterado, placeholder, label, valor, obrigatorio = false, tipo = 'text'}:CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (e: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(e.target.value)
    }

    return (
        <CampoTextoDiv className="campo-texto">
            <CampoTextoLabel>
                {label}
            </CampoTextoLabel>
            <CampoTextoInput 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
                type={tipo}
            />
        </CampoTextoDiv>
    )
}

export default CampoTexto