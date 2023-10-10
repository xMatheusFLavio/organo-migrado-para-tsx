import styled from "styled-components"

const ListaSuspensaLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`
const ListaSuspensaSelect = styled.select`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    obrigatorio: boolean
    valor: string
    itens: string[]
}

export default function ListaSuspensa ({ label, aoAlterado, obrigatorio, valor, itens } :ListaSuspensaProps) {

    return (
        <ListaSuspensaLabel>
            <label>{label}</label>
            <ListaSuspensaSelect 
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => aoAlterado(e.target.value)} 
                required={obrigatorio} 
                value={valor}
            >
                    <option value=""></option>
                    {itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
            </ListaSuspensaSelect>
        </ListaSuspensaLabel>
    )
}

