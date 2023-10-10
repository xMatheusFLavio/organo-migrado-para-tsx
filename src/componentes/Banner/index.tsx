import styled from 'styled-components'

const HeaderContainer = styled.header`
        background-color: #6278F7;
        text-align: center;
`
const HeaderIMG = styled.img`
    max-width: 100%;
`

interface BannerProps {
    enderecoIMG: string
    textoALT?: string
}

export default function Banner({ enderecoIMG, textoALT }: BannerProps) {
    return (
        <HeaderContainer>
            <HeaderIMG src={enderecoIMG} alt={textoALT || 'TEXTO DE TESTE'} />
        </HeaderContainer>
    )
}