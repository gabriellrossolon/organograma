import '../../index.css'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'
import { TextCamp } from '../TextCamp'
import { useState } from 'react'

export const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="flex justify-center my-20">
            <form onSubmit={aoSalvar} className=" bg-primaryTwo-100 rounded-lg p-9 shadow-md">
                <h2 className="text-2xl">Preencha os dados para criar o card do colaborador</h2>
                <TextCamp 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextCamp 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"  
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextCamp 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Insira o endereço da sua imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}