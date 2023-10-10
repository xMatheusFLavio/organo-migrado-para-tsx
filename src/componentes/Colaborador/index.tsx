import styled from 'styled-components'

const ColaboradorDiv = styled.div`
    width: 280px;
    }
`
const ColaboradorCabecalho = styled.div`
        background-color:  #F0F0F0;
        border-radius: 10px 10px 0px 0px;
`
const ColaboradorRodape = styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;
`
const ColaboradorIMG = styled.img`
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px;
`
const RodapeH4 = styled.h4`
    color: #6278F7;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`
const RodapeH5 = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 16px;
`

interface ColaboradorProps {
    nome: string
    imagem: string
    cargo: string
    corDeFundo: string
}

export default function Colaborador ({ nome, imagem, cargo, corDeFundo } :ColaboradorProps) {
    return (<ColaboradorDiv>
        <ColaboradorCabecalho style={{ backgroundColor: corDeFundo }}>
            <ColaboradorIMG 
                src={imagem} 
                alt={nome}
            />
        </ColaboradorCabecalho>
        <ColaboradorRodape>
            <RodapeH4>{nome}</RodapeH4>
            <RodapeH5>{cargo}</RodapeH5>
        </ColaboradorRodape>
    </ColaboradorDiv>)
}
