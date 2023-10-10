import styled from 'styled-components'
import Colaborador from '../Colaborador'
import { IColaborador } from '../../shared/interfaces/IColaborador'

const TimeSection = styled.section`
    text-align: center;
    padding: 32px;
`
const TimeH3 = styled.h3`
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
`
const TimeColaboradores = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
`
interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
}

export default function Time({ corPrimaria, corSecundaria, nome, colaboradores }: TimeProps) {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <TimeSection style={css}>
            <TimeH3 style={{ borderColor: corPrimaria }}>{nome}</TimeH3>
            <TimeColaboradores>
                {colaboradores.map(colaborador => 
                    <Colaborador 
                        corDeFundo={corPrimaria} 
                        key={colaborador.nome} nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                    />
                )}
            </TimeColaboradores>
        </TimeSection>
            : <></>
    )
}

